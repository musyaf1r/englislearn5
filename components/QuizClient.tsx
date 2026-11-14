"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import type { LatihanTopic, Soal } from "@/data/latihan";
import type { HasilLatihan } from "@/lib/hasil";
import {
  getStudentName,
  subscribeStudentName,
} from "@/lib/student";
import QuestionIllustration from "@/components/QuestionIllustration";

const POIN_PER_SOAL = 10;
const HURUF = ["A", "B", "C", "D"];

function normalize(teks: string): string {
  return teks
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.!?]+$/, "");
}

export default function QuizClient({ latihan }: { latihan: LatihanTopic }) {
  const router = useRouter();
  const savedName = useSyncExternalStore(
    subscribeStudentName,
    getStudentName,
    () => "",
  );
  const [indeks, setIndeks] = useState(0);
  const [terjawab, setTerjawab] = useState(false);
  const [benar, setBenar] = useState(false);
  const [jawabanIsian, setJawabanIsian] = useState("");
  const [hasil, setHasil] = useState<{ soal: Soal; benar: boolean }[]>([]);

  const [terpasang, setTerpasang] = useState<Record<number, number>>({});

  const soal = latihan.soal[indeks];
  const total = latihan.soal.length;
  const progres = Math.round(((indeks + (terjawab ? 1 : 0)) / total) * 100);
  const jumlahBenar = hasil.filter((h) => h.benar).length;
  const skor = jumlahBenar * POIN_PER_SOAL;

  // urutan kolom kanan diputar 1 agar tidak sejajar dengan kolom kiri
  const kananAcak =
    soal.tipe === "matching"
      ? soal.pasangan
          .map((p) => p.kanan)
          .map((_, i, arr) => arr[(i + 1) % arr.length])
      : [];

  function jawab(soalDijawab: Soal, hasilBenar: boolean) {
    setBenar(hasilBenar);
    setTerjawab(true);
    setHasil((prev) => [...prev, { soal: soalDijawab, benar: hasilBenar }]);
  }

  function pilihOpsi(huruf: string) {
    if (terjawab || soal.tipe !== "pg") return;
    jawab(soal, huruf.toUpperCase() === soal.kunci.toUpperCase());
  }

  function periksaIsian() {
    if (terjawab || soal.tipe !== "isian" || !jawabanIsian.trim()) return;
    jawab(soal, normalize(jawabanIsian) === normalize(soal.kunci));
  }

  function periksaPasangan() {
    if (terjawab || soal.tipe !== "matching") return;
    if (Object.keys(terpasang).length !== soal.pasangan.length) return;
    jawab(
      soal,
      soal.pasangan.every((pasangan, i) => pasangan.kanan === kananAcak[terpasang[i]]),
    );
  }

  function lanjut() {
    if (indeks + 1 >= total) {
      const hasilLatihan: HasilLatihan = {
        id: crypto.randomUUID(),
        materiId: latihan.id,
        nama: savedName,
        tema: latihan.judul,
        skor,
        jumlahBenar,
        total,
        tanggal: new Date().toISOString(),
        hasil,
      };
      sessionStorage.setItem("english-fun-hasil", JSON.stringify(hasilLatihan));
      window.dispatchEvent(new Event("english-fun-hasil"));
      router.push("/hasil");
      return;
    }
    setTerpasang({});
    setJawabanIsian("");
    setTerjawab(false);
    setIndeks((i) => i + 1);
  }

  if (!savedName) {
    return (
      <div className="mx-auto max-w-sm rounded-3xl border border-mint-light bg-cream p-6 text-center shadow-sm shadow-mint/30">
        <h1 className="font-display text-2xl font-bold text-forest">
          Enter your name on the home page first
        </h1>
        <p className="mt-2 text-sm text-forest/70">
          The same name will be used for every challenge, and your scores will
          be combined in one row.
        </p>
        <Link
          href="/"
          className="mt-5 block rounded-full bg-forest py-3 font-display font-bold text-cream"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
      <div className="space-y-4">
        <p className="text-center text-sm font-bold text-forest/70">
          Enrichment Challenge · HOTS
        </p>
        <h1 className="text-center font-display text-xl font-bold text-forest">
          {savedName} · {latihan.judul}
        </h1>
        <div className="flex items-center justify-between text-sm font-bold text-forest/70">
          <span>
            Question {indeks + 1} of {total}
          </span>
          <span>{progres}%</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-mint-light">
          <div
            className="h-full rounded-full bg-forest transition-all duration-500"
            style={{ width: `${progres}%` }}
          />
        </div>

        <div className="rounded-3xl border border-mint-light bg-cream p-5 shadow-sm shadow-mint/30">
          <span className="inline-block rounded-full bg-mint-light px-3 py-1 text-xs font-bold text-forest">
            {soal.tipe === "pg"
              ? "Multiple Choice"
              : soal.tipe === "isian"
                ? "Short Answer"
                : "Matching"}
          </span>

          <h2 className="mt-3 font-display text-xl font-bold leading-snug text-forest">
            {soal.pertanyaan}
          </h2>
          {soal.ilustrasi && <QuestionIllustration type={soal.ilustrasi} />}

          {soal.tipe === "pg" && (
            <div className="mt-5 space-y-2.5">
              {soal.opsi.map((opsi, i) => {
                const huruf = HURUF[i];
                let warna =
                  "border-mint-light bg-white text-forest hover:border-forest";
                if (terjawab) {
                  warna =
                    huruf === soal.kunci.toUpperCase()
                      ? "border-forest bg-mint-light text-forest"
                      : "border-mint-light bg-white text-forest/40";
                }
                return (
                  <button
                    key={i}
                    onClick={() => pilihOpsi(huruf)}
                    disabled={terjawab}
                    className={`flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left font-bold transition-colors ${warna}`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint-light font-display text-sm font-bold text-forest">
                      {huruf}
                    </span>
                    {opsi}
                  </button>
                );
              })}
            </div>
          )}

          {soal.tipe === "isian" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                periksaIsian();
              }}
              className="mt-5"
            >
              <input
                type="text"
                value={jawabanIsian}
                onChange={(e) => setJawabanIsian(e.target.value)}
                disabled={terjawab}
                autoFocus
                placeholder="Type your answer"
                maxLength={60}
                className="w-full rounded-2xl border-2 border-mint-light bg-white px-4 py-3.5 text-center text-lg font-bold text-forest outline-none placeholder:text-forest/30 focus:border-forest disabled:opacity-60"
              />
              {!terjawab && (
                <button
                  type="submit"
                  disabled={!jawabanIsian.trim()}
                  className="mt-3 w-full rounded-full bg-forest py-3 font-display text-base font-bold text-cream transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Check Answer
                </button>
              )}
            </form>
          )}

          {soal.tipe === "matching" && (
            <div className="mt-5">
              <p className="mb-3 text-xs font-bold text-forest/50">
                Choose the best match for each clue.
              </p>
              <div className="space-y-3">
                {soal.pasangan.map((pasangan, i) => (
                  <label key={i} className="block">
                    <span className="mb-1 block font-bold text-forest">
                      {pasangan.kiri}
                    </span>
                    <select
                      value={terpasang[i] ?? ""}
                      onChange={(event) =>
                        setTerpasang((sebelumnya) => ({
                          ...sebelumnya,
                          [i]: Number(event.target.value),
                        }))
                      }
                      disabled={terjawab}
                      className="w-full rounded-2xl border-2 border-mint-light bg-white px-4 py-3 font-semibold text-forest outline-none focus:border-forest disabled:opacity-70"
                    >
                      <option value="">Choose a match</option>
                      {kananAcak.map((arti, j) => (
                        <option key={j} value={j}>
                          {arti}
                        </option>
                      ))}
                    </select>
                  </label>
                ))}
              </div>
              {!terjawab && (
                <button
                  type="button"
                  onClick={periksaPasangan}
                  disabled={Object.keys(terpasang).length !== soal.pasangan.length}
                  className="mt-4 w-full rounded-full bg-forest py-3 font-display text-base font-bold text-cream transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Check Matches
                </button>
              )}
            </div>
          )}

          {terjawab && (
            <div className="mt-5">
              <div
                className={`rounded-2xl px-4 py-3 text-center font-bold ${
                  benar ? "bg-mint-light text-forest" : "bg-sun/60 text-forest"
                }`}
              >
                {benar ? "Correct. Great job!" : "Not quite. Keep trying!"}
                {!benar && soal.tipe === "pg" && (
                  <p className="mt-1 text-sm font-semibold">
                    Correct answer:{" "}
                    <strong>
                      {soal.kunci.toUpperCase()}){" "}
                      {soal.opsi[HURUF.indexOf(soal.kunci.toUpperCase())]}
                    </strong>
                  </p>
                )}
                {!benar && soal.tipe === "isian" && (
                  <p className="mt-1 text-sm font-semibold">
                    Correct answer: <strong>{soal.kunci}</strong>
                  </p>
                )}
                {!benar && soal.tipe === "matching" && (
                  <div className="mt-2 space-y-1 text-left text-sm font-semibold">
                    {soal.pasangan.map((p, i) => (
                      <p key={i}>
                        {p.kiri} = <strong>{p.kanan}</strong>
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={lanjut}
                className="mt-3 w-full rounded-full bg-forest py-3 font-display text-base font-bold text-cream transition-transform hover:scale-[1.02]"
              >
                {indeks + 1 >= total ? "See Results" : "Next"}
              </button>
            </div>
          )}
        </div>
      </div>
  );
}
