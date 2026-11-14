"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import {
  getStudentName,
  saveStudentName,
  subscribeStudentName,
} from "@/lib/student";

export default function StudentProfile() {
  const savedName = useSyncExternalStore(
    subscribeStudentName,
    getStudentName,
    () => "",
  );
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);

  function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) return;
    saveStudentName(name);
    setEditing(false);
  }

  if (!editing && savedName) {
    return (
      <section className="flex items-center justify-between gap-3 rounded-3xl border border-mint-light bg-cream px-4 py-3 shadow-sm shadow-mint/30">
        <p className="font-semibold text-forest">
          Halo, <strong>{savedName}</strong>! 🌱
        </p>
        <button
          type="button"
          onClick={() => {
            setName(savedName);
            setEditing(true);
          }}
          className="shrink-0 rounded-full bg-mint-light px-3 py-2 text-sm font-bold text-forest"
        >
          Ganti nama
        </button>
      </section>
    );
  }

  return (
    <form
      onSubmit={save}
      className="rounded-3xl border border-mint-light bg-cream p-4 shadow-sm shadow-mint/30"
    >
      <label
        htmlFor="student-name"
        className="block font-display font-bold text-forest"
      >
        {savedName ? "Ubah nama anak" : "Masukkan nama anak dulu ya"}
      </label>
      <div className="mt-3 flex gap-2">
        <input
          id="student-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          maxLength={50}
          required
          placeholder="Nama anak"
          className="min-w-0 flex-1 rounded-2xl border-2 border-mint-light bg-white px-4 py-3 font-semibold text-forest outline-none placeholder:text-forest/40 focus:border-forest"
        />
        <button
          type="submit"
          className="rounded-2xl bg-forest px-4 py-3 font-bold text-cream"
        >
          Simpan
        </button>
      </div>
      {savedName && (
        <button
          type="button"
          onClick={() => setEditing(false)}
          className="mt-2 text-sm font-semibold text-forest/60 underline"
        >
          Batal
        </button>
      )}
      <p className="mt-2 text-xs text-forest/60">
        Nama ini akan dipakai untuk semua nilai materi di perangkat ini.
      </p>
    </form>
  );
}
