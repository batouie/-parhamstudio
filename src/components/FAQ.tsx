"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Link from "next/link";

const faqs = [
  { q: "پرداخت به چه صورت است؟", a: "۵۰٪ پیش‌پرداخت، ۵۰٪ پس از تحویل و تایید نهایی." },
  { q: "هزینه دامنه و هاست با کیست؟", a: "هزینه سالانه دامنه و هاست به عهده کارفرماست (راه‌اندازی با من)." },
  { q: "چقدر زمان می‌برد؟", a: "بسته به پکیج، از ۱ هفته تا ۱ ماه کاری." },
  { q: "آیا محتوای سایت را خودتان تولید می‌کنید؟", a: "محتوا توسط شما تامین می‌شود، اما من در بهینه‌سازی و چیدمان مشاوره میدهم." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* ستون راست (در RTL): عنوان و دکمه */}
        <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32 h-fit">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white font-sans mb-6 leading-tight"
          >
            سوالات<br />
            <span className="text-[#D4FF24]">متداول</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 leading-relaxed text-base mb-8 max-w-sm font-sans"
          >
            هر سوالی داری اینجا جواب داده شده. اگر هنوز سوالی داری، می‌تونی مستقیم با من در ارتباط باشی.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="https://t.me/batouie" target="_blank" className="px-6 py-3 border border-white/20 rounded-full text-sm text-white hover:bg-[#D4FF24] hover:border-[#D4FF24] hover:text-black transition-all duration-300 inline-block font-sans">
              پرسیدن سوال
            </Link>
          </motion.div>
        </div>

        {/* ستون چپ (در RTL): آکاردئون */}
        <div className="lg:col-span-7 flex flex-col border-t border-white/10">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`border-b border-white/10 group transition-colors duration-300 ${openIndex === i ? 'bg-white/[0.02]' : 'hover:bg-white/[0.02]'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex items-center justify-between text-right gap-4"
              >
                <div className="flex items-center gap-6">
                  <span className="text-sm font-mono text-gray-500 group-hover:text-[#D4FF24] transition-colors duration-300">
                    0{i + 1}
                  </span>
                  <span className={`font-medium text-lg md:text-xl font-sans transition-colors duration-300 ${openIndex === i ? 'text-[#D4FF24]' : 'text-white group-hover:text-[#D4FF24]'}`}>
                    {faq.q}
                  </span>
                </div>
                <div className={`shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-45 text-[#D4FF24]' : 'text-gray-500 group-hover:text-white'}`}>
                  <Plus size={24} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pr-[4.5rem] pl-6 text-gray-400 leading-relaxed text-sm md:text-base font-sans">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}