// src/app/api/webhook/telegram/route.ts
import { NextResponse } from "next/server";

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

// دکمه‌های شیشه‌ای
const mainMenuKeyboard = {
  inline_keyboard: [
    [{ text: "💰 استعلام قیمت", callback_data: "price" }],
    [{ text: "📞 تماس با پشتیبانی", callback_data: "support" }],
    [{ text: "📄 نمونه کارها", url: "https://parhamstudio-8mpn.vercel.app" }]
  ]
};

// پاسخ‌های ثابت
const responses: Record<string, string> = {
  "price": "برای دریافت قیمت دقیق، لطفاً نوع پروژه (سایت شرکتی، فروشگاهی، لندینگ) و بودجه تقریبی خود را بنویسید. کارشناسان ما در اسرع وقت پاسخ می‌دهند.",
  "support": "شماره تماس پشتیبانی: ۰۲۱-۱۲۳۴۵۶۷۸\nساعات پاسخگویی: شنبه تا پنجشنبه ۹ تا ۱۸",
  "default": "سلام! به ربات مشاوره خوش آمدید. لطفاً از دکمه‌های زیر استفاده کنید یا سوال خود را بپرسید."
};

export async function POST(req: Request) {
  try {
    const body: TelegramUpdate = await req.json();

    // ۱. پیام متنی
    if (body.message?.text) {
      const chatId = body.message.chat.id;
      const text = body.message.text;

      let replyText = responses.default;

      if (text === "/start") {
        replyText = "سلام! به دستیار مشاوره خوش آمدید. از منوی زیر انتخاب کنید:";
      } else if (text.includes("قیمت")) {
        replyText = responses.price;
      } else if (text.includes("پشتیبانی") || text.includes("تماس")) {
        replyText = responses.support;
      }

      await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: replyText,
          reply_markup: mainMenuKeyboard,
        }),
      });
    }

    // ۲. کلیک روی دکمه
    if (body.callback_query) {
      const chatId = body.callback_query.message?.chat.id;
      const data = body.callback_query.data;
      const callbackId = body.callback_query.id;

      if (chatId && data && responses[data]) {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: responses[data],
            reply_markup: mainMenuKeyboard,
          }),
        });
      }

      await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/answerCallbackQuery`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ callback_query_id: callbackId }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Telegram Webhook Error:", error);
    return NextResponse.json({ ok: true });
  }
}