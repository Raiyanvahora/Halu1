"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Rotating split hero: the main (right) image crossfades through a set of
// Vietnam shots every 1.5s while a secondary image fills the left band.
// Minimal bottom-left headline that strikes through one word.
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
      <div className="relative min-h-[380px] aspect-[5/2] max-h-[620px] sm:min-h-[460px]">
        {/* Secondary image — fills the full width behind */}
        <Image
          src="/images/vietnam-21.jpg"
          alt="Emerald waters and green islands of Halong Bay from above"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Main image — full-bleed on mobile, split from ~24% on larger screens.
            Slides are stacked and crossfaded by toggling opacity. */}
        <div className="absolute inset-y-0 right-0 left-0 sm:left-[24%]">
          {slides.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt="Scenic landscapes and seascapes of Vietnam"
              fill
              priority={i === 0}
              sizes="80vw"
              className={`object-cover transition-opacity duration-700 ease-in-out ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Legibility wash for the lower-left headline */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/50 to-transparent" />

        {/* Headline — bottom-left */}
        <div className="absolute bottom-8 left-5 sm:bottom-12 sm:left-10 lg:bottom-16 lg:left-14">
          <h1 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
            Experiences for
            <br />
            <span className="line-through decoration-white decoration-[3px] sm:decoration-4">
              Tourist
            </span>{" "}
            Colleagues
          </h1>
        </div>
      </div>
    </section>
  );
}
