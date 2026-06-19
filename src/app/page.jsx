import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
          title="Most-loved Vietnam tours"
          action={
            <Button href="/packages" variant="outline">
              View all <ArrowRight className="h-4 w-4" />
            </Button>
          }
        />
        <div className="mt-7 sm:mt-10">
          <Carousel itemClass="w-[320px] sm:w-[370px]">
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
            action={
              <Button href="/destinations" variant="outline">
                View all <ArrowRight className="h-4 w-4" />
              </Button>
            }
          />
          <div className="mt-7 sm:mt-10">
            <Carousel itemClass="w-[270px] sm:w-[300px]">
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
          action={
            <Button href="/destinations" variant="outline">
              View all <ArrowRight className="h-4 w-4" />
            </Button>
          }
        />
        <div className="mt-7 sm:mt-10">
          <Carousel itemClass="w-[270px] sm:w-[300px]">
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
          />
          <div className="mt-7 sm:mt-10">
            <Carousel itemClass="w-[300px] sm:w-[340px]">
              {guides.map((g) => (
                <article
                  key={g.title}
                  className="group h-full overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink/[0.06] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={g.image}
                      alt={g.title}
                      fill
                      sizes="(max-width:768px) 92vw, 340px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold leading-snug text-ink group-hover:text-jade-700">
                      {g.title}
                    </h3>
                    <p className="mt-2 text-xs font-medium text-ink/45">{g.readTime}</p>
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
          action={
            <Button href="/reviews" variant="outline">
              View all <ArrowRight className="h-4 w-4" />
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
