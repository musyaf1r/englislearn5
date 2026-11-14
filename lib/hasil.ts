import type { Soal } from "@/data/latihan";

export interface HasilLatihan {
  id: string;
  materiId: string;
  nama: string;
  tema: string;
  skor: number;
  jumlahBenar: number;
  total: number;
  tanggal: string;
  hasil: { soal: Soal; benar: boolean }[];
}
