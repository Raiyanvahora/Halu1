import Image from "next/image";

// Avian-style split hero: a secondary image fills the left band while the main
// image overlaps from ~22% to the right edge, with a minimal bottom-left
// headline that strikes through one word. Full-bleed, no buttons or badges.
export default function Hero() {
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

        {/* Main image — full-bleed on mobile, split from ~24% on larger screens */}
        <div className="absolute inset-y-0 right-0 left-0 sm:left-[24%]">
          <Image
            src="/images/vietnam-02.jpg"
            alt="Halong Bay's limestone karsts and turquoise waters in Vietnam"
            fill
            priority
            sizes="80vw"
            className="object-cover"
          />
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
