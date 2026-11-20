"use client";
import { useState, useEffect } from "react";

interface Order {
  id: string;
  name: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string | null;
  createdAt: string;
}

interface Portfolio {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string;
  link: string | null;
  createdAt: string;
}

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);
  const [form, setForm] = useState({ title: "", description: "", imageUrl: "", link: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [ordersRes, portfolioRes] = await Promise.all([
        fetch("/api/orders"),
        fetch("/api/portfolio"),
      ]);
      const ordersData = await ordersRes.json();
      const portfolioData = await portfolioRes.json();
      setOrders(ordersData.orders || []);
      setPortfolio(portfolioData.items || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const addPortfolio = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setForm({ title: "", description: "", imageUrl: "", link: "" });
      await fetchData();
    } catch (error) {
      console.error("Error adding portfolio:", error);
    }
  };

  const deletePortfolio = async (id: string) => {
    if (!confirm("آیا از حذف این نمونه‌کار مطمئن هستید؟")) return;
    try {
      await fetch(`/api/portfolio?id=${id}`, { method: "DELETE" });
      setPortfolio(portfolio.filter(p => p.id !== id));
    } catch (error) {
      console.error("Error deleting portfolio:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center" dir="rtl">
        <p className="font-vazirmatn">در حال بارگذاری...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 px-4 md:px-8 pb-16" dir="rtl">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="font-cinzel text-3xl md:text-5xl font-bold text-center mb-8">ADMIN PANEL</h1>

        {/* سفارشات */}
        <section>
          <h2 className="font-cinzel text-2xl font-bold mb-4 text-[#D4FF24]">سفارشات</h2>
          {orders.length === 0 ? (
            <p className="text-gray-500 font-vazirmatn">هنوز سفارشی ثبت نشده است.</p>
          ) : (
            <div className="space-y-3">
              {orders.map((o) => (
                <div key={o.id} className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold font-vazirmatn">{o.name}</p>
                      <p className="text-sm text-gray-400 font-vazirmatn">{o.phone}</p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(o.createdAt).toLocaleDateString('fa-IR')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2 font-vazirmatn">
                    {o.projectType} | {o.budget}
                  </p>
                  {o.message && (
                    <p className="text-sm text-gray-500 mt-1 font-vazirmatn">{o.message}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* نمونه‌کارها */}
        <section>
          <h2 className="font-cinzel text-2xl font-bold mb-4 text-[#D4FF24]">مدیریت نمونه‌کارها</h2>
          <form onSubmit={addPortfolio} className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            <input
              placeholder="عنوان"
              value={form.title}
              onChange={e => setForm({...form, title: e.target.value})}
              className="bg-white/5 border border-white/10 rounded-lg p-3 font-vazirmatn focus:border-[#D4FF24] outline-none"
              required
            />
            <input
              placeholder="لینک تصویر (URL)"
              value={form.imageUrl}
              onChange={e => setForm({...form, imageUrl: e.target.value})}
              className="bg-white/5 border border-white/10 rounded-lg p-3 font-vazirmatn focus:border-[#D4FF24] outline-none"
              required
            />
            <input
              placeholder="توضیحات (اختیاری)"
              value={form.description}
              onChange={e => setForm({...form, description: e.target.value})}
              className="bg-white/5 border border-white/10 rounded-lg p-3 font-vazirmatn focus:border-[#D4FF24] outline-none"
            />
            <input
              placeholder="لینک پروژه (اختیاری)"
              value={form.link}
              onChange={e => setForm({...form, link: e.target.value})}
              className="bg-white/5 border border-white/10 rounded-lg p-3 font-vazirmatn focus:border-[#D4FF24] outline-none"
            />
            <button
              type="submit"
              className="bg-[#D4FF24] text-black font-bold p-3 rounded-lg col-span-full hover:scale-[1.01] transition font-vazirmatn"
            >
              افزودن نمونه‌کار
            </button>
          </form>

          {portfolio.length === 0 ? (
            <p className="text-gray-500 font-vazirmatn">هنوز نمونه‌کاری اضافه نشده است.</p>
          ) : (
            <div className="space-y-2">
              {portfolio.map((p) => (
                <div key={p.id} className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10">
                  <span className="font-vazirmatn">{p.title}</span>
                  <button
                    onClick={() => deletePortfolio(p.id)}
                    className="text-red-400 text-sm font-vazirmatn hover:text-red-300 transition"
                  >
                    حذف
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}