import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";

export const metadata = {
  title: "Vietnam Destinations",
  description:
    "Explore Vietnam's most loved destinations — Hanoi, Halong Bay, Da Nang, Hoi An, Ho Chi Minh City and the Golden Bridge.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Where to go"
        title="Discover the Heart of Vietnam"
        subtitle="From emerald bays to ancient lantern-lit towns — explore the destinations our travelers love most."
        image="/images/vietnam-06.jpg"
        crumbs={[{ label: "Destinations" }]}
      />
      <section className="container-px py-10 sm:py-14 lg:py-20">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 4) * 0.08}>
              <DestinationCard destination={d} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-8 lg:py-12">
        <CTASection />
      </section>
    </>
  );
}
