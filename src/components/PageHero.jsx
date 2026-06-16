import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

// Compact hero banner for inner pages, with breadcrumb + image background.
export default function PageHero({
  title,
  subtitle,
  image = "/images/vietnam-02.jpg",
  eyebrow,
  crumbs = [],
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/30" />
      <div className="container-px relative pb-12 pt-20">
        <Reveal>
          <nav className="mb-4 flex items-center gap-1.5 text-sm text-cream/70">
            <Link href="/" className="hover:text-white">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-4 w-4" />
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">{c.label}</Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          {eyebrow && (
            <span className="eyebrow text-gold-300">
              <span className="h-px w-6 bg-gold-300" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream/80">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
