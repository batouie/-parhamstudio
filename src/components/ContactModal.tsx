"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "", phone: "", projectType: "طراحی وب‌سایت", budget: "۱۵ تا ۳۵ میلیون", message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSuccess(true);
        setTimeout(() => { onClose(); setIsSuccess(false); setFormData({ name: "", phone: "", projectType: "طراحی وب‌سایت", budget: "۱۵ تا ۳۵ میلیون", message: "" }); }, 3000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" dir="rtl">
          <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#D4FF24] to-transparent opacity-50 blur-sm" />
            
            <button onClick={onClose} className="absolute top-6 left-6 text-gray-400 hover:text-white transition-colors"><X size={24} /></button>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 size={64} className="text-[#D4FF24] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">درخواست شما ثبت شد!</h3>
                <p className="text-gray-400">به زودی با شما تماس می‌گیریم.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-2">دریافت مشاوره</h3>
                <p className="text-sm text-gray-400 mb-8">فرم زیر را پر کنید تا در سریع‌ترین زمان با شما تماس بگیریم.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" required placeholder="نام و نام خانوادگی" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4FF24]/50 transition-colors" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    <input type="tel" required placeholder="شماره تماس" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4FF24]/50 transition-colors text-left" dir="ltr" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4FF24]/50 transition-colors" value={formData.projectType} onChange={e => setFormData({...formData, projectType: e.target.value})}>
                    <option value="طراحی وب‌سایت">طراحی وب‌سایت اختصاصی</option>
                    <option value="فروشگاه اینترنتی">فروشگاه اینترنتی</option>
                    <option value="اتوماسیون">اتوماسیون و هوش مصنوعی</option>
                  </select>
                  <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4FF24]/50 transition-colors" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}>
                    <option value="۱۵ تا ۳۵ میلیون">۱۵ تا ۳۵ میلیون تومان</option>
                    <option value="۳۵ تا ۸۰ میلیون">۳۵ تا ۸۰ میلیون تومان</option>
                    <option value="بیشتر از ۸۰ میلیون">بیشتر از ۸۰ میلیون تومان</option>
                  </select>
                  <textarea rows={3} placeholder="توضیحات (اختیاری)" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4FF24]/50 transition-colors resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                  
                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 py-4 bg-[#D4FF24] text-black font-bold rounded-xl hover:scale-[1.02] transition-transform disabled:opacity-50 mt-4">
                    {isSubmitting ? "در حال ارسال..." : <><Send size={18} /> ارسال درخواست</>}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}