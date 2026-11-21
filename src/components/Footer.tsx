"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Send, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#020202] border-t border-white/[0.05] pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 mb-16">
          
          {/* بخش برند و متن */}
          <div className="flex flex-col items-start max-w-md">
            <h2 className="font-cinzel text-2xl md:text-3xl font-black text-white tracking-widest mb-6">
              PARHAM BATOUIE
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              ایده‌های شما می‌توانند آغاز یک تجربه دیجیتال متفاوت باشند. من اینجا هستم تا با ترکیب طراحی خلاقانه و فناوری‌های مدرن، آن‌ها را به واقعیت تبدیل کنم.
            </p>
            <Link 
              href="/start-project"
              className="inline-flex items-center gap-2 bg-[#D4FF24] text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,255,36,0.2)]"
            >
              شروع یک پروژه جدید
              <span>←</span>
            </Link>
          </div>

          {/* لینک‌های سریع و شبکه‌های اجتماعی */}
          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-400 text-sm hover:text-[#D4FF24] transition-colors">خانه</Link>
              <Link href="#services" className="text-gray-400 text-sm hover:text-[#D4FF24] transition-colors">خدمات</Link>
              <Link href="/portfolio" className="text-gray-400 text-sm hover:text-[#D4FF24] transition-colors">نمونه‌کارها</Link>
              <Link href="#pricing" className="text-gray-400 text-sm hover:text-[#D4FF24] transition-colors">پکیج‌ها</Link>
              <Link href="#about" className="text-gray-400 text-sm hover:text-[#D4FF24] transition-colors">درباره من</Link>
              <Link href="#faq" className="text-gray-400 text-sm hover:text-[#D4FF24] transition-colors">سوالات متداول</Link>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-white font-bold text-sm mb-2">ارتباط با من</span>
              <a href="https://instagram.com/parhambatouie" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#D4FF24] transition-colors flex items-center gap-2">
                <Instagram size={16} /> اینستاگرام
              </a>
              <a href="https://t.me/batouie" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#D4FF24] transition-colors flex items-center gap-2">
                <Send size={16} /> تلگرام
              </a>
              {/* 👇 شماره واتس‌اپ اصلاح شد */}
              <a href="https://wa.me/989218519261" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#D4FF24] transition-colors flex items-center gap-2">
                <MessageCircle size={16} /> واتس‌اپ
              </a>
            </div>
          </div>
        </div>

        {/* خط پایانی */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © 2026 PARHAM BATOUIE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}