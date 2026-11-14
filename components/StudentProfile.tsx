"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import { Sprout } from "lucide-react";
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
          <Sprout aria-hidden="true" className="mr-1 inline h-5 w-5 text-forest/70" />
          Hello, <strong>{savedName}</strong>!
        </p>
        <button
          type="button"
          onClick={() => {
            setName(savedName);
            setEditing(true);
          }}
          className="shrink-0 rounded-full bg-mint-light px-3 py-2 text-sm font-bold text-forest"
        >
          Change name
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
        {savedName ? "Change your name" : "Enter your name to get started"}
      </label>
      <div className="mt-3 flex gap-2">
        <input
          id="student-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          maxLength={50}
          required
          placeholder="Your name"
          className="min-w-0 flex-1 rounded-2xl border-2 border-mint-light bg-white px-4 py-3 font-semibold text-forest outline-none placeholder:text-forest/40 focus:border-forest"
        />
        <button
          type="submit"
          className="rounded-2xl bg-forest px-4 py-3 font-bold text-cream"
        >
          Save
        </button>
      </div>
      {savedName && (
        <button
          type="button"
          onClick={() => setEditing(false)}
          className="mt-2 text-sm font-semibold text-forest/60 underline"
        >
          Cancel
        </button>
      )}
      <p className="mt-2 text-xs text-forest/60">
        This name will be used for all challenge scores on this device.
      </p>
    </form>
  );
}
