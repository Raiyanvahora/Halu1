import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import Hero from "@/components/Hero";
import DestinationShortcuts from "@/components/DestinationShortcuts";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import PackageCard from "@/components/PackageCard";
import DestinationCard from "@/components/DestinationCard";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import { packages } from "@/data/packages";
import { featuredDestinations, coastalDestinations } from "@/data/destinations";
import { reviews } from "@/data/reviews";
import { guides } from "@/data/guides";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Icon destination shortcuts */}
      <DestinationShortcuts />

      {/* Trending packages — white */}
      <section className="container-px pb-12 pt-2 sm:pb-16 lg:pb-20">
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
        <div className="mt-7 sm:mt-10">
          <Carousel itemClass="w-[290px] sm:w-[340px]">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </Carousel>
        </div>
      </section>

      {/* Top destinations — light-grey */}
      <section className="bg-sand py-12 sm:py-16 lg:py-24">
        <div className="container-px">
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
          <div className="mt-7 sm:mt-10">
            <Carousel itemClass="w-[200px] sm:w-[240px]">
              {featuredDestinations.map((d) => (
                <DestinationCard key={d.slug} destination={d} />
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* More destinations — white */}
      <section className="container-px py-12 sm:py-16 lg:py-24">
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
        <div className="mt-7 sm:mt-10">
          <Carousel itemClass="w-[200px] sm:w-[240px]">
            {coastalDestinations.map((d) => (
              <DestinationCard key={d.slug} destination={d} />
            ))}
          </Carousel>
        </div>
      </section>

      {/* Watch & Read — light-grey */}
      <section className="bg-sand py-12 sm:py-16 lg:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Watch & read"
            title="Vietnam travel guides & stories"
            description="Tips, itineraries and inspiration to help you plan the perfect Vietnam holiday."
          />
          <div className="mt-7 sm:mt-10">
            <Carousel itemClass="w-[260px] sm:w-[300px]">
              {guides.map((g) => (
                <article
                  key={g.title}
                  className="group h-full overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink/[0.06] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
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
        </div>
      </section>

      {/* Reviews — white */}
      <section className="container-px py-12 sm:py-16 lg:py-24">
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
        <div className="mt-7 sm:mt-10">
          <Carousel itemClass="w-[300px] sm:w-[380px]">
            {reviews.map((review, i) => (
              <ReviewCard key={i} review={review} className="h-full" />
            ))}
          </Carousel>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 lg:py-12">
        <CTASection />
      </section>
    </>
  );
}
