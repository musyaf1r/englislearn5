import { notFound } from "next/navigation";
import { getLatihanById, latihanList } from "@/data/latihan";
import QuizClient from "@/components/QuizClient";

export function generateStaticParams() {
  return latihanList.map((latihan) => ({ id: latihan.id }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const latihan = getLatihanById(id);
  if (!latihan) notFound();

  return <QuizClient latihan={latihan} />;
}
