"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenCheck, Trophy } from "lucide-react";

const MENU = [
  { href: "/", label: "Beranda", ikon: BookOpenCheck },
  { href: "/skor", label: "Skor", ikon: Trophy },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-1/2 z-30 w-full max-w-md -translate-x-1/2 px-4">
      <div className="flex items-center justify-around rounded-3xl border border-mint-light bg-cream/90 px-2 py-2 shadow-lg shadow-mint/40 backdrop-blur">
        {MENU.map((item) => {
          const aktif =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-bold transition-colors ${
                aktif
                  ? "bg-forest text-cream"
                  : "text-forest/70 hover:bg-mint-light"
              }`}
            >
              <item.ikon aria-hidden="true" className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
