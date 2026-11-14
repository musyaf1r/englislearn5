/**
 * Simpan rekap nilai terbaru setiap latihan per anak ke Google Spreadsheet.
 */
const SPREADSHEET_ID = "1kgvG7-13VEagpfdda9IU9uOEiDoymgzJfZccnn4MKKY";
const NAMA_SHEET = "Hasil";
const MATERI = [
  {
    id: "preposition",
    judul: "Posisi Benda",
    alias: ["Preposition"],
    kolom: "Preposition",
  },
  {
    id: "kepemilikan",
    judul: "Petunjuk Pemilik Benda",
    alias: ["Kepemilikan (My, Your, His, Her)"],
    kolom: "Kepemilikan",
  },
  {
    id: "ongoing-action",
    judul: "Aksi yang Sedang Berlangsung",
    alias: ["Ongoing Action"],
    kolom: "Ongoing Action",
  },
  {
    id: "like-can",
    judul: "Kesukaan dan Kemampuan",
    alias: ["Like / Don't Like / Can / Can't"],
    kolom: "Like / Don't Like / Can / Can't",
  },
  {
    id: "shadow",
    judul: "Cahaya dan Bayangan",
    alias: ["Shadow"],
    kolom: "Shadow",
  },
  {
    id: "sky-objects",
    judul: "Mengamati Benda di Langit",
    alias: ["Objects at the Sky"],
    kolom: "Objects at the Sky",
  },
  {
    id: "past-tense",
    judul: "Menyusun Cerita Masa Lalu",
    alias: ["Past Tense"],
    kolom: "Past Tense",
  },
];
const HEADER = ["Nama"]
  .concat(MATERI.map((materi) => materi.kolom))
  .concat(["Rata-rata", "Terakhir diperbarui"]);
const HEADER_LAMA = ["nama", "tema", "skor", "tanggal"];

function doPost(e) {
  let lock;
  try {
    const body = JSON.parse(e.postData.contents);
    const nama = String(body.nama || "").trim();
    const tema = String(body.tema || "").trim();
    const materiId = String(body.materiId || "");
    const skor = Number(body.skor);
    const tanggal = String(body.tanggal || "").trim();
    const indeksMateri = cariMateri(materiId, tema);

    if (
      !nama ||
      !tanggal ||
      indeksMateri < 0 ||
      !Number.isFinite(skor) ||
      skor < 0 ||
      skor > 100
    ) {
      return jsonOut({
        status: "error",
        message: "Nama, latihan, skor, atau tanggal tidak valid.",
      });
    }

    lock = LockService.getScriptLock();
    lock.waitLock(10000);
    const sheet = ambilSheet();
    const jumlahBaris = sheet.getLastRow();
    const barisNama =
      jumlahBaris > 1
        ? sheet.getRange(2, 1, jumlahBaris - 1, 1).getValues()
        : [];
    const kunciNama = nama.toLowerCase();
    const indeksAnak = barisNama.findIndex(
      (baris) => String(baris[0]).trim().toLowerCase() === kunciNama,
    );
    const nomorBaris = indeksAnak < 0 ? jumlahBaris + 1 : indeksAnak + 2;
    const nilai =
      indeksAnak < 0
        ? new Array(HEADER.length).fill("")
        : sheet.getRange(nomorBaris, 1, 1, HEADER.length).getValues()[0];

    nilai[0] = indeksAnak < 0 ? nama : nilai[0];
    nilai[indeksMateri + 1] = skor;
    nilai[MATERI.length + 1] = hitungRataRata(nilai);
    nilai[MATERI.length + 2] = tanggal;
    sheet.getRange(nomorBaris, 1, 1, HEADER.length).setValues([nilai]);

    return jsonOut({ status: "ok" });
  } catch (error) {
    return jsonOut({ status: "error", message: String(error) });
  } finally {
    if (lock && lock.hasLock()) lock.releaseLock();
  }
}

function doGet() {
  try {
    const sheet = ambilSheet();
    const jumlahBaris = sheet.getLastRow();
    const data =
      jumlahBaris < 2
        ? []
        : sheet
            .getRange(2, 1, jumlahBaris - 1, HEADER.length)
            .getValues()
            .filter((baris) => baris[0])
            .map((baris) => {
              const nilai = {};
              MATERI.forEach((materi, indeks) => {
                const skor = baris[indeks + 1];
                nilai[materi.id] =
                  skor === "" || skor === null ? null : Number(skor);
              });
              return {
                nama: String(baris[0]),
                nilai,
                rataRata: Number(baris[MATERI.length + 1]),
                tanggal: String(baris[MATERI.length + 2] || ""),
              };
            });

    return jsonOut({ status: "ok", data });
  } catch (error) {
    return jsonOut({ status: "error", message: String(error), data: [] });
  }
}

function jsonOut(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function cariMateri(materiId, tema) {
  let indeks = MATERI.findIndex((materi) => materi.id === materiId);
  if (indeks < 0) {
    const judul = normalisasiJudul(tema);
    indeks = MATERI.findIndex(
      (materi) =>
        normalisasiJudul(materi.judul) === judul ||
        materi.alias.some((alias) => normalisasiJudul(alias) === judul),
    );
  }
  return indeks;
}

function normalisasiJudul(judul) {
  return String(judul)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function hitungRataRata(baris) {
  const nilai = baris
    .slice(1, MATERI.length + 1)
    .filter((skor) => skor !== "" && skor !== null && Number.isFinite(Number(skor)))
    .map(Number);
  if (nilai.length === 0) return "";
  const jumlah = nilai.reduce((total, skor) => total + skor, 0);
  return Math.round((jumlah / nilai.length) * 100) / 100;
}

function ambilSheet() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(NAMA_SHEET);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(NAMA_SHEET);
    sheet.appendRow(HEADER);
    return sheet;
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADER);
    return sheet;
  }

  const header = sheet
    .getRange(1, 1, 1, sheet.getLastColumn())
    .getDisplayValues()[0]
    .map((nilai) => nilai.trim().toLowerCase());
  if (header.join("|") === HEADER.map((nilai) => nilai.toLowerCase()).join("|")) {
    return sheet;
  }
  if (header.join("|") === HEADER_LAMA.join("|")) {
    return migrasiLama(spreadsheet, sheet);
  }

  throw new Error(
    'Format tab "Hasil" tidak dikenal. Data tidak diubah; periksa baris header.',
  );
}

function migrasiLama(spreadsheet, sheetLama) {
  const namaArsip = cariNamaArsip(spreadsheet);
  sheetLama.setName(namaArsip);

  const sheet = spreadsheet.insertSheet(NAMA_SHEET);
  sheet.appendRow(HEADER);
  const jumlahBaris = sheetLama.getLastRow();
  if (jumlahBaris < 2) return sheet;

  const rekap = new Map();
  sheetLama
    .getRange(2, 1, jumlahBaris - 1, HEADER_LAMA.length)
    .getValues()
    .forEach((baris) => {
      const nama = String(baris[0] || "").trim();
      const indeksMateri = cariMateri("", String(baris[1] || ""));
      const skor = Number(baris[2]);
      if (!nama || indeksMateri < 0 || !Number.isFinite(skor)) return;

      const kunciNama = nama.toLowerCase();
      let nilai = rekap.get(kunciNama);
      if (!nilai) {
        nilai = new Array(HEADER.length).fill("");
        nilai[0] = nama;
        rekap.set(kunciNama, nilai);
      }
      nilai[indeksMateri + 1] = skor;
      nilai[MATERI.length + 1] = hitungRataRata(nilai);
      nilai[MATERI.length + 2] = String(baris[3] || "");
    });

  const barisRekap = Array.from(rekap.values());
  if (barisRekap.length > 0) {
    sheet.getRange(2, 1, barisRekap.length, HEADER.length).setValues(barisRekap);
  }
  return sheet;
}

function cariNamaArsip(spreadsheet) {
  const dasar = "Riwayat Hasil";
  let nama = dasar;
  let nomor = 2;
  while (spreadsheet.getSheetByName(nama)) {
    nama = dasar + " " + nomor;
    nomor += 1;
  }
  return nama;
}
