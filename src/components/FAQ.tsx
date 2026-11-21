"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "پرداخت هزینه پروژه به چه صورت است؟",
    a: "شرایط پرداخت بر اساس نوع و حجم پروژه مشخص می‌شود. معمولاً پس از توافق بر سر جزئیات، بخشی از مبلغ به‌عنوان پیش‌پرداخت دریافت می‌شود و ادامه پرداخت طبق مراحل توافق‌شده انجام خواهد شد.",
  },
  {
    q: "هزینه دامنه و هاست بر عهده چه کسی است؟",
    a: "هزینه دامنه، هاست و سرویس‌های شخص ثالث به‌صورت جداگانه محاسبه می‌شود و پیش از شروع پروژه به شما اعلام خواهد شد.",
  },
  {
    q: "طراحی وب‌سایت چقدر زمان می‌برد؟",
    a: "زمان اجرا به تعداد صفحات، امکانات و پیچیدگی پروژه بستگی دارد. زمان‌بندی دقیق پس از بررسی نیازهای شما مشخص خواهد شد.",
  },
  {
    q: "آیا تولید محتوای وب‌سایت هم انجام می‌شود؟",
    a: "تولید و ورود محتوا بر اساس توافق و محدوده خدمات هر پروژه انجام می‌شود. در صورت نیاز، می‌توان درباره تولید محتوای متنی و تصویری نیز برنامه‌ریزی کرد.",
  },
  {
    q: "آیا وب‌سایت در موبایل و تبلت هم به‌درستی نمایش داده می‌شود؟",
    a: "بله. وب‌سایت‌ها با رویکرد واکنش‌گرا طراحی می‌شوند تا در اندازه‌های مختلف صفحه‌نمایش تجربه کاربری مناسبی داشته باشند.",
  },
  {
    q: "آیا امکان توسعه وب‌سایت در آینده وجود دارد؟",
    a: "بله. ساختار پروژه با توجه به نیازهای آن طراحی می‌شود و امکان افزودن امکانات جدید در آینده، متناسب با معماری و زیرساخت پروژه، بررسی خواهد شد.",
  },
  {
    q: "آیا از هوش مصنوعی در طراحی استفاده می‌کنید؟",
    a: "بله. از ابزارها و فناوری‌های هوش مصنوعی برای بهینه‌سازی فرایند طراحی و توسعه و همچنین پیاده‌سازی قابلیت‌های هوشمند متناسب با نیاز پروژه استفاده می‌کنم.",
  },
  {
    q: "پس از تحویل پروژه پشتیبانی ارائه می‌شود؟",
    a: "شرایط و مدت پشتیبانی بر اساس پکیج انتخابی و توافق نهایی پروژه مشخص خواهد شد.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32 relative bg-[#050505]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4FF24] text-xs font-medium tracking-[0.2em] uppercase mb-4 block">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">پاسخ به سوالات شما.</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            پیش از شروع همکاری، پاسخ برخی از سوالات متداول را اینجا پیدا کنید.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-white/[0.08] bg-white/[0.02] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-right hover:bg-white/[0.04] transition-colors"
              >
                <span className="text-white font-medium text-sm md:text-base pr-4">{faq.q}</span>
                <span className="shrink-0 text-[#D4FF24]">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-5 md:p-6 pt-0 text-gray-400 text-xs md:text-sm leading-relaxed border-t border-white/[0.05] mt-2">
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