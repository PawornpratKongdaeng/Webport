// app/portfolio/page.tsx
export default function PortfolioPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
        <h1 className="text-4xl font-bold mb-6">My Portfolio</h1>
        <ul className="space-y-4">
          <li className="bg-slate-800 p-4 rounded-lg shadow">Project 1: Webport</li>
          <li className="bg-slate-800 p-4 rounded-lg shadow">Project 2: MyShop</li>
          {/* เพิ่มผลงานอื่นๆ ได้ที่นี่ */}
        </ul>
      </div>
    );
  }