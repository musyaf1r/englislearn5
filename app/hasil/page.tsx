import type { Metadata } from "next";
import ResultClient from "@/components/ResultClient";

export const metadata: Metadata = {
  title: "Challenge Results — English Fun",
};

export default function Page() {
  return <ResultClient />;
}
