"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Full-bleed hero: a large travel image crossfades behind a soft dark overlay,
// with short, emotional white headline copy and a single clear CTA.
const slides = [
  "/images/vietnam-02.jpg",
  "/images/vietnam-05.jpg",
  "/images/vietnam-09.jpg",
  "/images/vietnam-13.jpg",
  "/images/vietnam-18.jpg",
  "/images/vietnam-23.jpg",
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[460px] sm:min-h-[560px] lg:min-h-[640px]">
        {/* Crossfading images */}
        {slides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Beautiful landscapes and seascapes of Vietnam"
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Soft dark overlay for legibility */}
        <div className="absolute inset-0 bg-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/15 to-ink/25" />

        {/* Headline */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/85 sm:text-sm">
            Halu Vietnam Tours
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-7xl text-balance">
            Explore Vietnam with Local Experts
          </h1>
          <p className="mt-4 max-w-xl text-base font-medium text-white/90 sm:text-lg">
            Curated trips. Real experiences.
          </p>
          <Link
            href="/packages"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-ink shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-jade-600 hover:text-white"
          >
            Explore Packages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
