export interface SkorRow {
  nama: string;
  nilai: Record<string, number | null>;
  rataRata: number;
  tanggal: string;
}

const APPSCRIPT_URL = process.env.NEXT_PUBLIC_SHEET_API_URL;

/**
 * Membaca skor dari Google Spreadsheet melalui Google Apps Script.
 * Dilakukan di sisi server agar URL Web App tidak terkirim ke browser
 * dan terhindar dari masalah CORS.
 */
export async function getSkor(): Promise<SkorRow[] | null> {
  if (!APPSCRIPT_URL) return null;

  try {
    const res = await fetch(APPSCRIPT_URL, {
      cache: "no-store",
    });
    if (!res.ok) return null;

    const json = (await res.json()) as { status?: string; data?: SkorRow[] };
    if (json.status !== "ok") return null;

    return json.data ?? null;
  } catch {
    return null;
  }
}
