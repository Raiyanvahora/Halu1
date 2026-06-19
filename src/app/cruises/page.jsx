import Image from "next/image";
import Link from "next/link";
import { Ship, Star, Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { cruises } from "@/data/cruises";

export const metadata = {
  title: "Vietnam Cruise Packages",
  description:
    "Premium Halong Bay and luxury cruise experiences — overnight cruises, couple cruises and family cruise packages across Vietnam's emerald waters.",
};

export default function CruisesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cruise experiences"
        title="Premium Vietnam Cruise Experiences"
        subtitle="Scenic limestone mountains, peaceful waters and luxury cruise stays — unforgettable Halong Bay moments for couples, families and groups."
        image="/images/vietnam-23.jpg"
        crumbs={[{ label: "Cruises" }]}
      />

      <section className="container-px py-10 sm:py-14 lg:py-20">
        <SectionHeading
          eyebrow="Halong Bay & beyond"
          title="Choose your cruise"
          description="Every cruise includes meals, activities and transfers — upgrade to private balcony suites or couple-exclusive sailings."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cruises.map((cruise, i) => (
            <Reveal key={cruise.slug} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={cruise.image}
                    alt={cruise.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 380px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
                  {cruise.discount && (
                    <span className="absolute left-4 top-4 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold uppercase text-ink shadow-soft">
                      {cruise.discount}
                    </span>
                  )}
                  {cruise.featured && (
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-jade-600 px-2.5 py-1 text-xs font-bold text-white">
                      <Star className="h-3.5 w-3.5 fill-gold-300 text-gold-300" /> Popular
                    </span>
                  )}
                  <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 text-xs font-semibold text-white">
                    <Ship className="h-4 w-4" /> {cruise.duration}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-ink group-hover:text-jade-700">
                    {cruise.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{cruise.blurb}</p>
                  <ul className="mt-4 space-y-2">
                    {cruise.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-ink/70">
                        <Check className="h-4 w-4 text-jade-500" /> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-end justify-between border-t border-ink/5 pt-4">
                    <span className="flex items-baseline gap-1.5">
                      <span className="font-display text-2xl font-semibold text-ink">${cruise.price}</span>
                      {cruise.oldPrice && (
                        <span className="text-sm text-ink/40 line-through">${cruise.oldPrice}</span>
                      )}
                      <span className="text-xs text-ink/45">/ person</span>
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 rounded-full bg-jade-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:gap-2.5 hover:bg-jade-700"
                    >
                      Enquire <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <CTASection
          title="Sail Halong Bay your way"
          subtitle="Tell us your cruise dates and style — we'll match you to the perfect vessel and cabin."
        />
      </section>
    </>
  );
}
