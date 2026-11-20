"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const TITLE = "PARHAM STUDIO".split("");

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 4000); // زمان لودینگ (۴ ثانیه)

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
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* هاله نور سبز در پس‌زمینه */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.15 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute w-[600px] h-[600px] rounded-full bg-[#D4FF24] blur-[120px] pointer-events-none"
          />

          {/* مجسمه با افکت سینمایی */}
          <motion.div
            initial={{ y: 150, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-[260px] h-[260px] md:w-[380px] md:h-[380px] mb-8"
          >
            {/* یک ماسک گرادیانی برای محو شدن پایین مجسمه (حس طلوع از تاریکی) */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-transparent" style={{ bottom: '-10%', height: '40%', top: 'auto' }} />
            
            <Image
              src="/hero-3d.png"
              alt="3D Statue"
              width={500}
              height={500}
              className="object-contain drop-shadow-[0_0_50px_rgba(212,255,36,0.3)]"
              priority
            />
          </motion.div>

          {/* متن PARHAM STUDIO با فاصله‌گذاری حروف */}
          <div dir="ltr" className="flex gap-[0.3em] md:gap-[0.5em] overflow-hidden z-10">
            {TITLE.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{
                  delay: 1.2 + i * 0.05,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`text-white font-cinzel text-xl md:text-4xl font-bold tracking-wider ${
                  letter === " " ? "w-4 md:w-8" : ""
                }`}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* خط نورانی زیر متن (حس سینمایی) */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "200px", opacity: 1 }}
            transition={{ delay: 2.5, duration: 1.2, ease: "easeInOut" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-[#D4FF24] to-transparent mt-6 z-10"
          />

          {/* متن کوچک زیر خط */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="text-gray-500 font-vazirmatn text-xs md:text-sm mt-4 z-10 tracking-widest"
          >
            در حال آماده‌سازی تجربه...
          </motion.p>

          {/* نوار لودینگ نازک در پایین */}
          <div className="absolute bottom-12 w-64 h-[1px] bg-white/10 overflow-hidden rounded-full z-10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1/2 h-full bg-[#D4FF24] shadow-[0_0_15px_rgba(212,255,36,0.8)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}