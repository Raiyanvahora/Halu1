import { Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/data/reviews";

export const metadata = {
  title: "Traveler Reviews",
  description:
    "Read real reviews from Indian families, couples and groups who explored Vietnam with Halu Vietnam Tours.",
};

export default function ReviewsPage() {
  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <>
      <PageHero
        eyebrow="Traveler stories"
        title="Loved by travelers across India"
        subtitle="Honest words from the families, couples and groups we've helped explore Vietnam."
        image="/images/vietnam-12.jpg"
        crumbs={[{ label: "Reviews" }]}
      />

      {/* Rating banner */}
      <section className="container-px -mt-10 relative z-10">
        <Reveal className="flex flex-col items-center justify-between gap-6 rounded-4xl bg-white p-8 shadow-card ring-1 ring-ink/5 sm:flex-row">
          <div className="flex items-center gap-5">
            <div className="text-center">
              <div className="font-display text-5xl font-semibold text-jade-700">{avg}</div>
              <div className="mt-1 flex justify-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
            </div>
            <div className="h-14 w-px bg-ink/10" />
            <div>
              <div className="text-lg font-semibold text-ink">Excellent</div>
              <div className="text-sm text-ink/55">Based on {reviews.length}+ verified traveler reviews</div>
            </div>
          </div>
          <p className="max-w-sm text-center text-sm text-ink/55 sm:text-right">
            Every review comes from a real Halu Vietnam Tours traveler from India.
          </p>
        </Reveal>
      </section>

      <section className="container-px py-10 sm:py-14 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <ReviewCard review={review} className="h-full" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <CTASection
          title="Ready to write your own Vietnam story?"
          subtitle="Join hundreds of happy Indian travelers — get your free custom itinerary today."
        />
      </section>
    </>
  );
}
