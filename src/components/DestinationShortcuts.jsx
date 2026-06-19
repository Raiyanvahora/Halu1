import Link from "next/link";
import {
  Landmark, Ship, Waves, Sparkles, Building2, Mountain, TreePalm, UtensilsCrossed,
} from "lucide-react";

// Minimal black line-icon shortcuts shown just under the hero, one label each.
const shortcuts = [
  { label: "Hanoi", icon: Landmark, href: "/destinations/hanoi" },
  { label: "Halong Bay", icon: Ship, href: "/destinations/halong-bay" },
  { label: "Da Nang", icon: Waves, href: "/destinations/da-nang" },
  { label: "Hoi An", icon: Sparkles, href: "/destinations/hoi-an" },
  { label: "Ho Chi Minh", icon: Building2, href: "/destinations/ho-chi-minh-city" },
  { label: "Golden Bridge", icon: Mountain, href: "/destinations/golden-bridge" },
  { label: "Beaches", icon: TreePalm, href: "/destinations/da-nang" },
  { label: "Food Walks", icon: UtensilsCrossed, href: "/daily-tours" },
];

export default function DestinationShortcuts() {
  return (
    <section className="container-px py-7 sm:py-9">
      <div className="no-scrollbar -mx-5 flex items-start gap-7 overflow-x-auto px-5 sm:mx-0 sm:justify-center sm:gap-12 sm:px-0">
        {shortcuts.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="group flex shrink-0 flex-col items-center gap-2.5"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sand ring-1 ring-ink/[0.06] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-jade-50 group-hover:ring-jade-200 sm:h-16 sm:w-16">
              <s.icon className="h-6 w-6 stroke-[1.5] text-ink transition-colors group-hover:text-jade-700 sm:h-7 sm:w-7" />
            </span>
            <span className="text-[12px] font-medium text-ink/70 transition-colors group-hover:text-ink sm:text-[13px]">
              {s.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
