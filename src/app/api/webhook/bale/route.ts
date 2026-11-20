// src/app/api/webhook/bale/route.ts
import { NextResponse } from "next/server";
import { getAIResponse } from "@/lib/ai";

const BALE_TOKEN = process.env.BALE_BOT_TOKEN;

// ساختار API بله دقیقاً مثل تلگرامه
interface BaleUpdate {
  message?: {
    chat: { id: number };
    text?: string;
  };
}

export async function POST(req: Request) {
  try {
    const body: BaleUpdate = await req.json();
    const message = body.message;

    if (message && message.text) {
      const chatId = message.chat.id;
      const userText = message.text;

      const aiReply = await getAIResponse(userText);

      await fetch(`https://tapi.bale.ai/bot${BALE_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: aiReply,
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Bale Webhook Error:", error);
    return NextResponse.json({ ok: true });
  }
}