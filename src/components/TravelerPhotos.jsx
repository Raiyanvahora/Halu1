import Image from "next/image";
import Carousel from "./Carousel";
import { travelerPhotos } from "@/data/travelerPhotos";

// Swipeable gallery of real traveler photos — visual testimonials.
export default function TravelerPhotos() {
  return (
    <Carousel itemClass="w-[280px] sm:w-[320px]">
      {travelerPhotos.map((photo, i) => (
        <div
          key={i}
          className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand shadow-soft ring-1 ring-ink/[0.06]"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 80vw, 320px"
            className="object-cover transition-transform duration-700 ease-smooth hover:scale-105"
          />
        </div>
      ))}
    </Carousel>
  );
}
