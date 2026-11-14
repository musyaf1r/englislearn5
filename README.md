# English Fun

Website latihan pengayaan Bahasa Inggris kelas 2 SD dengan Next.js App Router,
Tailwind CSS v4, dan Google Spreadsheet untuk menyimpan hasil latihan. Semua
soal tersimpan langsung di `data/latihan.ts`. Nama anak disimpan di browser
setelah pertama kali dimasukkan, lalu digunakan kembali pada latihan berikutnya.

## Menjalankan secara lokal

1. Salin `.env.example` menjadi `.env.local`.
2. Tempel URL Google Apps Script Web App pada `NEXT_PUBLIC_SHEET_API_URL`.
3. Jalankan `npm install`, lalu `npm run dev`.
4. Buka `http://localhost:3000`.

Tema Tailwind v4 didefinisikan melalui `@theme` di `app/globals.css`; konfigurasi
Tailwind versi 3 (`tailwind.config.ts`) tidak digunakan oleh setup v4 ini.

## Menyiapkan Google Spreadsheet

1. Buka spreadsheet yang sudah disiapkan:
   [English Fun — Hasil Belajar](https://docs.google.com/spreadsheets/d/1kgvG7-13VEagpfdda9IU9uOEiDoymgzJfZccnn4MKKY/edit).
2. Pilih **Extensions → Apps Script**.
3. Ganti isi editor dengan file `Code.gs`, lalu simpan. Script membuat tab
   `Hasil` dengan satu baris per anak, kolom nilai untuk tiap latihan, rata-rata,
   dan waktu pembaruan. Mengulang latihan akan mengganti skor latihan tersebut
   dengan skor terbaru, lalu menghitung ulang rata-rata dari latihan yang selesai.
   Jika ada tab `Hasil` lama, script mengarsipkannya sebagai `Riwayat Hasil`
   sebelum membuat format rekap baru.
4. Pilih **Deploy → New deployment → Web app**.
5. Atur **Execute as: Me** dan **Who has access: Anyone**, lalu deploy dan
   setujui izin akses spreadsheet.
6. Pilih **Deploy → Manage deployments**, edit deployment Web App, pilih **New
   version**, lalu deploy. URL `/exec` yang sama tetap dapat digunakan.
7. Pastikan URL itu ada di `.env.local` sebagai `NEXT_PUBLIC_SHEET_API_URL`.
   Jika server lokal sudah berjalan saat URL diubah, hentikan dan jalankan ulang
   `npm run dev` agar environment variable terbaca.

Nama anak disimpan di local storage pada browser/perangkat yang digunakan.
Untuk mengerjakan di perangkat berbeda, masukkan nama yang sama di beranda agar
nilai tetap tergabung pada baris anak tersebut.

`doGet` membaca hasil untuk halaman `/skor`, sedangkan `doPost` hanya menerima
data hasil latihan.

## Deploy gratis ke Vercel

1. Push project ke repository GitHub.
2. Masuk ke [Vercel](https://vercel.com), pilih **Add New → Project**, lalu
   import repository tersebut.
3. Pada **Environment Variables**, tambahkan
   `NEXT_PUBLIC_SHEET_API_URL` dengan URL Web App Google Apps Script.
4. Klik **Deploy**. Vercel mendeteksi Next.js secara otomatis; gunakan paket
   Hobby gratis untuk project personal/non-komersial.
5. Setelah deploy selesai, buka URL yang diberikan Vercel. Setiap kali URL
   Apps Script diubah, perbarui environment variable lalu jalankan redeploy.
