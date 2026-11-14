import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { latihanList } from "@/data/latihan";
import StudentProfile from "@/components/StudentProfile";

export default function HomePage() {
  return (
    <div className="space-y-5">
      <header className="overflow-hidden rounded-3xl border border-mint-light bg-cream/95 p-5 text-center shadow-sm shadow-mint/30">
        <svg
          viewBox="0 0 320 125"
          role="img"
          aria-label="White clouds and green waves"
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
          Grade 2 English Challenges
        </p>
        <h1 className="mt-1 font-display text-2xl font-bold text-forest">
          <span className="inline-flex items-center gap-2">
            <Sparkles aria-hidden="true" className="h-6 w-6 text-forest/60" />
            Ready for a challenge?
          </span>
        </h1>
      </header>

      <StudentProfile />

      <section aria-label="Choose an enrichment challenge" className="space-y-3">
        <h2 className="px-1 font-display text-lg font-bold text-forest">
          Enrichment Challenges
        </h2>
        {latihanList.map((latihan, i) => (
          <article
            key={latihan.id}
            className="flex items-center gap-4 rounded-3xl border border-mint-light bg-cream p-4 shadow-sm shadow-mint/30"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint-light font-display text-lg font-bold text-forest">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="min-w-0 flex-1">
              <span className="inline-flex rounded-full bg-mint-light px-3 py-1 text-xs font-bold text-forest">
                HOTS Challenge
              </span>
              <h3 className="mt-2 font-display text-base font-bold leading-snug text-forest">
                {latihan.judul}
              </h3>
              <p className="mt-1 text-xs font-bold text-forest/55">
                {latihan.soal.length} enrichment questions
              </p>
            </div>
            <Link
              href={`/latihan/${latihan.id}`}
              aria-label={`Start ${latihan.judul}`}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-cream transition-transform hover:scale-105"
            >
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
