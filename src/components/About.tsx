"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#050505] border-t border-white/[0.05] overflow-hidden">
      
      {/* هاله نور ملایم در پس‌زمینه */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4FF24]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          {/* برچسب بالا */}
          <div className="inline-block px-4 py-1.5 mb-6 border border-[#D4FF24]/30 rounded-full text-[#D4FF24] text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase font-sans">
            BEHIND THE DESIGN
          </div>
          
          {/* تیتر اصلی */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-12">
            طراحی، فراتر از ظاهر.
          </h2>
        </motion.div>

        {/* متن‌ها - در یک ستون و با فاصله مشخص */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6 text-gray-400 text-sm md:text-lg leading-loose"
        >
          <p className="text-white font-medium">
            من پرهام بتوئی هستم؛ طراح مستقل وب‌سایت و توسعه‌دهنده راهکارهای دیجیتال.
          </p>
          <p>
            تمرکز من بر خلق تجربه‌های دیجیتال اختصاصی است؛ جایی که طراحی خلاقانه، فناوری‌های مدرن و هوش مصنوعی در کنار هم قرار می‌گیرند.
          </p>
          <p>
            در هر پروژه تلاش می‌کنم راهکاری متناسب با هویت، نیازها و اهداف کسب‌وکار ارائه دهم؛ راهکاری که علاوه بر ظاهر حرفه‌ای، عملکرد و تجربه کاربری مناسبی داشته باشد.
          </p>

          {/* بخش نام انگلیسی (چپ‌چین) */}
          <div className="mt-12 pt-8 border-t border-white/10 w-full flex flex-col items-start" dir="ltr">
            <p className="text-white font-cinzel font-black text-xl md:text-2xl tracking-widest">PARHAM BATOUIE</p>
            <p className="text-gray-500 text-[10px] md:text-xs tracking-[0.2em] mt-2 uppercase font-sans">Independent AI Web Designer & Developer</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}