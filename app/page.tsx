import Link from "next/link";
import { materiList } from "@/data/materi";
import StudentProfile from "@/components/StudentProfile";

export default function HomePage() {
  return (
    <div className="space-y-5">
      <header className="overflow-hidden rounded-3xl border border-mint-light bg-cream/95 p-5 text-center shadow-sm shadow-mint/30">
        <svg
          viewBox="0 0 320 125"
          role="img"
          aria-label="Awan putih dan ombak hijau"
          className="mx-auto mb-2 h-28 w-full"
        >
          <path
            d="M37 45c0-10 8-18 18-18 5 0 10 2 13 6 4-10 13-16 24-16 15 0 27 12 27 27 8 1 14 8 14 16H37c-8 0-14-6-14-13s6-13 14-13Z"
            fill="#fff"
          />
          <circle cx="238" cy="33" r="17" fill="#f7e9b0" />
          <path d="M0 94c42-22 81 18 123-1s78-12 112 0 57 10 85-3v35H0Z" fill="#b8cfc4" />
          <path d="M0 108c42-15 78 13 121 0s81-9 117 2 55 5 82-2v17H0Z" fill="#dcebe3" />
          <path d="M210 78c10-8 21-8 31 0-10 8-21 8-31 0Zm31 0 9-7v14Z" fill="#5f7a6e" />
          <circle cx="215" cy="76" r="1.5" fill="#fdfdf8" />
        </svg>
        <p className="text-sm font-bold text-forest/60">
          Belajar Bahasa Inggris kelas 2 SD
        </p>
        <h1 className="mt-1 font-display text-2xl font-bold text-forest">
          Halo! Mau belajar apa hari ini?
        </h1>
      </header>

      <StudentProfile />

      <section
        aria-label="Pilih materi belajar"
        className="grid grid-cols-2 gap-3"
      >
        {materiList.map((m, i) => (
          <article
            key={m.id}
            className="flex min-h-48 flex-col rounded-3xl border border-mint-light bg-cream p-4 shadow-sm shadow-mint/30"
          >
            <Link href={`/materi/${m.id}`} className="flex-1">
              <span className="inline-flex rounded-full bg-mint-light px-3 py-1 text-xs font-bold text-forest">
                Materi {i + 1}
              </span>
              <h2 className="mt-3 font-display text-lg font-bold leading-snug text-forest">
                {m.judul}
              </h2>
              <p className="mt-2 text-xs font-bold text-forest/55">
                {m.soal.length} Soal
              </p>
            </Link>
            <div className="mt-3">
              <Link
                href={`/materi/${m.id}`}
                className="block rounded-full bg-mint-light px-3 py-2 text-center text-sm font-bold text-forest transition-colors hover:bg-mint"
              >
                Belajar
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
