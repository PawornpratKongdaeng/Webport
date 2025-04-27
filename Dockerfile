# Stage 1: Dependencies
FROM node:20-slim AS deps
WORKDIR /app
COPY package*.json ./
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/* \
    && npm install --omit=dev \
    && npm cache clean --force

# Stage 2: Builder
FROM node:20-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
RUN npm run build \
    && rm -rf node_modules/.cache \
    && npm cache clean --force

# Stage 3: Runner
FROM nginx:alpine
COPY --from=builder /app/.next/standalone /usr/share/nginx/html
COPY --from=builder /app/.next/static /usr/share/nginx/html/.next/static
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
