import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import PackageCard from "@/components/PackageCard";
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
              <PackageCard pkg={tour} />
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
