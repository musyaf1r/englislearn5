import type { Metadata } from "next";
import { Suspense } from "react";
import { Baloo_2, Quicksand } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import BottomNav from "@/components/BottomNav";

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "English Fun — Latihan Pengayaan Bahasa Inggris Kelas 2 SD",
  description:
    "Latihan pengayaan Bahasa Inggris kelas 2 SD dengan soal HOTS dan rekap skor.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${baloo.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Background />
        <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col">
          <main className="flex-1 px-4 pb-32 pt-6">{children}</main>
        </div>
        <Suspense
          fallback={
            <div className="fixed bottom-4 left-1/2 z-30 w-full max-w-md -translate-x-1/2 px-4">
              <div className="h-[68px] rounded-3xl border border-mint-light bg-cream/90 shadow-lg" />
            </div>
          }
        >
          <BottomNav />
        </Suspense>
      </body>
    </html>
  );
}
