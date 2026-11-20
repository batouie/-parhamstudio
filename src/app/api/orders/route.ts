import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ orders });
  } catch (error) {
    console.error("Orders GET Error:", error);
    return NextResponse.json({ error: "خطا در دریافت سفارشات" }, { status: 500 });
  }
}