import { NextResponse } from "next/server";

/**
 * Perantara dari browser ke Google Apps Script untuk menyimpan skor
 * tanpa preflight CORS di browser.
 */
export async function POST(request: Request) {
  const appscriptUrl = process.env.NEXT_PUBLIC_SHEET_API_URL;

  if (!appscriptUrl) {
    return NextResponse.json(
      {
        status: "error",
        message: "NEXT_PUBLIC_SHEET_API_URL belum diatur di server.",
      },
      { status: 500 },
    );
  }

  let body: {
    nama?: string;
    materiId?: string;
    tema?: string;
    skor?: number;
    tanggal?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { status: "error", message: "Body request tidak valid." },
      { status: 400 },
    );
  }

  const nama = String(body.nama ?? "").trim();
  const tema = String(body.tema ?? "").trim();
  const materiId = String(body.materiId ?? "").trim();
  const skor = Number(body.skor);
  const tanggal = String(body.tanggal ?? "").trim();

  if (
    !nama ||
    !materiId ||
    !tema ||
    !tanggal ||
    !Number.isFinite(skor) ||
    skor < 0 ||
    skor > 100
  ) {
    return NextResponse.json(
      { status: "error", message: "Data skor tidak lengkap atau tidak valid." },
      { status: 400 },
    );
  }

  try {
    const res = await fetch(appscriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ nama, materiId, tema, skor, tanggal }),
      cache: "no-store",
    });

    const content = await res.text();
    let data: { status?: string; message?: string };
    try {
      data = JSON.parse(content) as { status?: string; message?: string };
    } catch {
      console.error("Apps Script returned a non-JSON response.", res.status);
      return NextResponse.json(
        {
          status: "error",
          message:
            "Apps Script tidak mengembalikan JSON. Periksa URL dan deployment Web App.",
        },
        { status: 502 },
      );
    }

    if (!res.ok || data.status !== "ok") {
      const message = data.message ?? "Apps Script menolak penyimpanan skor.";
      console.error("Apps Script failed to save a score:", message);
      return NextResponse.json(
        { status: "error", message },
        { status: 502 },
      );
    }

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Failed to reach Google Apps Script:", error);
    return NextResponse.json(
      {
        status: "error",
        message:
          "Gagal menghubungi Apps Script. Pastikan server lokal sudah direstart dan URL Web App benar.",
      },
      { status: 502 },
    );
  }
}
