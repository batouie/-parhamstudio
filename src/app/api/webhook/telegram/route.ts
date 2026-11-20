// src/app/api/webhook/telegram/route.ts
import { NextResponse } from "next/server";
import { getAIResponse } from "@/lib/ai";

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

interface TelegramUpdate {
  message?: {
    chat: { id: number };
    text?: string;
  };
}

export async function POST(req: Request) {
  try {
    const body: TelegramUpdate = await req.json();
    const message = body.message;

    // اگه پیام متنی بود پردازش می‌کنیم
    if (message && message.text) {
      const chatId = message.chat.id;
      const userText = message.text;

      // گرفتن جواب از هوش مصنوعی
      const aiReply = await getAIResponse(userText);

      // ارسال جواب به تلگرام
      await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: aiReply,
        }),
      });
    }

    // همیشه باید به تلگرام 200 برگردونیم تا پیام رو دوباره نفرسته
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Telegram Webhook Error:", error);
    return NextResponse.json({ ok: true }); // حتی خطا هم 200 برمی‌گردونیم تا تلگرام ربات رو قفل نکنه
  }
}