// app/api/contact/route.ts
import { NextResponse } from "next/server";

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_ADMIN_CHAT_ID!;
const BALE_TOKEN = process.env.BALE_BOT_TOKEN!;
const BALE_CHAT_ID = process.env.BALE_ADMIN_CHAT_ID!;

async function sendToTelegram(text: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: "Markdown",
    }),
  });
  return res.ok;
}

async function sendToBale(text: string) {
  // API بله مشابه تلگرام است اما با دامنه متفاوت
  const url = `https://tapi.bale.ai/bot${BALE_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: BALE_CHAT_ID,
      text,
    }),
  });
  return res.ok;
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, phone, projectType, budget, message } = data;

    const text = `
🔔 *درخواست جدید از سایت*
──────────────
👤 *نام:* ${name}
📞 *تماس:* ${phone}
📁 *نوع پروژه:* ${projectType}
💰 *بودجه:* ${budget}
💬 *توضیحات:* ${message || "ندارد"}
    `;

    // ارسال همزمان به هر دو پیام‌رسان (اگر یکی خطا داد، دیگری متوقف نشود)
    const results = await Promise.allSettled([
      sendToTelegram(text),
      sendToBale(text),
    ]);

    const allFailed = results.every(
      (r) => r.status === "rejected" || r.value === false
    );

    if (allFailed) {
      return NextResponse.json(
        { error: "ارسال به پیام‌رسان‌ها با خطا مواجه شد." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}