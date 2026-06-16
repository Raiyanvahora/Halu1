"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site, whatsappLink } from "@/data/site";

const tripTypes = [
  "Family", "Honeymoon", "Group", "Corporate", "Luxury", "Budget", "Cruise", "Not sure yet",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", tripType: "Family", travelers: "2", message: "",
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend in this demo — compose a WhatsApp/email-ready enquiry and confirm.
    const lines = [
      `New Vietnam enquiry from ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Trip type: ${form.tripType}`,
      `Travelers: ${form.travelers}`,
      `Message: ${form.message}`,
    ].join("%0a");
    // Open WhatsApp pre-filled so the enquiry actually reaches the team.
    window.open(`https://wa.me/${site.whatsapp}?text=${lines}`, "_blank", "noopener");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-4xl bg-jade-50 p-10 text-center ring-1 ring-jade-100">
        <CheckCircle2 className="h-14 w-14 text-jade-600" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-ink">Thank you!</h3>
        <p className="mt-2 max-w-sm text-ink/65">
          Your enquiry is on its way to our Vietnam experts. We've also opened
          WhatsApp so you can chat with us right away.
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-6 rounded-full bg-jade-600 px-6 py-3 font-semibold text-white hover:bg-jade-700">
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  const field =
    "w-full rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-jade-500 focus:ring-2 focus:ring-jade-500/20";

  return (
    <form onSubmit={handleSubmit} className="rounded-4xl bg-white p-6 shadow-card ring-1 ring-ink/5 sm:p-8">
      <h3 className="font-display text-2xl font-semibold text-ink">Get your free quote</h3>
      <p className="mt-2 text-sm text-ink/60">
        Tell us a little about your trip — we'll reply with a custom itinerary and price.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-sm font-medium text-ink/75">Full name</label>
          <input required value={form.name} onChange={update("name")} className={field} placeholder="Your name" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink/75">Phone</label>
          <input required value={form.phone} onChange={update("phone")} className={field} placeholder="+91 ..." />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink/75">Email</label>
          <input required type="email" value={form.email} onChange={update("email")} className={field} placeholder="you@email.com" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink/75">Travelers</label>
          <input value={form.travelers} onChange={update("travelers")} className={field} placeholder="e.g. 2 adults" />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-ink/75">Trip type</label>
          <select value={form.tripType} onChange={update("tripType")} className={field}>
            {tripTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-ink/75">Your message</label>
          <textarea rows={4} value={form.message} onChange={update("message")} className={field} placeholder="Dates, destinations, budget, anything special..." />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-jade-600 px-6 py-3.5 font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-jade-700 hover:shadow-card"
      >
        <Send className="h-5 w-5" /> Send enquiry
      </button>
      <p className="mt-3 text-center text-xs text-ink/45">
        We typically reply within a few hours. No spam, ever.
      </p>
    </form>
  );
}
