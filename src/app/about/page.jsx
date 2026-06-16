import Image from "next/image";
import { Globe2, HandHeart, Sparkles, PlaneTakeoff, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "About Us",
  description:
    "Halu Vietnam Tours is a Vietnam-focused travel company helping Indian travelers discover Vietnam with comfort, confidence and local expertise.",
};

const sections = [
  {
    icon: Globe2,
    title: "Who We Are",
    body: "Halu Vietnam Tours is a Vietnam-focused travel company helping Indian travelers discover Vietnam with comfort, confidence and local expertise. From custom itineraries and luxury stays to cruise packages and authentic local experiences, our team helps travelers plan smooth and memorable Vietnam holidays.",
  },
  {
    icon: Sparkles,
    title: "Why Vietnam",
    body: "Emerald bays, golden beaches, ancient lantern-lit towns, world-class food and warm, welcoming people — Vietnam offers an incredible range of experiences that suit families, couples, groups and solo travelers alike, all at fantastic value.",
  },
  {
    icon: HandHeart,
    title: "Our Local Expertise",
    body: "With a team on the ground in Ho Chi Minh City, we know Vietnam intimately — the best stays, the right seasons, the hidden gems and the smoothest routes. That local knowledge turns a good trip into an unforgettable one.",
  },
  {
    icon: PlaneTakeoff,
    title: "India to Vietnam Assistance",
    body: "We guide you from the very first step in India — flights, visa guidance, the best routes and budget planning — so your journey to Vietnam is as smooth as the holiday itself.",
  },
  {
    icon: ShieldCheck,
    title: "Our Promise",
    body: "Honest pricing, hand-crafted itineraries and genuine on-trip support. We treat every traveler like family and stay reachable on call and WhatsApp throughout your holiday.",
  },
];

const stats = [
  { value: "1,000+", label: "Happy Indian travelers" },
  { value: "12+", label: "Vietnam destinations" },
  { value: "4.9★", label: "Average rating" },
  { value: "2", label: "Offices: India & Vietnam" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Your Vietnam, planned the local way"
        subtitle="We help Indian travelers experience Vietnam with comfort, confidence and authentic local expertise."
        image="/images/vietnam-04.jpg"
        crumbs={[{ label: "About" }]}
      />

      {/* Intro split */}
      <section className="container-px py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-card">
            <Image src="/images/vietnam-10.jpg" alt="Hoi An ancient town" fill sizes="(max-width:1024px) 90vw, 600px" className="object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">
              <span className="h-px w-6 bg-jade-500" /> Discover the heart of Vietnam
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl text-balance">
              Experience Vietnam the local way
            </h2>
            <p className="mt-4 leading-relaxed text-ink/65">
              Halu Vietnam Tours was born from a simple belief — that travelers
              from India deserve a Vietnam holiday that feels effortless, premium
              and genuinely local. We pair hand-crafted itineraries with luxury
              stays, cruise experiences and a caring on-ground team.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-sand p-5">
                  <div className="font-display text-2xl font-semibold text-jade-700">{s.value}</div>
                  <div className="mt-1 text-sm text-ink/60">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story sections */}
      <section className="bg-sand py-16 lg:py-20">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="What we stand for"
            title="More than a tour company"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-soft ring-1 ring-ink/5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-jade-50 text-jade-600">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 pt-16 lg:py-12 lg:pt-20">
        <CTASection />
      </section>
    </>
  );
}
