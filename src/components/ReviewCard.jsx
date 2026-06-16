import { Quote } from "lucide-react";
import Stars from "./Stars";

export default function ReviewCard({ review, className = "" }) {
  const initials = review.name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <figure
      className={`flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink/5 ${className}`}
    >
      <Quote className="h-8 w-8 text-jade-200" />
      <Stars rating={review.rating} className="mt-3" />
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/75">
        “{review.text}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-5">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-jade-500 to-jade-700 text-sm font-bold text-white">
          {initials}
        </span>
        <span>
          <span className="block text-sm font-semibold text-ink">{review.name}</span>
          <span className="block text-xs text-ink/55">
            {review.trip}
            {review.location ? ` · ${review.location}` : ""}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
