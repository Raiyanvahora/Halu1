import { Plane, Car, Route, Bus, Building2, MapPin, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Vietnam Transportation",
  description:
    "Reliable Vietnam transportation support — airport transfers, private car booking, intercity transfers, group and corporate transport.",
};

const services = [
  { icon: Plane, title: "Airport Transfers", desc: "Smooth pickups and drop-offs at every Vietnam airport, on time and tracked." },
  { icon: Car, title: "Private Car Booking", desc: "Comfortable private cars with professional, English-friendly drivers." },
  { icon: Route, title: "Intercity Transfers", desc: "Door-to-door travel between Hanoi, Da Nang, Hoi An, Saigon and more." },
  { icon: Bus, title: "Group Transportation", desc: "Modern coaches and vans sized for friends, families and big groups." },
  { icon: Building2, title: "Corporate Transportation", desc: "Reliable fleets for MICE, offsites and business travel in Vietnam." },
  { icon: MapPin, title: "Local Transport Assistance", desc: "On-ground help with day trips, sightseeing routes and last-minute changes." },
];

const reasons = [
  "Vetted, professional local drivers",
  "Clean, well-maintained vehicles",
  "Transparent, upfront pricing",
  "24/7 on-trip WhatsApp support",
];

export default function TransportationPage() {
  return (
    <>
      <PageHero
        eyebrow="Getting around"
        title="Vietnam Transportation Support"
        subtitle="From airport pickups to intercity transfers and corporate fleets — travel across Vietnam comfortably while we handle the logistics."
        image="/images/vietnam-05.jpg"
        crumbs={[{ label: "Transportation" }]}
      />

      <section className="container-px py-10 sm:py-14 lg:py-20">
        <SectionHeading
          eyebrow="Our services"
          title="Seamless travel, every leg of the trip"
          description="Add any of these to your package, or book transport on its own — we keep your Vietnam journey smooth from arrival to departure."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-3xl bg-white p-7 shadow-soft ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-jade-50 text-jade-600 transition-colors group-hover:bg-jade-600 group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 overflow-hidden rounded-4xl bg-jade-800 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Why book transport with Halu
              </h3>
              <p className="mt-3 text-cream/75">
                We work only with trusted local partners so you always feel safe,
                comfortable and looked after on the road.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {reasons.map((r) => (
                <li key={r} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm text-cream/90 ring-1 ring-white/10">
                  <Check className="h-5 w-5 shrink-0 text-gold-300" /> {r}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="py-8 lg:py-12">
        <CTASection
          title="Need transport for your Vietnam trip?"
          subtitle="Share your dates and route — we'll arrange reliable, comfortable transport across Vietnam."
        />
      </section>
    </>
  );
}
