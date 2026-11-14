import type { Metadata } from "next";
import ResultClient from "@/components/ResultClient";

export const metadata: Metadata = {
  title: "Hasil Latihan — English Fun",
};

export default function Page() {
  return <ResultClient />;
}
