"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const PARHAM = "PARHAM".split("");
const STUDIO = "STUDIO".split("");

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 4500); // ۴.۵ ثانیه برای دیده شدن کامل انیمیشن

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
          exit={{ 
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", // افکت پرده
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* ۱. نقطه نور اولیه (قلب تپنده) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 1, 1.5, 1], 
              opacity: [0, 1, 0.5, 1, 0.5] 
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute w-4 h-4 bg-[#D4FF24] rounded-full shadow-[0_0_50px_rgba(212,255,36,0.8)]"
          />

          {/* ۲. ذرات نور که از مرکز پرتاب می‌شوند */}
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{ 
                x: Math.cos((i * 15) * Math.PI / 180) * 200, 
                y: Math.sin((i * 15) * Math.PI / 180) * 200,
                opacity: 0,
                scale: 0
              }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              className="absolute w-1.5 h-1.5 bg-[#D4FF24] rounded-full"
            />
          ))}

          {/* ۳. متن PARHAM (حروف از تاریکی بیرون می‌آیند) */}
          <div dir="ltr" className="flex gap-1 md:gap-2 z-10 relative">
            {PARHAM.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{
                  delay: 1.5 + i * 0.1,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-white font-cinzel text-5xl md:text-7xl font-black tracking-tighter"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* ۴. خط نورانی افقی */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "300px", opacity: 1 }}
            transition={{ delay: 2.5, duration: 1, ease: "easeInOut" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-[#D4FF24] to-transparent my-4 z-10"
          />

          {/* ۵. متن STUDIO (با فاصله‌گذاری زیاد) */}
          <div dir="ltr" className="flex gap-4 md:gap-8 z-10">
            {STUDIO.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 3 + i * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="text-gray-400 font-cinzel text-sm md:text-lg font-medium tracking-[0.5em]"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* ۶. متن کوچک پایین (در حال آماده‌سازی) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="absolute bottom-12 text-gray-600 font-vazirmatn text-xs md:text-sm tracking-widest"
          >
            یک بعد جدید از طراحی
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}