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
      className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-ink/[0.06] transition-all duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-card ${className}`}
    >
      {/* Image with inset rounded corners */}
      <div className="p-2.5 pb-0">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            sizes="(max-width: 768px) 90vw, 340px"
            className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
          />
          {pkg.rating && (
            <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-xs font-bold text-ink shadow-soft backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
              {pkg.rating}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink/45">
          <Clock className="h-3.5 w-3.5" />
          {pkg.duration}
        </span>
        <h3 className="mt-1.5 text-[17px] font-bold leading-snug text-ink transition-colors group-hover:text-jade-700">
          {pkg.title}
        </h3>
        <p className="mt-1 line-clamp-1 text-sm text-ink/55">{pkg.route}</p>

        {savings > 0 && (
          <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-md bg-save/10 px-2.5 py-1 text-xs font-bold text-save">
            <TicketPercent className="h-3.5 w-3.5" />
            Save ${savings}
          </span>
        )}

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-extrabold text-price">${pkg.price}</span>
          {pkg.oldPrice && (
            <span className="text-sm text-ink/40 line-through">${pkg.oldPrice}</span>
          )}
          <span className="text-xs text-ink/45">/ person</span>
        </div>
      </div>
    </Link>
  );
}
