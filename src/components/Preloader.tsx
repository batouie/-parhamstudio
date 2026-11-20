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
    }, 4000); // زمان لودینگ

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
            className="relative z-10 flex flex-col items-center"
          >
            {/* سر ربات */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-white/5 border-2 border-[#D4FF24]/30 relative flex items-center justify-center shadow-[0_0_30px_rgba(212,255,36,0.2)]"
            >
              {/* چشم‌ها */}
              <div className="flex gap-4 md:gap-6">
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#D4FF24] shadow-[0_0_10px_rgba(212,255,36,0.8)]"
                />
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#D4FF24] shadow-[0_0_10px_rgba(212,255,36,0.8)]"
                />
              </div>
              
              {/* آنتن */}
              <motion.div
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 w-1 h-6 bg-[#D4FF24]/50 rounded-full origin-bottom"
              >
                <div className="absolute -top-2 -left-1 w-3 h-3 rounded-full bg-[#D4FF24] shadow-[0_0_10px_rgba(212,255,36,0.8)]" />
              </motion.div>
            </motion.div>

            {/* بدن و دست‌ها */}
            <div className="relative flex items-end mt-4">
              {/* دست چپ (ثابت) */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                className="w-4 h-16 md:w-6 md:h-20 bg-white/5 border-2 border-[#D4FF24]/30 rounded-full origin-top -mr-2"
              />

              {/* بدن */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1, type: "spring" }}
                className="w-20 h-24 md:w-28 md:h-32 rounded-t-[2rem] bg-white/5 border-2 border-[#D4FF24]/30 relative shadow-[0_0_30px_rgba(212,255,36,0.1)] flex items-center justify-center"
              >
                {/* دکمه/قلب وسط بدن */}
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 rounded-full bg-[#D4FF24]/50"
                />
              </motion.div>

              {/* دست راست (در حال تکان دادن) */}
              <motion.div
                animate={{ rotate: [0, -40, 0, -40, 0] }}
                transition={{ duration: 1.5, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-4 h-16 md:w-6 md:h-20 bg-white/5 border-2 border-[#D4FF24]/30 rounded-full origin-top -ml-2"
              />
            </div>
          </motion.div>

          {/* متن WELCOME */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
            className="mt-8 z-10"
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