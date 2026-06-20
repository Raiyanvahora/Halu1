import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import DestinationShortcuts from "@/components/DestinationShortcuts";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import PackageCard from "@/components/PackageCard";
import DestinationCard from "@/components/DestinationCard";
import TravelerPhotos from "@/components/TravelerPhotos";
import CTASection from "@/components/CTASection";
import { packages } from "@/data/packages";
import { featuredDestinations, coastalDestinations } from "@/data/destinations";
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
          title="Trending Vietnam tours"
          action={
            <Button href="/packages" variant="outline">
              View all <ArrowRight className="h-4 w-4" />
            </Button>
          }
        />
        <div className="mt-6 sm:mt-9">
          <Carousel itemClass="w-[340px] sm:w-[380px]">
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
            title="Top destinations"
            action={
              <Button href="/destinations" variant="outline">
                View all <ArrowRight className="h-4 w-4" />
              </Button>
            }
          />
          <div className="mt-6 sm:mt-9">
            <Carousel itemClass="w-[280px] sm:w-[320px]">
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
          title="Beaches & coastal escapes"
          action={
            <Button href="/destinations" variant="outline">
              View all <ArrowRight className="h-4 w-4" />
            </Button>
          }
        />
        <div className="mt-6 sm:mt-9">
          <Carousel itemClass="w-[280px] sm:w-[320px]">
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
            title="Guides & stories"
          />
          <div className="mt-6 sm:mt-9">
            <Carousel itemClass="w-[320px] sm:w-[360px]">
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

      {/* Happy travelers — photo gallery */}
      <section className="container-px py-12 sm:py-16 lg:py-24">
        <SectionHeading
          title="Happy travelers in Vietnam"
          action={
            <Button href="/reviews" variant="outline">
              View all <ArrowRight className="h-4 w-4" />
            </Button>
          }
        />
        <div className="mt-6 sm:mt-9">
          <TravelerPhotos />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 lg:py-12">
        <CTASection />
      </section>
    </>
  );
}
