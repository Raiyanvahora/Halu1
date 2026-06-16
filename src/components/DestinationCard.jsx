import Image from "next/image";
import Link from "next/link";
import { Plane } from "lucide-react";

// Tall portrait destination tile with a large overlaid name + plane icon,
// matching the Avian "International / Domestic destinations" card style.
export default function DestinationCard({ destination, className = "" }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className={`group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-soft ring-1 ring-ink/5 ${className}`}
    >
      <Image
        src={destination.image}
        alt={destination.name}
        fill
        sizes="(max-width: 640px) 50vw, 260px"
        className="object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-ink/20" />

      {/* Plane badge top-right */}
      <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors group-hover:bg-gold-400 group-hover:text-ink">
        <Plane className="h-4 w-4 -rotate-12" />
      </span>

      <div className="absolute inset-x-0 bottom-0 p-4 text-center">
        <h3
          className="font-display text-2xl font-extrabold uppercase tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-[1.6rem]"
        >
          {destination.name}
        </h3>
        <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-300">
          {destination.tagline}
        </p>
      </div>
    </Link>
  );
}
