"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-10">
      
      {/* لایه پایینی: متن‌های غول‌پیکر (به حالت عادی برگشت) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none mt-10 -translate-y-[3%]">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-cinzel text-[18vw] md:text-[17.6vw] leading-[0.75] font-black tracking-tighter text-white text-center whitespace-nowrap scale-x-[1.2] md:scale-x-[2.2] blur-[2px]"
        >
          DESIGN
        </motion.h1>
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-cinzel text-[18vw] md:text-[17.6vw] leading-[0.75] font-black tracking-tighter text-white text-center whitespace-nowrap scale-x-[1.2] md:scale-x-[2.2] blur-[2px]"
        >
          THE FUTURE
        </motion.h1>
      </div>

      {/* لایه رویی: مجسمه (به حالت عادی برگشت) */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute z-20 w-[300px] md:w-[450px] flex justify-center items-center pointer-events-none mt-[-20px] md:mt-0"
      >
        <Image 
          src="/hero-3d.png" 
          alt="3D Object" 
          width={800} 
          height={800} 
          className="object-contain blur-[1px]" 
          priority
        />
      </motion.div>

      {/* گرادیانت تیره برای خوانایی */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-25 pointer-events-none" />

      {/* محتوای پایین: متن‌ها و دکمه‌ها (به حالت عادی برگشت) */}
      <div className="absolute bottom-8 md:bottom-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center md:items-end z-30 gap-6 md:gap-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-xs md:max-w-sm text-xs md:text-base text-gray-300 text-center md:text-right"
        >
          <div className="flex flex-col gap-2 md:gap-1.5 leading-relaxed font-medium">
            <span className="font-bold text-white text-sm md:text-lg">تجربه‌ای فراتر از یک وب‌سایت.</span>
            <span className="text-[11px] md:text-sm text-gray-400 leading-6 md:leading-relaxed">
              طراحی و توسعه وب‌سایت‌های اختصاصی، فروشگاه‌های آنلاین و راهکارهای هوشمند دیجیتال؛ با ترکیب خلاقیت، فناوری‌های مدرن و هوش مصنوعی.
            </span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col w-full md:w-auto items-center md:items-end gap-4 md:gap-3"
        >
          <div className="flex justify-center md:justify-end gap-3 md:gap-4 text-[10px] md:text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF24]"></span>
              طراحی اختصاصی
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF24]"></span>
              توسعه مدرن
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF24]"></span>
              هوشمندسازی با AI
            </span>
          </div>

          <div className="flex w-full md:w-auto gap-3">
            <Link href="/portfolio" className="flex-1 md:flex-none text-center px-4 md:px-6 py-3 border border-white/20 rounded-full text-xs md:text-sm text-white hover:bg-white hover:text-black transition-all duration-300">
              مشاهده نمونه‌کارها
            </Link>
            
            <a 
              href={`https://t.me/batouie`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 md:flex-none text-center px-4 md:px-6 py-3 bg-[#D4FF24] text-black font-bold rounded-full text-xs md:text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,255,36,0.3)]"
            >
              مشاوره رایگان
            </a>
          </div>
        </motion.div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}