# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

# Install only essential build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies first (for better caching)
COPY package*.json ./
RUN npm install --omit=dev --prefer-offline --no-audit --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Set environment variables
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Build the application
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the built application
COPY --from=builder /app/.next/standalone /usr/share/nginx/html
COPY --from=builder /app/.next/static /usr/share/nginx/html/.next/static

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove unnecessary files
RUN rm -rf /usr/share/nginx/html/.next/cache

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
