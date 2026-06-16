import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, CalendarDays, ArrowRight, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import PackageCard from "@/components/PackageCard";
import Reveal from "@/components/Reveal";
import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }) {
  const d = destinations.find((x) => x.slug === params.slug);
  if (!d) return { title: "Destination not found" };
  return {
    title: `${d.name} — ${d.tagline}`,
    description: d.blurb,
  };
}

export default function DestinationPage({ params }) {
  const destination = destinations.find((d) => d.slug === params.slug);
  if (!destination) notFound();

  // Packages that visit this destination (match by name in the route string).
  const related = packages
    .filter((p) => p.route.toLowerCase().includes(destination.name.toLowerCase()))
    .slice(0, 3);
  const fallback = related.length ? related : packages.slice(0, 3);

  const others = destinations.filter((d) => d.slug !== destination.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={destination.tagline}
        title={destination.name}
        subtitle={destination.blurb}
        image={destination.image}
        crumbs={[
          { label: "Destinations" },
          { label: destination.name },
        ]}
      />

      {/* Overview */}
      <section className="container-px py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-jade-500" /> Destination guide
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl text-balance">
              Why travelers love {destination.name}
            </h2>
            <p className="mt-4 leading-relaxed text-ink/70">{destination.blurb}</p>
            <p className="mt-4 leading-relaxed text-ink/70">
              Our local experts know {destination.name} inside out — we'll match
              you with the right stays, the best timing and the experiences that
              make it unforgettable, all wrapped into a seamless, custom itinerary.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-ink">Top experiences</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {destination.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 rounded-2xl bg-sand px-4 py-3 text-sm text-ink/75">
                  <Check className="h-5 w-5 shrink-0 text-jade-600" /> {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-4xl bg-white shadow-card ring-1 ring-ink/5">
              <div className="relative aspect-[4/3]">
                <Image src={destination.image} alt={destination.name} fill sizes="(max-width:1024px) 90vw, 460px" className="object-cover" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center gap-3 text-sm text-ink/70">
                  <MapPin className="h-5 w-5 text-jade-600" /> Vietnam · {destination.name}
                </div>
                <div className="flex items-center gap-3 text-sm text-ink/70">
                  <CalendarDays className="h-5 w-5 text-jade-600" /> Best time to visit: <span className="font-semibold text-ink">{destination.bestTime}</span>
                </div>
                <Link
                  href="/contact"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-jade-600 px-6 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-jade-700"
                >
                  Plan a {destination.name} trip <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related packages */}
      <section className="bg-sand py-16 lg:py-20">
        <div className="container-px">
          <SectionHeading
            eyebrow="Suggested itineraries"
            title={`Packages featuring ${destination.name}`}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fallback.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Explore more */}
      <section className="container-px py-16 lg:py-20">
        <SectionHeading eyebrow="Keep exploring" title="More Vietnam destinations" />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {others.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="group relative block overflow-hidden rounded-3xl shadow-soft ring-1 ring-ink/5"
            >
              <div className="relative aspect-[4/3]">
                <Image src={d.image} alt={d.name} fill sizes="(max-width:768px) 90vw, 360px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-300">{d.tagline}</p>
                <h3 className="font-display text-xl font-semibold text-white">{d.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <CTASection />
      </section>
    </>
  );
}
