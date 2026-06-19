import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { dailyTours } from "@/data/dailyTours";

export const metadata = {
  title: "Daily Tours & Local Experiences",
  description:
    "Short day tours and local Vietnam experiences — city tours, lantern walks, food walks, Mekong Delta and Cu Chi Tunnels day trips.",
};

export default function DailyToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Day tours"
        title="Daily Tours & Local Experiences"
        subtitle="Add a half-day or full-day experience to any holiday — guided, hassle-free and led by friendly local experts."
        image="/images/vietnam-17.jpg"
        crumbs={[{ label: "Daily Tours" }]}
      />

      <section className="container-px py-10 sm:py-14 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dailyTours.map((tour, i) => (
            <Reveal key={tour.slug} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 380px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-jade-700 backdrop-blur">
                    {tour.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink/55">
                    <Clock className="h-4 w-4 text-jade-500" />
                    {tour.duration}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-ink group-hover:text-jade-700">
                    {tour.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{tour.blurb}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-ink/5 pt-4">
                    <span className="flex items-baseline gap-1">
                      <span className="text-xs text-ink/45">From</span>
                      <span className="font-display text-xl font-semibold text-ink">${tour.price}</span>
                      <span className="text-xs text-ink/45">/ person</span>
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-jade-700 transition-all hover:gap-2.5"
                    >
                      Book <ArrowRight className="h-4 w-4" />
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
          title="Build a day-by-day Vietnam plan"
          subtitle="Mix and match daily experiences into a complete, custom itinerary with our experts."
        />
      </section>
    </>
  );
}
