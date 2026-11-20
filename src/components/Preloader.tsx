"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const WELCOME = "WELCOME".split("");

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 3500);

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
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center gap-8 overflow-hidden"
        >
          {/* ===== بخش جدید: مجسمه + دایره سیم خاردار ===== */}
          <div className="relative flex items-center justify-center w-[280px] h-[280px] md:w-[360px] md:h-[360px]">
            
            {/* دایره سیم خاردار چرخان - لایه بیرونی */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                border: "2px dashed rgba(212, 255, 36, 0.6)",
                boxShadow: "0 0 25px rgba(212, 255, 36, 0.2), inset 0 0 25px rgba(212, 255, 36, 0.1)",
              }}
            >
              {/* خارهای سیم خاردار (نقاط نورانی) */}
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-[#D4FF24] rounded-full shadow-[0_0_8px_rgba(212,255,36,0.8)]"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${i * 22.5}deg) translateY(-50%) translateX(140px)`,
                    transformOrigin: "0 0",
                  }}
                />
              ))}
            </motion.div>

            {/* دایره دوم (داخلی‌تر) برای عمق بیشتر */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 md:inset-12 rounded-full border border-[#D4FF24]/20"
            />

            {/* عکس مجسمه */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative z-10 w-[160px] h-[160px] md:w-[220px] md:h-[220px]"
            >
              <Image
                src="/hero-3d.png"
                alt="3D Statue"
                width={400}
                height={400}
                className="object-contain drop-shadow-[0_0_30px_rgba(212,255,36,0.4)]"
                priority
              />
            </motion.div>
          </div>

          {/* لوگوی PB */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
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
              className="w-14 h-14 md:w-16 md:h-16 rounded-[1.1rem] md:rounded-[1.2rem] bg-[#D4FF24] flex items-center justify-center"
            >
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
                  delay: 0.8 + i * 0.08,
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
            transition={{ delay: 1.6, duration: 0.9, ease: "easeOut" }}
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