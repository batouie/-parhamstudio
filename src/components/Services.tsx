"use client";
import { motion } from "framer-motion";
import { Monitor, ShoppingCart, Cpu } from "lucide-react";

const services = [
  { 
    icon: <Monitor size={28} />, 
    title: "طراحی وب‌سایت اختصاصی", 
    desc: "وب‌سایتی که هویت برند شما را فریاد می‌زند؛ سریع، امن و بهینه‌شده برای تبدیل بازدیدکننده به مشتری." 
  },
  { 
    icon: <ShoppingCart size={28} />, 
    title: "فروشگاه‌های آنلاین مقیاس‌پذیر", 
    desc: "زیرساخت فروشگاهی مدرن با تجربه کاربری بی‌نقص. بستری امن برای فروش ۲۴ ساعته و رشد پیوسته کسب‌وکار شما." 
  },
  { 
    icon: <Cpu size={28} />, 
    title: "اتوماسیون و دستیاران هوشمند", 
    desc: "ربات‌هایی که ۲۴ ساعته بدون خستگی سفارش می‌گیرند و به مشتریان پاسخ می‌دهند. مدیریت خودکار، بدون خطای انسانی." 
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-20 border-b border-white/10 pb-6 md:pb-8"
      >
        <h2 className="text-3xl md:text-6xl font-bold text-white font-sans">
          خدمات 
        </h2>
        <span className="text-gray-500 font-mono text-xs md:text-sm mt-3 md:mt-0 uppercase tracking-widest">
          What we do
        </span>
      </motion.div>
      
      <div className="flex flex-col border-t border-white/10">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="group relative border-b border-white/10 py-6 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 transition-all duration-500 cursor-pointer"
          >
            <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

            <div className="flex items-start md:items-center gap-4 md:gap-12 relative z-10">
              <span className="text-xs md:text-sm font-mono text-gray-500 group-hover:text-[#D4FF24] transition-colors duration-300 mt-1 md:mt-0">
                0{i + 1}
              </span>
              
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                <div className="p-2.5 md:p-3 rounded-full bg-white/[0.03] text-gray-400 group-hover:text-[#D4FF24] group-hover:bg-[#D4FF24]/10 group-hover:scale-110 transition-all duration-300 shrink-0 w-fit">
                  {s.icon}
                </div>
                <h3 className="text-xl md:text-4xl font-bold text-white group-hover:text-[#D4FF24] transition-colors duration-300 font-sans">
                  {s.title}
                </h3>
              </div>
            </div>

            <div className="relative z-10 md:max-w-md md:pl-0">
              <p className="text-gray-400 leading-relaxed text-xs md:text-base group-hover:text-gray-200 transition-colors duration-300 font-sans">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}