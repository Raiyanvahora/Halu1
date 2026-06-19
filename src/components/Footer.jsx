import Link from "next/link";
import { Phone, MapPin, Heart, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { site, nav, whatsappLink } from "@/data/site";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";

const destinationLinks = [
  { label: "Hanoi", href: "/destinations/hanoi" },
  { label: "Halong Bay", href: "/destinations/halong-bay" },
  { label: "Da Nang", href: "/destinations/da-nang" },
  { label: "Hoi An", href: "/destinations/hoi-an" },
  { label: "Ho Chi Minh City", href: "/destinations/ho-chi-minh-city" },
];

export default function Footer() {
  return (
    <footer className="mt-16 sm:mt-24">
      {/* Contact strip — white card overlapping the charcoal footer */}
      <div className="container-px relative z-10 translate-y-1/2">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-white px-6 py-7 text-center shadow-card ring-1 ring-ink/5 sm:flex-row sm:justify-between sm:gap-6 sm:px-10 sm:text-left">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
              <MessageCircle className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-sm text-ink/55">Don&apos;t wait any longer — contact us!</span>
              <span className="block text-xl font-extrabold text-ink sm:text-2xl">{site.phoneIndia}</span>
            </span>
          </a>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <span className="text-sm font-semibold text-ink/70">Be part of our journey</span>
            <div className="flex gap-2.5">
              {[
                { Icon: Instagram, href: site.social.instagram, label: "Instagram" },
                { Icon: Facebook, href: site.social.facebook, label: "Facebook" },
                { Icon: Youtube, href: site.social.youtube, label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sand text-ink/70 transition hover:bg-jade-600 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Charcoal footer */}
      <div className="bg-charcoal pt-24 text-white/70 sm:pt-28">
        <div className="container-px pb-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-9 lg:grid-cols-[1.4fr_1.3fr_1fr_1fr] lg:gap-12">
            {/* Brand + newsletter */}
            <div>
              <Logo dark={false} className="h-24 w-24 sm:h-32 sm:w-32 lg:h-36 lg:w-36" />
              <h3 className="mt-5 text-base font-bold text-white">Get updates &amp; more!</h3>
              <p className="mt-2 text-sm">
                Subscribe for Vietnam travel tips, seasonal deals and new packages.
              </p>
              <NewsletterForm />
              <a href={`mailto:${site.email}`} className="mt-4 block break-all text-sm hover:text-white">
                {site.email}
              </a>
            </div>

            {/* Get in touch — offices */}
            <div>
              <h3 className="text-base font-bold text-white">Get in touch</h3>
              <div className="mt-5 space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-jade-300" />
                  <span><span className="font-semibold text-white">India Office</span><br />{site.officeIndia}</span>
                </div>
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-jade-300" />
                  <span><span className="font-semibold text-white">Vietnam Office</span><br />{site.officeVietnam}</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-jade-300" />
                  <span>
                    <a href={`tel:${site.phoneIndiaHref}`} className="block hover:text-white">India: {site.phoneIndia}</a>
                    <a href={`tel:${site.phoneVietnamHref}`} className="block hover:text-white">Vietnam: {site.phoneVietnam}</a>
                  </span>
                </div>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-base font-bold text-white">Explore</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link-underline hover:text-white">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h3 className="text-base font-bold text-white">Destinations</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {destinationLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link-underline hover:text-white">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-sm text-white/55 sm:flex-row">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <p className="inline-flex items-center gap-1.5">
              Made with <Heart className="h-4 w-4 fill-jade-400 text-jade-400" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
