"use client";
import { motion } from "framer-motion";
import { Monitor, ShoppingBag, Bot } from "lucide-react";

const services = [
  {
    num: "01",
    icon: <Monitor size={28} />,
    title: "طراحی وب‌سایت اختصاصی",
    desc: "طراحی و توسعه وب‌سایت‌های مدرن و اختصاصی متناسب با هویت برند شما؛ با تمرکز بر تجربه کاربری، سرعت، واکنش‌گرایی و عملکرد حرفه‌ای.",
    features: ["طراحی رابط کاربری اختصاصی", "توسعه واکنش‌گرا", "ساختار بهینه و قابل توسعه", "توجه به اصول سئو"]
  },
  {
    num: "02",
    icon: <ShoppingBag size={28} />,
    title: "فروشگاه‌های آنلاین",
    desc: "طراحی فروشگاه‌های اینترنتی با زیرساخت مدرن، فرایند خرید آسان و امکانات مدیریتی مناسب برای توسعه و رشد کسب‌وکار.",
    features: ["مدیریت محصولات", "سبد خرید و پرداخت", "مدیریت سفارش‌ها", "طراحی مناسب موبایل"]
  },
  {
    num: "03",
    icon: <Bot size={28} />,
    title: "اتوماسیون و دستیاران هوشمند",
    desc: "توسعه سیستم‌های هوشمند برای خودکارسازی فرایندها، مدیریت درخواست‌ها، پاسخ‌گویی و بهینه‌سازی عملیات کسب‌وکار.",
    features: ["دستیاران مبتنی بر هوش مصنوعی", "خودکارسازی فرایندها", "اتصال به سرویس‌های مختلف", "مدیریت هوشمند درخواست‌ها"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative z-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-right mb-16 md:mb-24"
        >
          <span className="text-[#D4FF24] text-xs font-medium tracking-[0.2em] uppercase mb-4 block">WHAT I DO</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            راهکارهای دیجیتال برای کسب‌وکارهای آینده.
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed md:ml-auto">
            از طراحی یک وب‌سایت اختصاصی تا توسعه سیستم‌های هوشمند؛ هر پروژه با توجه به نیاز و هدف کسب‌وکار طراحی و اجرا می‌شود.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative bg-[#0B0B0B] border border-white/[0.08] rounded-3xl p-8 md:p-10 hover:border-[#D4FF24]/40 hover:bg-[#111315] transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* شماره بزرگ در پس‌زمینه */}
              <span className="absolute top-4 left-6 text-6xl md:text-8xl font-black text-white/[0.03] group-hover:text-[#D4FF24]/5 transition-colors duration-500 pointer-events-none select-none">
                {service.num}
              </span>

              {/* آیکون */}
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-gray-400 group-hover:text-[#D4FF24] group-hover:border-[#D4FF24]/30 transition-all duration-300 mb-8">
                {service.icon}
              </div>

              <h3 className="relative z-10 text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#D4FF24] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="relative z-10 text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>

              <ul className="relative z-10 space-y-3 pt-6 border-t border-white/[0.05]">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF24]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}