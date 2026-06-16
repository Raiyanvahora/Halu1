import Image from "next/image";
import {
  Sparkles,
  Compass,
  BadgeIndianRupee,
  HeadphonesIcon,
  Ship,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import PackageCard from "@/components/PackageCard";
import DestinationCard from "@/components/DestinationCard";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import { packages } from "@/data/packages";
import { featuredDestinations, coastalDestinations } from "@/data/destinations";
import { reviews } from "@/data/reviews";
import { travelerTypes } from "@/data/travelerTypes";
import { guides } from "@/data/guides";
import { sellingPoints, whatsappLink } from "@/data/site";

const whyUs = [
  {
    icon: Compass,
    title: "Hand-crafted itineraries",
    desc: "Every trip is custom-built by our local Vietnam experts around how you love to travel.",
  },
  {
    icon: Sparkles,
    title: "Luxury & authentic stays",
    desc: "From 5-star resorts to lantern-lit boutique hotels and premium cruise suites.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Best-price assistance",
    desc: "Honest pricing and India-to-Vietnam guidance that gets you the most for your budget.",
  },
  {
    icon: HeadphonesIcon,
    title: "On-ground local support",
    desc: "A real Vietnam team on WhatsApp and call, looking after you for the whole trip.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Selling-points marquee */}
      <div className="border-y border-ink/5 bg-white py-4">
        <div className="mask-fade-r overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-10 pr-10">
            {[...sellingPoints, ...sellingPoints].map((point, i) => (
              <span
                key={i}
                className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-ink/55"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Trending packages */}
      <section className="container-px py-20 lg:py-24">
        <SectionHeading
          eyebrow="Trending now"
          title="Most-loved Vietnam tour packages"
          description="Curated holidays across Hanoi, Halong Bay, Da Nang, Hoi An and Ho Chi Minh City — book a ready itinerary or have us tailor one for you."
          action={
            <Button href="/packages" variant="outline">
              View all packages <ArrowRight className="h-4 w-4" />
            </Button>
          }
        />
        <div className="mt-10">
          <Carousel itemClass="w-[290px] sm:w-[340px]">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </Carousel>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-sand py-20 lg:py-24">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Why Halu Vietnam Tours"
            title="Travel Vietnam like a local — without the stress"
            description="We are Vietnam travel specialists helping Indian travelers discover Vietnam with comfort, confidence and genuine local expertise."
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="group h-full rounded-3xl bg-white p-7 shadow-soft ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-jade-50 text-jade-600 transition-colors group-hover:bg-jade-600 group-hover:text-white">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Top destinations — North & Central Vietnam */}
      <section className="container-px pt-20 lg:pt-24">
        <SectionHeading
          eyebrow="Where to go"
          title="Top Vietnam destinations"
          description="Iconic bays, misty mountains, ancient towns and the wonders of the north and centre — the places our travelers love most."
          action={
            <Button href="/destinations" variant="outline">
              View all <ArrowRight className="h-4 w-4" />
            </Button>
          }
        />
        <div className="mt-10">
          <Carousel itemClass="w-[200px] sm:w-[240px]">
            {featuredDestinations.map((d) => (
              <DestinationCard key={d.slug} destination={d} />
            ))}
          </Carousel>
        </div>
      </section>

      {/* Wide cinematic banner strip */}
      <section className="container-px py-12 lg:py-16">
        <div className="relative aspect-[21/9] overflow-hidden rounded-[1.75rem] shadow-card sm:aspect-[24/7]">
          <Image
            src="/images/vietnam-21.jpg"
            alt="Travelers exploring the open roads and landscapes of Vietnam"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        </div>
      </section>

      {/* More destinations — South & Coastal Vietnam */}
      <section className="container-px pb-20 lg:pb-24">
        <SectionHeading
          eyebrow="Beaches & beyond"
          title="South & coastal Vietnam"
          description="Island beaches, sunny coastal cities, highland escapes and the buzzing energy of the south — more places to fall in love with."
          action={
            <Button href="/destinations" variant="outline">
              View all <ArrowRight className="h-4 w-4" />
            </Button>
          }
        />
        <div className="mt-10">
          <Carousel itemClass="w-[200px] sm:w-[240px]">
            {coastalDestinations.map((d) => (
              <DestinationCard key={d.slug} destination={d} />
            ))}
          </Carousel>
        </div>
      </section>

      {/* Group / custom trips banner */}
      <section className="container-px py-4">
        <div className="relative overflow-hidden rounded-[1.75rem]">
          <Image
            src="/images/vietnam-14.jpg"
            alt="Group and custom Vietnam trips"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jade-950/85 via-jade-900/55 to-transparent" />
          <div className="relative flex flex-col items-start gap-4 px-7 py-12 sm:px-12 lg:py-16">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white ring-1 ring-white/25 backdrop-blur">
              Families · Couples · Groups · Corporate
            </span>
            <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl text-balance">
              Group &amp; custom Vietnam trips, planned end to end
            </h2>
            <p className="max-w-lg text-cream/85">
              Travelling with friends, family or your team? We handle flights
              guidance, stays, transfers and experiences so you just show up and enjoy.
            </p>
            <Button href="/contact" variant="gold" size="lg">
              Plan a group trip <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Cruise highlight */}
      <section className="container-px py-8 lg:py-12">
        <div className="relative overflow-hidden rounded-4xl">
          <Image
            src="/images/vietnam-23.jpg"
            alt="Premium Halong Bay cruise experience"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jade-950/92 via-jade-900/80 to-jade-900/40" />
          <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <Reveal>
              <span className="eyebrow text-gold-300">
                <span className="h-px w-6 bg-gold-300" /> Cruise experiences
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl text-balance">
                Premium Vietnam cruise experiences
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-cream/80">
                Experience scenic limestone mountains, peaceful waters, luxury
                cruise stays and unforgettable Halong Bay moments — crafted for
                couples, families and groups.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/cruises" variant="gold" size="lg">
                  <Ship className="h-5 w-5" /> Explore Cruise Packages
                </Button>
                <Button href={whatsappLink} external variant="glass" size="lg">
                  Ask an expert
                </Button>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 self-center">
              {[
                ["Overnight", "luxury cruises"],
                ["Private", "balcony suites"],
                ["Kayaking &", "hidden lagoons"],
                ["Sunrise", "tai chi on deck"],
              ].map(([a, b]) => (
                <Reveal key={a} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-md">
                  <div className="font-display text-xl font-semibold text-gold-300">{a}</div>
                  <div className="text-sm text-cream/80">{b}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Traveler types */}
      <section className="container-px py-20 lg:py-24">
        <SectionHeading
          align="center"
          eyebrow="For every traveler"
          title="Vietnam holidays crafted around you"
          description="Whoever you are travelling as, we tailor the pace, stays and experiences to match."
          className="mx-auto"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {travelerTypes.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.05}>
              <div className="group flex h-full flex-col rounded-3xl border border-ink/5 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-jade-200 hover:bg-jade-50/40 hover:shadow-soft">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-jade-500 to-jade-700 text-white">
                  <t.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/55">{t.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Watch & Read */}
      <section className="container-px py-20 lg:py-24">
        <SectionHeading
          eyebrow="Watch & read"
          title="Vietnam travel guides & stories"
          description="Tips, itineraries and inspiration to help you plan the perfect Vietnam holiday."
        />
        <div className="mt-10">
          <Carousel itemClass="w-[260px] sm:w-[300px]">
            {guides.map((g) => (
              <article
                key={g.title}
                className="group h-full overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-ink/[0.06] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={g.image}
                    alt={g.title}
                    fill
                    sizes="(max-width:768px) 90vw, 300px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-jade-700 shadow-soft backdrop-blur">
                    <BookOpen className="h-4 w-4" />
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-[15px] font-bold leading-snug text-ink group-hover:text-jade-700">
                    {g.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-xs text-ink/55">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-jade-600 text-[10px] font-bold text-white">
                      H
                    </span>
                    <span className="font-medium text-ink/70">{g.author}</span>
                    <span>·</span>
                    <span>{g.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-sand py-20 lg:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Traveler stories"
            title="Loved by travelers across India"
            description="Real words from families, couples and groups who explored Vietnam with us."
            action={
              <Button href="/reviews" variant="outline">
                Read all reviews <ArrowRight className="h-4 w-4" />
              </Button>
            }
          />
          <div className="mt-10">
            <Carousel itemClass="w-[300px] sm:w-[380px]">
              {reviews.map((review, i) => (
                <ReviewCard key={i} review={review} className="h-full" />
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 lg:py-12">
        <CTASection />
      </section>
    </>
  );
}
