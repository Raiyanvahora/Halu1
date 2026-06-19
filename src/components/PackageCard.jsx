import Image from "next/image";
import Link from "next/link";
import { Clock, Star, TicketPercent } from "lucide-react";

// Tour package card in the Avian style: image, duration, title, subtitle,
// green "Save" pill and a bold red price with the original struck through.
export default function PackageCard({ pkg, className = "" }) {
  const savings = pkg.oldPrice ? pkg.oldPrice - pkg.price : 0;

  return (
    <Link
      href="/contact"
      className={`group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink/[0.06] transition-all duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-card ${className}`}
    >
      {/* Large image with inset rounded corners */}
      <div className="p-3 pb-0">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            sizes="(max-width: 768px) 92vw, 380px"
            className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
          />
          {pkg.rating && (
            <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-ink shadow-soft backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
              {pkg.rating}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink/45">
          <Clock className="h-3.5 w-3.5" />
          {pkg.duration}
        </span>
        <h3 className="mt-2 text-xl font-bold leading-snug text-ink transition-colors group-hover:text-jade-700">
          {pkg.title}
        </h3>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-price">${pkg.price}</span>
            {pkg.oldPrice && (
              <span className="text-sm text-ink/40 line-through">${pkg.oldPrice}</span>
            )}
          </div>
          {savings > 0 && (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-save/10 px-3 py-1.5 text-xs font-bold text-save">
              <TicketPercent className="h-3.5 w-3.5" />
              Save ${savings}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
