// Central brand + contact configuration for Halu Vietnam Tours.
// Update values here once and they propagate across the whole site.

export const site = {
  name: "Halu Vietnam Tours",
  shortName: "Halu",
  tagline: "Travel Vietnam Like a Local",
  description:
    "Halu Vietnam Tours is a Vietnam travel specialist helping Indian travelers plan smooth, memorable and premium Vietnam holidays — custom itineraries, luxury stays, cruises and authentic local experiences.",
  email: "haluvietnamtoursindia@gmail.com",
  phoneIndia: "+91 76000 26160",
  phoneVietnam: "+84 972 077 744",
  // tel: links (digits only)
  phoneIndiaHref: "+917600026160",
  phoneVietnamHref: "+84972077744",
  whatsapp: "917600026160",
  whatsappMessage:
    "Hi Halu Vietnam Tours! I'd like a free quote for a Vietnam holiday.",
  officeIndia:
    "TF23, Bakrol Square, Nr. Elecon Garden, Anand, Gujarat 388120",
  officeVietnam:
    "31 Do Quang Dau Street, Pham Ngu Lao Ward, District 1, Ho Chi Minh City, Vietnam",
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
};

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Vietnam Packages", href: "/packages" },
  { label: "Daily Tours", href: "/daily-tours" },
  { label: "Cruises", href: "/cruises" },
  { label: "Transportation", href: "/transportation" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const sellingPoints = [
  "Vietnam travel experts",
  "Custom itineraries",
  "Luxury stays",
  "Best price assistance",
  "Local Vietnam expertise",
  "India to Vietnam assistance",
];
