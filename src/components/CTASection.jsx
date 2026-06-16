import { Phone, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/data/site";
import Button from "./Button";
import Reveal from "./Reveal";

// Final conversion block — reused across pages.
export default function CTASection({
  title = "Start Your Vietnam Journey Today",
  subtitle = "Talk to our Vietnam experts and get a custom itinerary for your next holiday.",
}) {
  return (
    <section className="container-px">
      <Reveal className="relative overflow-hidden rounded-4xl bg-jade-800 px-6 py-14 text-center shadow-card sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-jade-600/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <span className="eyebrow text-gold-300">
            <span className="h-px w-6 bg-gold-300" /> Free, no-obligation quote
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl text-balance">
            {title}
          </h2>
          <p className="mt-4 text-lg text-cream/75">{subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={`tel:${site.phoneIndiaHref}`} variant="gold" size="lg">
              <Phone className="h-5 w-5" /> Call Now
            </Button>
            <Button href="/contact" variant="white" size="lg">
              Get Free Quote
            </Button>
            <Button href={whatsappLink} external variant="glass" size="lg">
              <MessageCircle className="h-5 w-5" /> WhatsApp Enquiry
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
