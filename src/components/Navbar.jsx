"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, MessageCircle, CircleUserRound } from "lucide-react";
import { nav, site, whatsappLink } from "@/data/site";
import Button from "./Button";
import Logo from "./Logo";

// Pill-style primary tabs — our real categories (premium travel-app feel).
const tabs = [
  { label: "Tour Packages", href: "/packages" },
  { label: "Daily Tours", href: "/daily-tours" },
  { label: "Cruises", href: "/cruises" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
        scrolled ? "shadow-[0_6px_24px_-14px_rgba(16,24,40,0.18)]" : "border-b border-ink/5"
      }`}
    >
      {/* Row 1 — minimal bar: logo left, profile + menu right */}
      <nav
        className={`container-px flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled
            ? "h-[66px] sm:h-[68px] lg:h-[72px]"
            : "h-[88px] sm:h-[96px] lg:h-[104px]"
        }`}
      >
        <Logo
          dark
          className={`transition-all duration-300 ${
            scrolled
              ? "h-14 w-14 sm:h-14 sm:w-14 lg:h-14 lg:w-14"
              : "h-[72px] w-[72px] sm:h-[80px] sm:w-[80px] lg:h-[92px] lg:w-[92px]"
          }`}
        />

        <div className="flex items-center gap-1.5">
          <Link
            href="/contact"
            aria-label="Account"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <CircleUserRound className="h-[26px] w-[26px] stroke-[1.5]" />
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Row 2 — pill nav tabs; tucks away on scroll */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-24 opacity-100"
        }`}
      >
        <div className="container-px pb-3 pt-0.5">
          <div className="mx-auto flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full bg-white p-1.5 shadow-pill ring-1 ring-ink/[0.06]">
            {tabs.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5 ${
                    active
                      ? "bg-jade-600 text-white"
                      : "text-ink/70 hover:bg-jade-50 hover:text-jade-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile slide-in drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-white shadow-2xl"
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
                  <Button href="/contact" variant="primary" size="lg" className="w-full">
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
