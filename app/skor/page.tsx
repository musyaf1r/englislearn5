import { Suspense } from "react";
import { getSkor, type SkorRow } from "@/lib/api";
import { formatTanggal } from "@/lib/helpers";
import { latihanList } from "@/data/latihan";

export const metadata = {
  title: "Scores — English Fun",
  description: "Student challenge scores saved in Google Sheets.",
};

export default function Page() {
  return (
    <div className="space-y-5">
      <header className="pt-2 text-center">
        <h1 className="font-display text-3xl font-bold text-forest">
          Class Scores
        </h1>
        <p className="mt-1 text-sm font-semibold text-forest/60">
          Challenge results saved in Google Sheets
        </p>
      </header>

      <Suspense
        fallback={
          <div className="rounded-3xl border border-mint-light bg-cream p-8 text-center text-sm font-bold text-forest/50">
            Loading scores...
          </div>
        }
      >
        <DaftarSkor />
      </Suspense>
    </div>
  );
}

function KartuStatistik({
  label,
  nilai,
}: {
  label: string;
  nilai: string | number;
}) {
  return (
    <div className="rounded-3xl border border-mint-light bg-cream p-4 text-center shadow-sm shadow-mint/30">
      <p className="font-display text-2xl font-bold text-forest">{nilai}</p>
      <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-forest/50">
        {label}
      </p>
    </div>
  );
}

function BarisSkor({ row }: { row: SkorRow }) {
  return (
    <article className="rounded-3xl border border-mint-light bg-cream p-4 shadow-sm shadow-mint/30">
      <header className="flex items-center justify-between gap-3">
        <p className="min-w-0 truncate font-display text-lg font-bold text-forest">
          {row.nama}
        </p>
        <span className="shrink-0 rounded-full bg-sun px-3 py-1 font-display font-bold text-forest">
          Average {row.rataRata}
        </span>
      </header>
      <dl className="mt-4 grid grid-cols-2 gap-2">
        {latihanList.map((latihan) => {
          const nilai = row.nilai[latihan.id];
          return (
            <div
              key={latihan.id}
              className="rounded-2xl bg-mint-light/70 px-3 py-2"
            >
              <dt className="text-xs font-semibold text-forest/70">
                {latihan.judul}
              </dt>
              <dd className="font-display font-bold text-forest">
                {nilai === null || nilai === undefined ? "Not completed" : nilai}
                {nilai !== null && nilai !== undefined ? "/100" : ""}
              </dd>
            </div>
          );
        })}
      </dl>
      {row.tanggal && (
        <p className="mt-3 text-right text-[11px] font-semibold text-forest/45">
          {formatTanggal(row.tanggal)}
        </p>
      )}
    </article>
  );
}

async function DaftarSkor() {
  const skor = await getSkor();

  if (skor === null) {
    return (
      <div className="rounded-3xl border border-mint-light bg-cream p-8 text-center shadow-sm shadow-mint/30">
        <h2 className="font-display text-lg font-bold text-forest">
          Scores could not be loaded
        </h2>
        <p className="mt-1 text-sm text-forest/60">
          Check your internet connection or spreadsheet settings, then reload
          the page.
        </p>
      </div>
    );
  }

  if (skor.length === 0) {
    return (
      <div className="rounded-3xl border border-mint-light bg-cream p-8 text-center shadow-sm shadow-mint/30">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mint-light">
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-forest/60">
            <path d="M5 3h14a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />
          </svg>
        </div>
        <h2 className="mt-3 font-display text-lg font-bold text-forest">
          No scores saved yet
        </h2>
        <p className="mt-1 text-sm text-forest/60">
          Complete a challenge to see its results here.
        </p>
      </div>
    );
  }

  const semuaNilai = skor.flatMap((siswa) =>
    Object.values(siswa.nilai).filter(
      (nilai): nilai is number => typeof nilai === "number",
    ),
  );
  const rataRataKelas =
    Math.round(
      (skor.reduce((total, siswa) => total + siswa.rataRata, 0) / skor.length) *
        100,
    ) / 100;
  const rataRataTertinggi = Math.max(...skor.map((siswa) => siswa.rataRata));

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <KartuStatistik label="Students" nilai={skor.length} />
        <KartuStatistik label="Challenges Completed" nilai={semuaNilai.length} />
        <KartuStatistik label="Class Average" nilai={rataRataKelas} />
        <KartuStatistik label="Highest Average" nilai={rataRataTertinggi} />
      </div>

      <div className="space-y-2.5">
        {skor.map((row, i) => (
          <BarisSkor key={i} row={row} />
        ))}
      </div>
    </div>
  );
}
