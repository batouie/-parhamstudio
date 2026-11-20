"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 3500); // زمان لودینگ (۳.۵ ثانیه)

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
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* خط اسکن سایبرپانک (Scanline) */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 z-0 pointer-events-none opacity-10"
            style={{
              background: "linear-gradient(to bottom, transparent, #D4FF24, transparent)",
              height: "20%",
            }}
          />

          {/* حلقه‌های نئونی متوالی (پورتال) */}
          <div className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            
            {/* حلقه ۱ (بیرونی‌ترین) */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border-2 border-[#D4FF24]/20 shadow-[0_0_30px_rgba(212,255,36,0.1)]"
            />

            {/* حلقه ۲ */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 0.8, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="absolute inset-[10%] rounded-full border-2 border-[#D4FF24]/40 shadow-[0_0_20px_rgba(212,255,36,0.2)]"
            />

            {/* حلقه ۳ (داخلی‌ترین) */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 0.6, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="absolute inset-[20%] rounded-full border-2 border-[#D4FF24]/60 shadow-[0_0_15px_rgba(212,255,36,0.3)]"
            />

            {/* دایره چرخان با خط‌چین (حس تکنولوژی) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[5%] rounded-full border border-dashed border-[#D4FF24]/50"
            />

            {/* مجسمه در مرکز (با افکت فوکوس لنز) */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className="relative z-10 w-[180px] h-[180px] md:w-[260px] md:h-[260px]"
            >
              <Image
                src="/hero-3d.png"
                alt="3D Statue"
                width={400}
                height={400}
                className="object-contain drop-shadow-[0_0_40px_rgba(212,255,36,0.5)]"
                priority
              />
            </motion.div>
          </div>

          {/* متن پایین (حس لودینگ تکنولوژیک) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-8 flex flex-col items-center gap-2 z-10"
          >
            <div className="flex gap-2 items-center">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-[#D4FF24]"
              />
              <span className="text-[#D4FF24] font-cinzel tracking-[0.3em] text-xs md:text-sm uppercase">
                Initializing
              </span>
            </div>
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