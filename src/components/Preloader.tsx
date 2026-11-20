"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const WELCOME = "WELCOME".split("");

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 3000);

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
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center gap-6"
        >
        

          {/* لوگو */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative z-10"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(212,255,36,0.25)",
                  "0 0 60px rgba(212,255,36,0.65)",
                  "0 0 20px rgba(212,255,36,0.25)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              /* گوشه‌ها کمی ملایم‌تر و سایز کمی جمع‌وجورتر */
              className="w-14 h-14 md:w-16 md:h-16 rounded-[1.1rem] md:rounded-[1.2rem] bg-[#D4FF24] flex items-center justify-center"
            >
              {/* حذف pt-1 و اضافه کردن leading-none برای مرکزیت دقیق */}
              <span className="text-black font-cinzel text-xl md:text-2xl font-black leading-none tracking-tight translate-y-[1px]">
                PB
              </span>
            </motion.div>
          </motion.div>

          {/* WELCOME */}
          <div dir="ltr" className="flex gap-1 md:gap-2 overflow-hidden z-10">
            {WELCOME.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5 + i * 0.08,
                  duration: 0.6,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="text-white font-cinzel text-3xl md:text-5xl font-bold tracking-widest"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* PARHAM BATOUIE */}
          <motion.p
            dir="ltr"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ delay: 1.3, duration: 0.9, ease: "easeOut" }}
            className="text-gray-500 font-cinzel text-[10px] md:text-xs uppercase z-10"
          >
            PARHAM BATOUIE
          </motion.p>

          {/* نوار لودینگ */}
          <div className="absolute bottom-16 md:bottom-20 w-48 md:w-64 h-[2px] bg-white/10 overflow-hidden rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 1.6,
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