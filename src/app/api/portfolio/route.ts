import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const items = await prisma.portfolio.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ items });
  } catch (error) {
    console.error("Portfolio GET Error:", error);
    return NextResponse.json({ error: "خطا در دریافت نمونه‌کارها" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { title, description, link } = await req.json();
    const item = await prisma.portfolio.create({
      data: {
        title,
        description: description || null,
        link: link || null,
      },
    });
    return NextResponse.json({ item });
  } catch (error) {
    console.error("Portfolio POST Error:", error);
    return NextResponse.json({ error: "خطا در افزودن نمونه‌کار" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "شناسه نمونه‌کار لازم است" }, { status: 400 });
    }
    await prisma.portfolio.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Portfolio DELETE Error:", error);
    return NextResponse.json({ error: "خطا در حذف نمونه‌کار" }, { status: 500 });
  }
}