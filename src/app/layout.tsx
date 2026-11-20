import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";
import Preloader from "@/components/Preloader";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazirmatn",
});

const cinzel = localFont({
  src: "../../public/fonts/Cinzel-Bold.ttf",
  weight: "700",
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parham Batouie | Studio",
  description: "Premium Web Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${cinzel.variable}`}>
      <body className={`${vazirmatn.className} bg-[#050505] text-white`}>
        {children}
        <Toaster position="top-center" richColors />
        <Preloader />
      </body>
    </html>
  );
}