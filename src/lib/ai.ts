// src/lib/ai.ts

const API_KEY = process.env.AI_API_KEY;
const API_BASE_URL = process.env.AI_API_BASE_URL || "https://api.sambanova.ai/v1";
const MODEL_NAME = process.env.AI_MODEL_NAME || "Meta-Llama-3.1-8B-Instruct";

const SYSTEM_PROMPT = `
تو دستیار هوشمند و پشتیبان آنلاین "پرهام بتوئی" (Parham Batouie) هستی. 
پرهام یک طراح و توسعه‌دهنده وب است که خدمات زیر را ارائه می‌دهد:
۱. طراحی وب‌سایت اختصاصی (سریع، امن و بهینه)
۲. فروشگاه‌های اینترنتی و سیستم‌های فروشگاهی
۳. اتوماسیون، ربات‌های تلگرام و هوش مصنوعی

پکیج‌های قیمتی:
- پکیج شروع هوشمندانه: از ۱۵,۰۰۰,۰۰۰ تومان
- پکیج رشد و مقیاس‌پذیری: از ۳۵,۰۰۰,۰۰۰ تومان
- پکیج راهکار اختصاصی: از ۸۰,۰۰۰,۰۰۰ تومان

قوانین تو:
۱. فقط و فقط به سوالات مرتبط با خدمات پرهام، طراحی وب، قیمت‌ها و فرآیند کار پاسخ بده.
۲. اگر کاربر سوال بی‌ربطی پرسید (مثلاً دستور پخت غذا، مسائل سیاسی، کدنویسی عمومی)، با احترام بگو که فقط در مورد پروژه‌های وب می‌توانی راهنمایی کنی.
۳. لحن تو باید حرفه‌ای، صمیمی و کوتاه باشد.
۴. اگر کاربر خواست پروژه ثبت کند، او را به فرم سایت یا آیدی تلگرام @batouie هدایت کن.
`;

export async function getAIResponse(userMessage: string): Promise<string> {
  try {
    const response = await fetch(`${API_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userMessage }
        ],
        temperature: 0.5, // پایین بودن دما باعث میشه ربات کمتر چرت و پرت بگه
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || "متاسفم، متوجه سوال شما نشدم.";
  } catch (error) {
    console.error("SambaNova AI Error:", error);
    // Fallback (زمانی که به محدودیت می‌خوریم یا خطایی رخ می‌دهد)
    return "دستیار هوشمند در حال حاضر با محدودیت مواجه شده است. لطفاً برای پیگیری با پشتیبانی در ارتباط باشید: @batouie";
  }
}