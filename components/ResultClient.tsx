"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import type { HasilLatihan } from "@/lib/hasil";

type StatusSimpan = "loading" | "saving" | "saved" | "failed";

const KUNCI_HASIL = "english-fun-hasil";
const statusPerHasil = new Map<string, StatusSimpan>();
const pesanPerHasil = new Map<string, string>();
const pengirimanAktif = new Set<string>();
const pendengarStatus = new Set<() => void>();

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("english-fun-hasil", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("english-fun-hasil", callback);
  };
}

function getSnapshot() {
  return typeof window === "undefined"
    ? null
    : window.sessionStorage.getItem(KUNCI_HASIL);
}

function subscribeStatus(callback: () => void) {
  pendengarStatus.add(callback);
  return () => pendengarStatus.delete(callback);
}

function getStatus(id: string | null) {
  return id ? statusPerHasil.get(id) ?? "loading" : "loading";
}

function ubahStatus(id: string, status: StatusSimpan) {
  statusPerHasil.set(id, status);
  pendengarStatus.forEach((callback) => callback());
}

function ubahPesan(id: string, pesan: string) {
  pesanPerHasil.set(id, pesan);
  pendengarStatus.forEach((callback) => callback());
}

export default function ResultClient() {
  const jsonHasil = useSyncExternalStore(subscribe, getSnapshot, () => null);
  const hasil = useMemo(() => {
    if (!jsonHasil) return null;
    try {
      return JSON.parse(jsonHasil) as HasilLatihan;
    } catch {
      return null;
    }
  }, [jsonHasil]);
  const statusSimpan = useSyncExternalStore(
    subscribeStatus,
    () => getStatus(hasil?.id ?? null),
    () => "loading",
  );
  const pesanSimpan = useSyncExternalStore(
    subscribeStatus,
    () => (hasil ? pesanPerHasil.get(hasil.id) ?? "" : ""),
    () => "",
  );

  const simpanSkor = useCallback(async (data: HasilLatihan) => {
    const tandaTersimpan = `english-fun-terkirim-${data.id}`;
    if (sessionStorage.getItem(tandaTersimpan)) return;
    if (pengirimanAktif.has(data.id)) return;

    pengirimanAktif.add(data.id);
    ubahStatus(data.id, "saving");
    try {
      const response = await fetch("/api/skor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama: data.nama,
          materiId: data.materiId,
          tema: data.tema,
          skor: data.skor,
          tanggal: data.tanggal,
        }),
      });
      const hasilKirim = (await response.json()) as {
        status?: string;
        message?: string;
      };
      if (!response.ok || hasilKirim.status !== "ok") {
        ubahPesan(
          data.id,
          hasilKirim.message ?? "Could not send the score to Google Sheets.",
        );
        ubahStatus(data.id, "failed");
        return;
      }

      sessionStorage.setItem(tandaTersimpan, "true");
      ubahPesan(data.id, "");
      ubahStatus(data.id, "saved");
    } catch {
      ubahPesan(
        data.id,
        "Could not reach the local server. Check your connection and restart npm run dev after changing .env.local.",
      );
      ubahStatus(data.id, "failed");
    } finally {
      pengirimanAktif.delete(data.id);
    }
  }, []);

  useEffect(() => {
    if (
      hasil &&
      !sessionStorage.getItem(`english-fun-terkirim-${hasil.id}`)
    ) {
      void simpanSkor(hasil);
    }
  }, [hasil, simpanSkor]);

  if (!hasil) {
    return (
      <section className="rounded-3xl border border-mint-light bg-cream p-6 text-center shadow-sm shadow-mint/30">
        <h1 className="font-display text-2xl font-bold text-forest">
          No challenge results yet
        </h1>
        <p className="mt-2 text-sm text-forest/70">
          Choose a challenge and complete it first.
        </p>
        <Link
          href="/"
          className="mt-5 block rounded-full bg-forest py-3 font-bold text-cream"
        >
          Back to Home
        </Link>
      </section>
    );
  }

  const berhasil = hasil.skor >= 70;
  const soalSalah = hasil.hasil.filter((jawaban) => !jawaban.benar);
  const sudahTersimpan = Boolean(
    sessionStorage.getItem(`english-fun-terkirim-${hasil.id}`),
  );

  return (
    <div className="space-y-4">
      <section className="rounded-3xl border border-mint-light bg-cream p-6 text-center shadow-sm shadow-mint/30">
        <p className="font-semibold text-forest/70">Well done, {hasil.nama}!</p>
        <div className="mx-auto mt-4 w-fit rounded-3xl bg-mint-light px-9 py-5">
          <p className="text-xs font-bold uppercase tracking-wide text-forest/60">
            Your Score
          </p>
          <p className="font-display text-6xl font-bold text-forest">
            {hasil.skor}
            <span className="text-2xl">/100</span>
          </p>
          <p className="text-sm font-semibold text-forest/60">
            {hasil.jumlahBenar} correct out of {hasil.total} questions
          </p>
        </div>
        <h1 className="mt-5 font-display text-2xl font-bold text-forest">
          {berhasil ? (
            <span className="inline-flex items-center gap-2">
              <Sparkles aria-hidden="true" className="h-6 w-6" />
              Great job!
            </span>
          ) : (
            "Keep practicing!"
          )}
        </h1>
      </section>

      <section
        aria-live="polite"
        className="rounded-3xl border border-mint-light bg-cream p-4 text-center text-sm font-semibold text-forest/70 shadow-sm shadow-mint/30"
      >
        {statusSimpan === "loading" &&
          !sudahTersimpan &&
          "Saving your score to Google Sheets..."}
        {statusSimpan === "saving" && "Saving your score to Google Sheets..."}
        {(sudahTersimpan || statusSimpan === "saved") &&
          "Your score was saved online."}
        {statusSimpan === "failed" && (
          <div>
            <p>Your score was not saved online, but you did a great job!</p>
            {pesanSimpan && (
              <p className="mt-1 break-words text-xs font-medium">
                Details: {pesanSimpan}
              </p>
            )}
            <button
              type="button"
              onClick={() => {
                void simpanSkor(hasil);
              }}
              className="mt-2 font-bold text-forest underline"
            >
              Try saving again
            </button>
          </div>
        )}
      </section>

      {soalSalah.length > 0 && (
        <section className="rounded-3xl border border-mint-light bg-cream p-5 shadow-sm shadow-mint/30">
          <h2 className="font-display text-lg font-bold text-forest">
            Review These Questions
          </h2>
          <ul className="mt-3 space-y-3 text-sm text-forest/80">
            {soalSalah.map(({ soal }) => (
              <li key={soal.pertanyaan}>
                <strong>{soal.pertanyaan}</strong>
                {soal.tipe === "pg" && (
                  <p>
                    Correct answer:{" "}
                    <strong>
                      {soal.kunci}){" "}
                      {soal.opsi["ABCD".indexOf(soal.kunci.toUpperCase())]}
                    </strong>
                  </p>
                )}
                {soal.tipe === "isian" && (
                  <p>
                    Correct answer: <strong>{soal.kunci}</strong>
                  </p>
                )}
                {soal.tipe === "matching" && (
                  <p>
                    {soal.pasangan.map((pasangan) => (
                      <span key={pasangan.kiri} className="mr-2">
                        {pasangan.kiri} = {pasangan.kanan}
                      </span>
                    ))}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="space-y-2">
        <Link
          href={`/latihan/${hasil.materiId}`}
          className="block rounded-full bg-forest py-3 text-center font-display font-bold text-cream"
        >
          Try Again
        </Link>
        <Link
          href="/skor"
          className="block rounded-full bg-sun py-3 text-center font-display font-bold text-forest"
        >
          View Scores
        </Link>
        <Link
          href="/"
          className="block rounded-full bg-mint-light py-3 text-center font-display font-bold text-forest"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
