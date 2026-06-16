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
    <footer className="mt-24">
      {/* Contact strip — white card overlapping the charcoal footer */}
      <div className="container-px relative z-10 translate-y-1/2">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-white px-6 py-7 shadow-card ring-1 ring-ink/5 sm:flex-row sm:px-10">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white">
              <MessageCircle className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-sm text-ink/55">Don&apos;t wait any longer — contact us!</span>
              <span className="block text-2xl font-extrabold text-ink">{site.phoneIndia}</span>
            </span>
          </a>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm font-semibold text-ink/70 sm:block">Be part of our journey</span>
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
      <div className="bg-charcoal pt-28 text-white/70">
        <div className="container-px pb-10">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
            {/* Brand + offices */}
            <div>
              <Logo dark={false} className="h-36 w-36" />
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                  <span><span className="font-semibold text-white">India Office</span><br />{site.officeIndia}</span>
                </div>
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                  <span><span className="font-semibold text-white">Vietnam Office</span><br />{site.officeVietnam}</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
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

            {/* Newsletter */}
            <div>
              <h3 className="text-base font-bold text-white">Get updates &amp; more!</h3>
              <p className="mt-3 text-sm">
                Subscribe for Vietnam travel tips, seasonal deals and new packages.
              </p>
              <NewsletterForm />
              <a href={`mailto:${site.email}`} className="mt-4 block break-all text-sm hover:text-white">
                {site.email}
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-sm text-white/55 sm:flex-row">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <p className="inline-flex items-center gap-1.5">
              Made with <Heart className="h-4 w-4 fill-gold-400 text-gold-400" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
