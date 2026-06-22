import Image from "next/image";
import Link from "next/link";

// Tall portrait destination tile with a large overlaid name + plane icon,
// matching the Avian "International / Domestic destinations" card style.
export default function DestinationCard({ destination, className = "" }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className={`group relative block aspect-[3/4] overflow-hidden rounded-3xl shadow-soft ring-1 ring-ink/5 transition-shadow duration-500 hover:shadow-card ${className}`}
    >
      <Image
        src={destination.image}
        alt={destination.name}
        fill
        sizes="(max-width: 768px) 85vw, 340px"
        className="object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 text-center">
        <h3
          className="font-display text-2xl font-extrabold uppercase tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-[1.7rem]"
        >
          {destination.name}
        </h3>
      </div>
    </Link>
  );
}
