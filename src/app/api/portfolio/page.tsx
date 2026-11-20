import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { Portfolio } from "@/generated/prisma";

export default async function PortfolioPage() {
  const items = await prisma.portfolio.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 px-4 md:px-8 pb-16" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-4 text-center">PORTFOLIO</h1>
        <p className="text-gray-400 text-center mb-12 font-vazirmatn">نمونه‌کارهای ما</p>

        {items.length === 0 ? (
          <p className="text-center text-gray-500 font-vazirmatn">هنوز نمونه‌کاری اضافه نشده است.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item: Portfolio) => (
              <div key={item.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={item.imageUrl} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-cinzel text-xl font-bold">{item.title}</h2>
                  {item.description && (
                    <p className="text-gray-400 text-sm mt-2 font-vazirmatn leading-relaxed">{item.description}</p>
                  )}
                  {item.link && (
                    <Link 
                      href={item.link} 
                      className="text-[#D4FF24] text-sm mt-4 inline-block font-vazirmatn hover:underline" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      مشاهده پروژه ←
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}