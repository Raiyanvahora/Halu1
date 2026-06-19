"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm text-white">
        <Check className="h-4 w-4 text-gold-300" /> You're subscribed — see you soon!
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="mt-4 flex flex-col gap-2 sm:flex-row"
    >
      <input
        type="email"
        required
        placeholder="Your email"
        aria-label="Email address"
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold-300"
      />
      <button
        type="submit"
        className="shrink-0 rounded-xl bg-gold-400 px-5 py-3 text-sm font-bold text-ink transition hover:bg-gold-300"
      >
        Subscribe
      </button>
    </form>
  );
}
