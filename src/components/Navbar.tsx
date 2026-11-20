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
        
        {/* 👈 سمت راست: منو (موبایل) / دکمه شروع پروژه (دسکتاپ) */}
        <div className="flex items-center gap-3 md:gap-4">
          
          {/* 📱 موبایل: اول همبرگر (راست‌ترین) */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* 📱 موبایل: دکمه شروع پروژه، کنار همبرگر (سمت چپش) */}
          <Link
            href="/start-project"
            className="md:hidden bg-[#D4FF24] text-black text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap"
          >
            شروع پروژه
          </Link>

          {/* 💻 دسکتاپ: دکمه شروع پروژه */}
          <Link
            href="/start-project"
            className="hidden md:block text-sm text-white hover:text-[#D4FF24] transition font-sans"
          >
            شروع پروژه ←
          </Link>
        </div>

        {/* 👈 سمت چپ: لوگو و منوها (دسکتاپ) */}
        <div className="flex items-center gap-6 md:gap-10">
          <Link
            href="/"
            className="font-cinzel text-lg md:text-xl font-bold tracking-widest text-white pt-1"
          >
            PARHAM BATOUIE
          </Link>

          <div className="hidden md:flex items-center gap-6 md:gap-10">
            <div className="w-[1px] h-4 bg-white/20"></div>
            <div className="flex gap-8 text-sm text-gray-400 font-sans">
              <Link href="#services" className="hover:text-white transition">خدمات</Link>
              <Link href="#pricing" className="hover:text-white transition">پکیج‌ها</Link>
              <Link href="#faq" className="hover:text-white transition">سوالات متداول</Link>
            </div>
          </div>
        </div>
      </div>

      {/* 👈 منوی موبایل (Dropdown) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#0a0a0a] border-b border-white/10"
          >
            <div className="flex flex-col p-4 space-y-4 font-sans text-sm text-gray-300">
              <Link href="#services" onClick={() => setIsOpen(false)} className="hover:text-white transition">خدمات</Link>
              <Link href="#pricing" onClick={() => setIsOpen(false)} className="hover:text-white transition">پکیج‌ها</Link>
              <Link href="#faq" onClick={() => setIsOpen(false)} className="hover:text-white transition">سوالات متداول</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}