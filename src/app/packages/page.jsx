import PageHero from "@/components/PageHero";
import PackagesExplorer from "@/components/PackagesExplorer";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Vietnam Tour Packages",
  description:
    "Custom Vietnam holidays for families, couples, groups and corporate travelers — honeymoon, luxury, budget, cruise, city and beach packages.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Tour packages"
        title="Vietnam Tour Packages"
        subtitle="Custom Vietnam holidays for families, couples, groups and corporate travelers — filter by the experience you're dreaming of."
        image="/images/vietnam-07.jpg"
        crumbs={[{ label: "Packages" }]}
      />
      <section className="container-px py-16 lg:py-20">
        <PackagesExplorer />
      </section>
      <section className="py-8 lg:py-12">
        <CTASection
          title="Don't see your perfect trip?"
          subtitle="Tell us your dates, budget and travel style — we'll craft a fully custom Vietnam itinerary for you."
        />
      </section>
    </>
  );
}
