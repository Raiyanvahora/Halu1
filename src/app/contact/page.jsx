import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site, whatsappLink } from "@/data/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Talk to Halu Vietnam Tours — get a free quote and a custom Vietnam itinerary. Offices in Anand (India) and Ho Chi Minh City (Vietnam).",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's plan your Vietnam holiday"
        subtitle="Talk to our Vietnam experts and get a free, custom itinerary for your next trip — by form, call or WhatsApp."
        image="/images/vietnam-13.jpg"
        crumbs={[{ label: "Contact" }]}
      />

      <section className="container-px py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Contact details */}
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-jade-500" /> We'd love to hear from you
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl text-balance">
              Vietnam experts, a message away
            </h2>
            <p className="mt-4 leading-relaxed text-ink/65">
              Whether you're dreaming up a honeymoon, a family holiday or a group
              adventure, our team in India and Vietnam is ready to help.
            </p>

            <div className="mt-8 space-y-4">
              <a href={`mailto:${site.email}`} className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:shadow-card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-jade-50 text-jade-600"><Mail className="h-5 w-5" /></span>
                <span>
                  <span className="block text-sm font-semibold text-ink">Email us</span>
                  <span className="block break-all text-sm text-ink/60">{site.email}</span>
                </span>
              </a>

              <div className="grid gap-4 sm:grid-cols-2">
                <a href={`tel:${site.phoneIndiaHref}`} className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:shadow-card">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-jade-50 text-jade-600"><Phone className="h-5 w-5" /></span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">India</span>
                    <span className="block text-sm text-ink/60">{site.phoneIndia}</span>
                  </span>
                </a>
                <a href={`tel:${site.phoneVietnamHref}`} className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:shadow-card">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-jade-50 text-jade-600"><Phone className="h-5 w-5" /></span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">Vietnam</span>
                    <span className="block text-sm text-ink/60">{site.phoneVietnam}</span>
                  </span>
                </a>
              </div>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-3xl bg-[#25D366] p-5 text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20"><MessageCircle className="h-5 w-5" /></span>
                <span>
                  <span className="block text-sm font-semibold">Chat on WhatsApp</span>
                  <span className="block text-sm text-white/85">Fastest way to reach us</span>
                </span>
              </a>

              {/* Offices */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-sand p-5">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-jade-700"><MapPin className="h-4 w-4" /> India Office</span>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{site.officeIndia}</p>
                </div>
                <div className="rounded-3xl bg-sand p-5">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-jade-700"><MapPin className="h-4 w-4" /> Vietnam Office</span>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{site.officeVietnam}</p>
                </div>
              </div>

              <p className="flex items-center gap-2 text-sm text-ink/55">
                <Clock className="h-4 w-4 text-jade-500" /> Mon–Sat, 9:00 AM – 8:00 PM IST
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
