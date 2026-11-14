import Link from "next/link";
import { notFound } from "next/navigation";
import { getMateriById, materiList } from "@/data/materi";

export function generateStaticParams() {
  return materiList.map((m) => ({ id: m.id }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const materi = getMateriById(id);
  if (!materi) notFound();

  return (
    <div className="space-y-4">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm font-bold text-forest/70 transition-colors hover:text-forest"
      >
        <span aria-hidden>←</span> Kembali
      </Link>

      <header className="rounded-3xl border border-mint-light bg-cream p-5 shadow-sm shadow-mint/30">
        <h1 className="font-display text-2xl font-bold leading-snug text-forest">
          {materi.judul}
        </h1>
      </header>

      <section className="rounded-3xl border border-mint-light bg-cream p-5 shadow-sm shadow-mint/30">
        <h2 className="font-display text-lg font-bold text-forest">
          Penjelasan
        </h2>
        <p className="mt-2 leading-relaxed text-forest/80">
          {materi.penjelasan}
        </p>
      </section>

      <section className="rounded-3xl border border-mint-light bg-cream p-5 shadow-sm shadow-mint/30">
        <h2 className="font-display text-lg font-bold text-forest">
          Contoh Kalimat
        </h2>
        <ul className="mt-3 space-y-2">
          {materi.contoh.map((kalimat, i) => (
            <li
              key={i}
              className="rounded-2xl bg-cream px-4 py-3 font-semibold text-forest shadow-sm"
            >
              {kalimat}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-mint-light bg-cream p-5 shadow-sm shadow-mint/30">
        <h2 className="font-display text-lg font-bold text-forest">
          Vocabulary
        </h2>
        <ul className="mt-3 space-y-2">
          {materi.vocabulary.map((v, i) => (
            <li
              key={i}
              className="flex items-center gap-2 rounded-2xl bg-mint-light px-3 py-2"
            >
              <span className="rounded-full bg-sun/70 px-3 py-1 text-sm font-bold text-forest">
                {v.kata}
              </span>
              <span className="text-sm font-semibold text-forest/70">
                {v.arti}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <Link
        href={`/latihan/${materi.id}`}
        className="block rounded-full bg-forest py-4 text-center font-display text-lg font-bold text-cream shadow-md shadow-mint/40 transition-transform hover:scale-[1.02]"
      >
        Mulai Latihan 🌱
      </Link>
    </div>
  );
}
