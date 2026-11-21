"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        
        <div className="flex items-center gap-3 md:gap-4">
          
          {/* 📱 دکمه همبرگری */}
          <button
            className="md:hidden text-white p-1 transition-colors relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link
            href="/start-project"
            className="md:hidden bg-[#D4FF24] text-black text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap"
          >
            شروع پروژه
          </Link>

          <Link
            href="/start-project"
            className="hidden md:block text-sm text-white hover:text-[#D4FF24] transition font-sans"
          >
            شروع پروژه ←
          </Link>
        </div>

        <div className="flex items-center gap-6 md:gap-10">
          <Link
            href="/"
            className="font-cinzel text-lg md:text-xl font-bold tracking-widest text-white pt-1"
          >
            PARHAM BATOUIE
          </Link>

          <div className="hidden md:flex items-center gap-6 md:gap-10">
            <div className="w-[1px] h-4 bg-white/20"></div>
            <div className="flex gap-6 text-sm text-gray-400 font-sans">
              <Link href="/" className="hover:text-[#D4FF24] transition">خانه</Link>
              <Link href="#services" className="hover:text-[#D4FF24] transition">خدمات</Link>
              <Link href="/portfolio" className="hover:text-[#D4FF24] transition">نمونه کارها</Link>
              <Link href="#pricing" className="hover:text-[#D4FF24] transition">پکیج‌ها</Link>
              <Link href="#about" className="hover:text-[#D4FF24] transition">درباره من</Link>
              <Link href="#faq" className="hover:text-[#D4FF24] transition">سوالات متداول</Link>
            </div>
          </div>
        </div>
      </div>

      {/* 📱 منوی موبایل: باریک‌تر شده */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            /* 👇 عرض از w-48 به w-[172px] تغییر کرد */
            className="md:hidden absolute top-[60px] right-4 w-[172px] bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/[0.08] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden origin-top-right"
          >
            <div className="flex flex-col p-2">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-all px-3 py-2.5 rounded-lg flex items-center justify-between group">
                <span>خانه</span>
                <span className="text-[#D4FF24] opacity-0 group-hover:opacity-100 transition-opacity text-[10px]">←</span>
              </Link>
              <Link href="#services" onClick={() => setIsOpen(false)} className="text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-all px-3 py-2.5 rounded-lg flex items-center justify-between group">
                <span>خدمات</span>
                <span className="text-[#D4FF24] opacity-0 group-hover:opacity-100 transition-opacity text-[10px]">←</span>
              </Link>
              <Link href="/portfolio" onClick={() => setIsOpen(false)} className="text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-all px-3 py-2.5 rounded-lg flex items-center justify-between group">
                <span>نمونه کارها</span>
                <span className="text-[#D4FF24] opacity-0 group-hover:opacity-100 transition-opacity text-[10px]">←</span>
              </Link>
              <Link href="#pricing" onClick={() => setIsOpen(false)} className="text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-all px-3 py-2.5 rounded-lg flex items-center justify-between group">
                <span>پکیج‌ها</span>
                <span className="text-[#D4FF24] opacity-0 group-hover:opacity-100 transition-opacity text-[10px]">←</span>
              </Link>
              <Link href="#about" onClick={() => setIsOpen(false)} className="text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-all px-3 py-2.5 rounded-lg flex items-center justify-between group">
                <span>درباره من</span>
                <span className="text-[#D4FF24] opacity-0 group-hover:opacity-100 transition-opacity text-[10px]">←</span>
              </Link>
              <Link href="#faq" onClick={() => setIsOpen(false)} className="text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-all px-3 py-2.5 rounded-lg flex items-center justify-between group">
                <span>سوالات متداول</span>
                <span className="text-[#D4FF24] opacity-0 group-hover:opacity-100 transition-opacity text-[10px]">←</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}