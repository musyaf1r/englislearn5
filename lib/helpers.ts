/** Format timestamp saved by the result form for the score list. */
export function formatTanggal(raw: string): string {
  if (!raw) return "-";

  const tanggal = new Date(raw);
  if (Number.isNaN(tanggal.getTime())) return raw;

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Asia/Jakarta",
  }).format(tanggal);
}
