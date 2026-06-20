// Real photos of Halu Vietnam Tours travelers, shown as visual testimonials.
export const travelerPhotos = Array.from({ length: 14 }, (_, i) => ({
  src: `/customers/${String(i + 1).padStart(2, "0")}.jpg`,
  alt: "Happy Halu Vietnam Tours traveler in Vietnam",
}));
