"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PackageCard from "./PackageCard";
import { packages, packageFilters } from "@/data/packages";

export default function PackagesExplorer() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return packages;
    return packages.filter((p) => p.tags?.includes(active));
  }, [active]);

  return (
    <div>
      {/* Filter chips */}
      <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto pb-2">
        {packageFilters.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-jade-600 text-white shadow-soft"
                  : "border border-ink/10 bg-white text-ink/65 hover:border-jade-400 hover:text-jade-700"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-ink/55">
        Showing <span className="font-semibold text-ink">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "package" : "packages"}
        {active !== "All" && (
          <>
            {" "}
            for <span className="font-semibold text-jade-700">{active}</span>
          </>
        )}
      </p>

      <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((pkg) => (
            <motion.div
              key={pkg.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 rounded-3xl bg-sand p-10 text-center text-ink/60">
          No packages match this filter yet — but we build fully custom trips.{" "}
          <a href="/contact" className="font-semibold text-jade-700 underline">
            Request a custom itinerary
          </a>
          .
        </p>
      )}
    </div>
  );
}
