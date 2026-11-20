// src/app/api/webhook/telegram/route.ts
import { NextResponse } from "next/server";
import { getAIResponse } from "@/lib/ai";

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

interface TelegramUpdate {
  message?: {
    chat: { id: number };
    text?: string;
  };
  callback_query?: {
    id: string;
    data?: string;
    message?: { chat: { id: number } };
  };
}

// تعریف دکمه‌های شیشه‌ای (می‌توانید متن‌ها و مقادیر callback_data را تغییر دهید)
const mainMenuKeyboard = {
  inline_keyboard: [
    [{ text: "💰 استعلام قیمت", callback_data: "price" }],
    [{ text: "📞 تماس با پشتیبانی انسانی", callback_data: "support" }],
    [{ text: "📄 مشاهده نمونه کارها", url: "https://parhamprojects.vercel.app/fa#work" }]
  ]
};

export async function POST(req: Request) {
  try {
    const body: TelegramUpdate = await req.json();

    // ۱. پردازش پیام متنی
    if (body.message && body.message.text) {
      const chatId = body.message.chat.id;
      const userText = body.message.text;

      // اگر کاربر /start زد، منوی خوش‌آمدگویی با دکمه بفرست
      if (userText === "/start") {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: "سلام! به دستیار هوشمند مشاوره خوش آمدید. لطفاً سوال خود را بپرسید یا از دکمه‌های زیر استفاده کنید:",
            reply_markup: mainMenuKeyboard,
          }),
        });
      } else {
        // گرفتن جواب از هوش مصنوعی
        const aiReply = await getAIResponse(userText);

        // ارسال جواب به همراه دکمه‌ها
        await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: aiReply,
            reply_markup: mainMenuKeyboard, // دکمه‌ها به همراه پاسخ AI ارسال می‌شوند
          }),
        });
      }
    }

    // ۲. پردازش کلیک روی دکمه‌های شیشه‌ای (Callback Query)
    if (body.callback_query) {
      const chatId = body.callback_query.message?.chat.id;
      const data = body.callback_query.data;
      const callbackId = body.callback_query.id;

      if (chatId) {
        if (data === "price") {
          await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text: "لطفاً نیاز خود را شرح دهید تا کارشناسان ما قیمت دقیق را به شما اعلام کنند.",
            }),
          });
        } else if (data === "support") {
          await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text: "شماره تماس پشتیبانی: ۰۲۱-۱۲۳۴۵۶۷۸",
            }),
          });
        }
      }

      // ⚠️ این خط بسیار مهم است: به تلگرام اطلاع می‌دهیم که کلیک را دریافت کردیم (حالت لودینگ دکمه حذف می‌شود)
      await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/answerCallbackQuery`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ callback_query_id: callbackId }),
      });
    }

    // همیشه باید به تلگرام 200 برگردونیم تا پیام رو دوباره نفرسته
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Telegram Webhook Error:", error);
    return NextResponse.json({ ok: true }); // حتی خطا هم 200 برمی‌گردونیم تا تلگرام ربات رو قفل نکنه
  }
}