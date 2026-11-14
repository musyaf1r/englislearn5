import { notFound } from "next/navigation";
import { getMateriById, materiList } from "@/data/materi";
import QuizClient from "@/components/QuizClient";

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

  return <QuizClient materi={materi} />;
}
