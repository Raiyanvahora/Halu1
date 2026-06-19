import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PackageCard from "@/components/PackageCard";
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
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cruises.map((cruise, i) => (
            <Reveal key={cruise.slug} delay={(i % 3) * 0.08}>
              <PackageCard pkg={cruise} />
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
