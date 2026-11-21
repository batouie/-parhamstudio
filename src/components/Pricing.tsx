"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Tag, ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface Plan {
  name: string;
  price: string;
  desc: string;
  features: string[];
  popular: boolean;
  ctaText: string;
}

const plans: Plan[] = [
  {
    name: "شروع هوشمندانه",
    price: "۱۵,۰۰۰,۰۰۰",
    desc: "برای ورود حرفه‌ای به دنیای وب",
    features: ["طراحی لندینگ پیج اختصاصی", "کاملاً ریسپانسیو", "فرم تماس متصل به تلگرام", "سئوی پایه", "ساختار مدرن و اختصاصی"],
    popular: false,
    ctaText: "انتخاب این پکیج"
  },
  {
    name: "رشد و مقیاس‌پذیری",
    price: "۳۵,۰۰۰,۰۰۰",
    desc: "برای کسب‌وکارهایی که به دنبال توسعه حضور دیجیتال خود هستند.",
    features: ["طراحی چندصفحه‌ای اختصاصی", "پنل مدیریت اختصاصی", "بهینه‌سازی سرعت بارگذاری", "اتصال به درگاه پرداخت", "پشتیبانی یک‌ساله مطابق قرارداد"],
    popular: true,
    ctaText: "انتخاب این پکیج"
  },
  {
    name: "راهکار اختصاصی",
    price: "۸۰,۰۰۰,۰۰۰",
    desc: "برای پروژه‌های پیچیده و نیازهای تخصصی",
    features: ["توسعه وب‌اپلیکیشن اختصاصی", "طراحی و پیاده‌سازی دیتابیس", "قابلیت‌های هوش مصنوعی سفارشی", "پشتیبانی ویژه مطابق قرارداد"],
    popular: false,
    ctaText: "درخواست مشاوره"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden bg-[#050505]">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[18vw] md:text-[20vw] font-black text-white/[0.02] select-none pointer-events-none z-0 whitespace-nowrap">
        PRICING
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* 👇 بنر تخفیف */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex justify-center"
        >
          <div className="relative w-full max-w-4xl bg-[#0a0a0a] border border-[#D4FF24]/30 rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4FF24]/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4FF24]/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              
              <div className="flex flex-col items-center md:items-start text-center md:text-right flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4FF24]/10 border border-[#D4FF24]/20 text-[#D4FF24] text-xs font-medium tracking-widest uppercase mb-4">
                  <Tag size={14} />
                  Launch Special Offer
                </div>
                
                <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                  <span className="text-[#D4FF24]">۱۰٪ تا ۲۰٪</span> تخفیف ویژه
                </h3>
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mb-6">
                  {/* 👇 کلمه «مستقل» حذف شد */}
                  به مناسبت آغاز فعالیت، برای پروژه‌های نخستین، تخفیف ویژه‌ای در نظر گرفته‌ام. درصد تخفیف بر اساس نوع، امکانات و محدوده همکاری پروژه شما تعیین می‌شود.
                </p>
                
                <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#D4FF24] bg-[#D4FF24]/10 px-4 py-2 rounded-full border border-[#D4FF24]/20">
                  <ShieldCheck size={16} />
                  ظرفیت محدود به ۳ پروژه اول
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 w-full md:w-auto">
                <Link 
                  href="/start-project" 
                  className="group flex items-center justify-center gap-2 bg-[#D4FF24] text-black px-8 py-4 rounded-full text-sm md:text-base font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(212,255,36,0.3)] w-full md:w-auto whitespace-nowrap"
                >
                  دریافت تخفیف
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                </Link>
                <span className="text-gray-500 text-[10px] md:text-xs">Your Next Project Starts Here.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* بخش عناوین قیمت‌گذاری */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-[#D4FF24] text-xs font-medium tracking-[0.2em] uppercase mb-4 block">TRANSPARENT PRICING</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">یک مسیر مشخص برای شروع.</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            پکیج‌های طراحی که متناسب با نیازها و مراحل مختلف رشد کسب‌وکار شما آماده کرده‌ام.
          </p>
        </div>
        
        {/* کارت‌های قیمت */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center mt-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative p-6 md:p-10 rounded-3xl backdrop-blur-xl border flex flex-col h-full ${
                plan.popular 
                  ? "bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-[#D4FF24]/50 shadow-[0_0_50px_rgba(212,255,36,0.15)] md:-translate-y-4" 
                  : "bg-white/[0.02] border-white/[0.05] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
              }`}
            >
              {plan.popular && (
                <>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#D4FF24] to-transparent opacity-80 blur-sm" />
                  <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-[#D4FF24] text-black text-[10px] md:text-xs font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full flex items-center gap-1 shadow-[0_0_20px_rgba(212,255,36,0.4)] whitespace-nowrap">
                    <Sparkles size={12} /> پیشنهاد ویژه
                  </div>
                </>
              )}

              <div className="mb-6 md:mb-8 mt-2 md:mt-0">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{plan.desc}</p>
              </div>
              
              <div className="flex flex-col mb-6 md:mb-8">
                <span className="text-xs md:text-sm text-gray-500 mb-1">شروع از</span>
                <div className="flex items-baseline gap-2">
                  <span className={`text-3xl md:text-5xl font-bold font-cinzel tracking-tight ${
                    plan.popular 
                      ? 'text-[#D4FF24] drop-shadow-[0_0_15px_rgba(212,255,36,0.3)]' 
                      : 'text-white'
                  }`}>
                    {plan.price}
                  </span>
                  <span className="text-xs md:text-sm text-gray-400">تومان</span>
                </div>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow border-t border-white/[0.05] pt-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-300">
                    <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${plan.popular ? "text-[#D4FF24]" : "text-gray-500"}`} /> 
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/start-project"
                className={`w-full py-3 md:py-4 rounded-full font-bold transition-all duration-300 mt-auto text-center flex items-center justify-center text-sm md:text-base ${
                  plan.popular 
                    ? "bg-[#D4FF24] text-black hover:scale-105 shadow-[0_0_20px_rgba(212,255,36,0.4)]" 
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {plan.ctaText}
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* شرایط تخفیف */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed max-w-2xl mx-auto">
            شرایط تخفیف: فقط برای سه پروژه اول و پروژه‌های واجد شرایط. تخفیف روی هزینه طراحی و توسعه اعمال می‌شود. هزینه دامنه، هاست و سرویس‌های شخص ثالث جداگانه محاسبه می‌شود. درصد تخفیف نهایی بر اساس نوع و پیچیدگی پروژه شما تعیین می‌شود.
          </p>
        </div>
      </div>
    </section>
  );
}