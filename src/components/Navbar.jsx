"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu, X, Phone, MessageCircle, ChevronLeft, ChevronRight, CircleUserRound,
  Building2, Ship, Mountain, Waves, Landmark, Sparkles, UtensilsCrossed, TreePalm,
} from "lucide-react";
import { nav, site, whatsappLink } from "@/data/site";
import Button from "./Button";
import Logo from "./Logo";

// Minimal centred top-bar links, matching the Avian reference (3 links).
const topNav = [
  { label: "Tour Packages", href: "/packages" },
  { label: "Daily Tours", href: "/daily-tours" },
  { label: "Cruises", href: "/cruises" },
];

// Avian-style quick destination strip shown under the main header.
const quickNav = [
  { label: "Hanoi", icon: Landmark, href: "/destinations/hanoi" },
  { label: "Halong Bay", icon: Ship, href: "/destinations/halong-bay" },
  { label: "Da Nang", icon: Waves, href: "/destinations/da-nang" },
  { label: "Hoi An", icon: Sparkles, href: "/destinations/hoi-an" },
  { label: "Ho Chi Minh", icon: Building2, href: "/destinations/ho-chi-minh-city" },
  { label: "Golden Bridge", icon: Mountain, href: "/destinations/golden-bridge" },
  { label: "Cruises", icon: Ship, href: "/cruises" },
  { label: "Beaches", icon: TreePalm, href: "/destinations/da-nang" },
  { label: "Food Walks", icon: UtensilsCrossed, href: "/daily-tours" },
];

function QuickStrip() {
  const ref = useRef(null);
  const scrollBy = (dir) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * 260, behavior: "smooth" });
  };
  return (
    <div className="relative border-t border-ink/5 bg-white">
      <div className="container-px relative">
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollBy(-1)}
          className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-1 text-ink/50 shadow-soft ring-1 ring-ink/10 hover:text-jade-700"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div ref={ref} className="no-scrollbar flex items-center gap-5 overflow-x-auto px-8 py-1.5 sm:gap-7 sm:py-2.5">
          {quickNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex shrink-0 flex-col items-center gap-1 text-ink/60 transition-colors hover:text-jade-700"
            >
              <item.icon className="h-[18px] w-[18px] stroke-[1.5] transition-transform group-hover:-translate-y-0.5 sm:h-5 sm:w-5" />
              <span className="text-[11px] font-medium whitespace-nowrap">{item.label}</span>
            </Link>
          ))}
        </div>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollBy(1)}
          className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-1 text-ink/50 shadow-soft ring-1 ring-ink/10 hover:text-jade-700"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_6px_24px_-12px_rgba(0,0,0,0.18)]" : "border-b border-ink/5"
      }`}
    >
      <nav className="container-px flex h-[60px] items-center justify-between gap-4 sm:h-20 lg:h-[92px]">
        <Logo dark className="h-11 w-11 sm:h-16 sm:w-16 lg:h-[76px] lg:w-[76px]" />

        {/* Desktop nav (centered) — minimal, matching the reference */}
        <ul className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          {topNav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    active ? "text-ink" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          {/* Account icon (desktop) */}
          <Link
            href="/contact"
            aria-label="Account"
            className="hidden h-11 w-11 items-center justify-center rounded-full text-ink/55 transition-colors hover:bg-ink/5 hover:text-ink lg:inline-flex"
          >
            <CircleUserRound className="h-7 w-7 stroke-[1.5]" />
          </Link>
          {/* Hamburger (mobile) */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-ink/5 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Destination quick strip */}
      <QuickStrip />

      {/* Mobile slide-in drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-ink/10 px-5 py-5">
                <Logo dark />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-ink/5"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-1 flex-col overflow-y-auto px-5 py-6">
                <ul className="flex flex-col gap-1">
                  {nav.map((item, i) => {
                    const active = pathname === item.href;
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + i * 0.04 }}
                      >
                        <Link
                          href={item.href}
                          className={`block rounded-2xl px-4 py-3 text-lg font-medium transition ${
                            active ? "bg-jade-50 text-jade-700" : "text-ink/80 hover:bg-ink/5"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                <div className="mt-auto flex flex-col gap-3 pt-8">
                  <Button href="/contact" variant="gold" size="lg" className="w-full">
                    Get Free Quote
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button href={`tel:${site.phoneIndiaHref}`} variant="outline" className="w-full">
                      <Phone className="h-4 w-4" /> Call
                    </Button>
                    <Button href={whatsappLink} external variant="primary" className="w-full">
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
