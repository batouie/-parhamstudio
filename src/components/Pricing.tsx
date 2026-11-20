"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
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
    features: ["طراحی لندینگ پیج اختصاصی", "کاملاً ریسپانسیو", "فرم تماس متصل به تلگرام", "سئوی پایه"],
    popular: false,
    ctaText: "شروع پروژه"
  },
  {
    name: "رشد و مقیاس‌پذیری",
    price: "۳۵,۰۰۰,۰۰۰",
    desc: "برای کسب‌وکارهایی که می‌خواهند چند برابر شوند",
    features: ["طراحی چند صفحه‌ای اختصاصی", "پنل مدیریت اختصاصی", "سرعت لود بهینه", "اتصال به درگاه پرداخت", "پشتیبانی ۱ ساله"],
    popular: true,
    ctaText: "شروع پروژه"
  },
  {
    name: "راهکار اختصاصی",
    price: "۸۰,۰۰۰,۰۰۰",
    desc: "برای برندهای بزرگ و نیازهای پیچیده",
    features: ["وب‌اپلیکیشن اختصاصی", "دیتابیس پیشرفته", "هوش مصنوعی سفارشی", "پشتیبانی ویژه و اختصاصی"],
    popular: false,
    ctaText: "شروع پروژه"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[18vw] md:text-[20vw] font-black text-white/[0.02] select-none pointer-events-none z-0 whitespace-nowrap">
        PRICING
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 font-sans text-white">پکیج‌ها</h2>
          <p className="text-gray-400 font-sans max-w-md mx-auto leading-relaxed text-xs md:text-base">
            یک پلن شفاف برای هر مرحله از رشد کسب‌وکار شما.
          </p>
        </div>
        
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
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 font-sans">{plan.name}</h3>
                <p className="text-xs md:text-sm text-gray-400 font-sans">{plan.desc}</p>
              </div>
              
              <div className="flex flex-col mb-6 md:mb-8">
                <span className="text-xs md:text-sm text-gray-500 font-sans mb-1">شروع از</span>
                <div className="flex items-baseline gap-2">
                  <span className={`text-3xl md:text-5xl font-bold font-cinzel tracking-tight ${
                    plan.popular 
                      ? 'text-[#D4FF24] drop-shadow-[0_0_15px_rgba(212,255,36,0.3)]' 
                      : 'text-white'
                  }`}>
                    {plan.price}
                  </span>
                  <span className="text-xs md:text-sm text-gray-400 font-sans">تومان</span>
                </div>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-300 font-sans">
                    <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${plan.popular ? "text-[#D4FF24]" : "text-gray-500"}`} /> 
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/start-project"
                className={`w-full py-3 md:py-4 rounded-full font-bold transition-all duration-300 font-sans mt-auto text-center flex items-center justify-center text-sm md:text-base ${
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
      </div>
    </section>
  );
}