# English Fun

An English enrichment challenge website for Grade 2 students, built with the
Next.js App Router and Tailwind CSS v4. Google Sheets stores challenge scores.
Questions are defined in `data/latihan.ts`. A student's name is saved in the
browser and reused for future challenges.

## Run locally

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_SHEET_API_URL` to your Google Apps Script Web App URL.
3. Run `npm install`, then `npm run dev`.
4. Open `http://localhost:3000`.

The Tailwind v4 theme is defined with `@theme` in `app/globals.css`. This setup
does not use the Tailwind v3 configuration file (`tailwind.config.ts`).

## Set up Google Sheets

1. Open the prepared spreadsheet:
   [English Fun — Learning Results](https://docs.google.com/spreadsheets/d/1kgvG7-13VEagpfdda9IU9uOEiDoymgzJfZccnn4MKKY/edit).
2. Select **Extensions → Apps Script**.
3. Replace the editor contents with `Code.gs` and save. The script creates a
   `Hasil` tab with one row per student, a score column for each challenge, an
   average, and an update time. Retaking a challenge replaces that challenge's
   score with the latest result and recalculates the average. If an old `Hasil`
   tab exists, the script archives it as `Riwayat Hasil` before creating the
   new summary format.
4. Select **Deploy → New deployment → Web app**.
5. Set **Execute as: Me** and **Who has access: Anyone**, then deploy and
   approve spreadsheet access.
6. Select **Deploy → Manage deployments**, edit the Web App deployment, choose
   **New version**, and deploy. The same `/exec` URL can still be used.
7. Add that URL to `.env.local` as `NEXT_PUBLIC_SHEET_API_URL`. If the local
   server is running when you change the URL, restart `npm run dev` so the
   environment variable is loaded.

The student's name is stored in the browser's local storage. To use another
device, enter the same name on the home page so scores remain grouped under the
same student.

`doGet` reads results for `/skor`, while `doPost` accepts challenge results.

## Deploy to Vercel

1. Push the project to a GitHub repository.
2. On [Vercel](https://vercel.com), select **Add New → Project** and import the
   repository.
3. Under **Environment Variables**, add `NEXT_PUBLIC_SHEET_API_URL` with the
   Google Apps Script Web App URL.
4. Select **Deploy**. Vercel detects Next.js automatically.
5. When deployment finishes, open the URL provided by Vercel. If the Apps
   Script URL changes, update the environment variable and redeploy.
