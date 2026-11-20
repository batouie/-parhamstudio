"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function StartProjectPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "سایت شرکتی",
    budget: "۱۵ تا ۳۵ میلیون",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        toast.success("درخواست شما با موفقیت ثبت شد!");
      } else {
        toast.error(data.error || "خطایی رخ داد.");
      }
    } catch (error) {
      toast.error("خطای شبکه. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  // انیمیشن‌های ورود فرم
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  if (success) {
    return (
      <div className="min-h-[100dvh] bg-[#050505] flex items-center justify-center p-4 md:p-6" dir="rtl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }} 
          animate={{ opacity: 1, scale: 1, y: 0 }} 
          className="bg-white/[0.02] border border-white/[0.08] p-8 md:p-12 rounded-3xl text-center max-w-md w-full shadow-2xl relative overflow-hidden"
        >
          {/* هاله نور پس‌زمینه موفقیت */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-green-500/20 blur-[60px] rounded-full pointer-events-none" />

          <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-green-500 w-8 h-8 md:w-10 md:h-10" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">درخواست شما ثبت شد</h1>
          <p className="text-gray-400 text-xs md:text-sm mb-8 leading-relaxed">
            ممنون که با ما همراه شدید. تیم ما در اسرع وقت با شما تماس خواهد گرفت.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4FF24] text-black font-bold rounded-full hover:scale-105 transition-all text-sm md:text-base w-full justify-center">
            بازگشت به صفحه اصلی
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-[#050505] text-white flex items-center justify-center p-4 md:p-6 relative overflow-hidden py-16 md:py-6" dir="rtl">
      {/* هاله‌های نور پس‌زمینه */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D4FF24]/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* کانتینر اصلی با حاشیه گرادیانی */}
      <div className="w-full max-w-xl p-[1px] rounded-[2rem] bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full bg-[#0a0a0a]/95 backdrop-blur-xl p-6 md:p-10 rounded-[2rem] relative overflow-hidden"
        >
          {/* دکمه بازگشت */}
          <Link 
            href="/" 
            className="absolute top-6 left-6 md:top-8 md:left-8 text-gray-500 hover:text-white transition-colors flex items-center gap-1.5 text-xs md:text-sm group"
          >
            <ArrowRight size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">بازگشت</span>
          </Link>

          <div className="text-center mb-8 md:mb-10 mt-6 md:mt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4FF24]/10 text-[#D4FF24] text-[10px] md:text-xs font-medium mb-4 border border-[#D4FF24]/20">
              <Sparkles size={12} />
              شروع همکاری
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 tracking-tight">شروع یک پروژه جدید</h1>
            <p className="text-gray-400 text-xs md:text-sm max-w-sm mx-auto leading-relaxed">
              فرم زیر را پر کنید تا در کمتر از ۲۴ ساعت با شما تماس بگیریم.
            </p>
          </div>

          <motion.form 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            onSubmit={handleSubmit} 
            className="space-y-5 md:space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <motion.div variants={itemVariants} className="space-y-1.5 md:space-y-2">
                <label className="text-xs md:text-sm text-gray-300 font-medium">نام و نام خانوادگی <span className="text-[#D4FF24]">*</span></label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-3.5 md:p-4 text-base md:text-sm focus:border-[#D4FF24] focus:ring-1 focus:ring-[#D4FF24]/50 focus:bg-white/[0.05] outline-none transition-all placeholder:text-gray-600"
                  placeholder="مثلاً: علی رضایی"
                />
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-1.5 md:space-y-2">
                <label className="text-xs md:text-sm text-gray-300 font-medium">شماره تماس <span className="text-[#D4FF24]">*</span></label>
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-3.5 md:p-4 text-base md:text-sm focus:border-[#D4FF24] focus:ring-1 focus:ring-[#D4FF24]/50 focus:bg-white/[0.05] outline-none transition-all text-left placeholder:text-gray-600"
                  placeholder="0912 345 6789"
                  dir="ltr"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <motion.div variants={itemVariants} className="space-y-1.5 md:space-y-2">
                <label className="text-xs md:text-sm text-gray-300 font-medium">نوع پروژه</label>
                <select 
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full bg-[#111] border border-white/10 rounded-xl p-3.5 md:p-4 text-base md:text-sm focus:border-[#D4FF24] focus:ring-1 focus:ring-[#D4FF24]/50 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="سایت شرکتی">سایت شرکتی</option>
                  <option value="فروشگاه اینترنتی">فروشگاه اینترنتی</option>
                  <option value="لندینگ پیج">لندینگ پیج</option>
                  <option value="وب اپلیکیشن">وب اپلیکیشن</option>
                  <option value="سایر">سایر</option>
                </select>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-1.5 md:space-y-2">
                <label className="text-xs md:text-sm text-gray-300 font-medium">بودجه تقریبی</label>
                <select 
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full bg-[#111] border border-white/10 rounded-xl p-3.5 md:p-4 text-base md:text-sm focus:border-[#D4FF24] focus:ring-1 focus:ring-[#D4FF24]/50 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="۱۵ تا ۳۵ میلیون">۱۵ تا ۳۵ میلیون تومان</option>
                  <option value="۳۵ تا ۸۰ میلیون">۳۵ تا ۸۰ میلیون تومان</option>
                  <option value="بیش از ۸۰ میلیون">بیش از ۸۰ میلیون تومان</option>
                </select>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="space-y-1.5 md:space-y-2">
              <label className="text-xs md:text-sm text-gray-300 font-medium">توضیحات پروژه <span className="text-gray-500 font-normal">(اختیاری)</span></label>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-3.5 md:p-4 text-base md:text-sm focus:border-[#D4FF24] focus:ring-1 focus:ring-[#D4FF24]/50 focus:bg-white/[0.05] outline-none transition-all resize-none placeholder:text-gray-600"
                placeholder="درباره کسب‌وکار و ایده خود بنویسید..."
              />
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#D4FF24] text-black font-bold text-base md:text-lg py-4 rounded-xl hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:hover:scale-100 shadow-[0_0_30px_rgba(212,255,36,0.2)] hover:shadow-[0_0_40px_rgba(212,255,36,0.4)]"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    در حال ارسال...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    ارسال درخواست
                  </>
                )}
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}