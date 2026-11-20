"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 4500); // کمی بیشتر برای دیده شدن کل انیمیشن

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* هاله نور سبز در پس‌زمینه */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute w-[400px] h-[400px] rounded-full bg-[#D4FF24] blur-[100px] pointer-events-none"
          />

          {/* بدنه ربات */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center mt-10"
          >
            {/* ===== سر ربات ===== */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              className="relative"
            >
              {/* آنتن */}
              <motion.div
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-6 bg-[#D4FF24]/50 rounded-full origin-bottom z-20"
              >
                <div className="absolute -top-2 -left-1 w-3 h-3 rounded-full bg-[#D4FF24] shadow-[0_0_10px_rgba(212,255,36,0.8)]" />
              </motion.div>

              {/* کلاه (Cap) */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-10 md:w-36 md:h-12 bg-[#111] rounded-t-[2rem] border-2 border-[#D4FF24]/40 z-20 flex justify-center overflow-hidden">
                <div className="w-8 h-full bg-[#D4FF24]/20" /> {/* نوار کلاه */}
              </div>
              {/* نقاب کلاه */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-36 h-2 md:w-44 md:h-3 bg-[#222] rounded-full border border-[#D4FF24]/30 z-30 shadow-lg" />

              {/* صورت (شیشه) */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-[#0a0a0a] border-2 border-[#D4FF24]/50 relative flex items-center justify-center shadow-[0_0_30px_rgba(212,255,36,0.2)] z-10">
                
                {/* عینک دودی */}
                <div className="absolute flex gap-1 md:gap-2 z-30">
                  <div className="w-8 h-6 md:w-10 md:h-8 bg-black border border-[#D4FF24]/60 rounded-lg md:rounded-xl shadow-[0_0_10px_rgba(212,255,36,0.3)] backdrop-blur-sm opacity-90" />
                  <div className="w-2 md:w-3 bg-[#D4FF24]/50 h-[2px] self-center" /> {/* پل عینک */}
                  <div className="w-8 h-6 md:w-10 md:h-8 bg-black border border-[#D4FF24]/60 rounded-lg md:rounded-xl shadow-[0_0_10px_rgba(212,255,36,0.3)] backdrop-blur-sm opacity-90" />
                </div>

                {/* چشم‌ها (زیر عینک، کمی نور) */}
                <div className="flex gap-6 md:gap-10 opacity-40">
                   <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} className="w-2 h-2 rounded-full bg-[#D4FF24]" />
                   <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} className="w-2 h-2 rounded-full bg-[#D4FF24]" />
                </div>
              </div>
            </motion.div>

            {/* ===== بدن و دست‌ها ===== */}
            <div className="relative flex items-start mt-1">
              
              {/* دست چپ (در جیب/پایین) */}
              <motion.div
                initial={{ y: 0 }}
                className="w-4 h-20 md:w-6 md:h-24 bg-[#111] border-2 border-[#D4FF24]/30 rounded-b-full rounded-t-lg origin-top -mr-2 z-0"
                style={{ transform: 'rotate(10deg)' }}
              />

              {/* بدن (لباس) */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1, type: "spring" }}
                className="w-24 h-32 md:w-32 md:h-40 bg-[#111] border-2 border-[#D4FF24]/40 rounded-t-[1rem] rounded-b-3xl relative shadow-[0_0_30px_rgba(212,255,36,0.1)] flex flex-col items-center justify-start pt-4 z-10 overflow-hidden"
              >
                {/* یقه لباس */}
                <div className="w-12 h-4 md:w-16 md:h-5 bg-black rounded-b-full border-b-2 border-[#D4FF24]/50 mb-2" />
                
                {/* دکمه‌های لباس */}
                <div className="flex flex-col gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#D4FF24]/40" />
                  <div className="w-2 h-2 rounded-full bg-[#D4FF24]/40" />
                </div>

                {/* قلب نورانی وسط سینه */}
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/2 w-3 h-3 rounded-full bg-[#D4FF24] shadow-[0_0_15px_rgba(212,255,36,0.8)]"
                />
              </motion.div>

              {/* دست راست (سلام دادن) */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: -150 }} // بالا آمدن دست
                transition={{ duration: 1, delay: 1.5, type: "spring", stiffness: 100, damping: 10 }}
                className="w-4 h-20 md:w-6 md:h-24 bg-[#111] border-2 border-[#D4FF24]/30 rounded-b-full rounded-t-lg origin-bottom -ml-2 z-0 relative"
              >
                {/* دست کوچک در حال تکان دادن */}
                <motion.div
                   animate={{ rotate: [0, 20, -20, 20, 0] }}
                   transition={{ duration: 1.5, delay: 2.5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-[#D4FF24]/20 border border-[#D4FF24]/50 rounded-full"
                />
              </motion.div>

            </div>
          </motion.div>

          {/* متن WELCOME */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
            className="mt-12 z-10"
          >
            <h2 className="text-white font-cinzel text-3xl md:text-5xl font-bold tracking-[0.3em] md:tracking-[0.5em]">
              WELCOME
            </h2>
          </motion.div>

          {/* نوار لودینگ پایین */}
          <div className="absolute bottom-12 w-48 md:w-64 h-[2px] bg-white/10 overflow-hidden rounded-full z-10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1/2 h-full bg-[#D4FF24] shadow-[0_0_10px_rgba(212,255,36,0.8)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}