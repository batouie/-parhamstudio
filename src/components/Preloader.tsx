"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // کاهش زمان لودینگ به ۲.۲ ثانیه (سریع‌تر و بدون معطلی)
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  // تنظیمات انیمیشن نرم‌تر (Spring با نرمی بالا)
  const smoothEase = [0.22, 1, 0.36, 1]; // Cubic bezier بسیار نرم

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col overflow-hidden"
        >
          {/* بخش بالایی: متن PARHAM */}
          <div className="flex-1 flex items-end justify-center overflow-hidden pb-2 md:pb-4 relative">
            {/* خط عمودی سمت راست */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.2, delay: 0.1, ease: smoothEase }}
              className="absolute right-8 md:right-16 bottom-0 w-[1px] bg-white/10"
            />
            
            <motion.h1
              initial={{ y: "-110%" }} // از بالا
              animate={{ y: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: smoothEase }}
              className="font-cinzel text-[15vw] md:text-[12vw] leading-[0.8] font-black text-white tracking-tighter"
            >
              PARHAM
            </motion.h1>
          </div>

          {/* بخش پایینی: متن BATOUIE (به جای STUDIO) */}
          <div className="flex-1 flex items-start justify-center overflow-hidden pt-2 md:pt-4 relative">
            {/* خط عمودی سمت چپ */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.2, delay: 0.1, ease: smoothEase }}
              className="absolute left-8 md:left-16 top-0 w-[1px] bg-white/10"
            />

            <motion.h1
              initial={{ y: "110%" }} // از پایین
              animate={{ y: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: smoothEase }}
              className="font-cinzel text-[15vw] md:text-[12vw] leading-[0.8] font-black text-transparent tracking-tighter"
              style={{ WebkitTextStroke: "1px #D4FF24" }}
            >
              BATOUIE
            </motion.h1>
          </div>

          {/* متن‌های کوچک در گوشه‌ها */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-[#D4FF24] animate-pulse" />
            <span className="text-gray-400 text-[10px] md:text-xs font-vazirmatn tracking-[0.2em] uppercase">
              Loading
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-right"
          >
            <p className="text-gray-600 font-cinzel text-[10px] md:text-xs tracking-widest">
              WEB DESIGN & DEVELOPMENT
            </p>
            <p className="text-[#D4FF24] font-cinzel text-[10px] md:text-xs tracking-widest mt-1">
              © 2027
            </p>
          </motion.div>

          {/* نوار پیشرفت خیلی نازک در مرکز */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-[1px] bg-white/10 overflow-hidden">
             <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1/2 h-full bg-[#D4FF24]"
            />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}