import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5 py-28 text-center">
      <div className="max-w-lg">
        <p className="font-display text-6xl font-semibold text-jade-700 sm:text-7xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink">
          This page took a detour
        </h1>
        <p className="mt-3 text-ink/60">
          The page you're looking for isn't here — but your Vietnam adventure
          definitely is. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="primary" size="lg">Back home</Button>
          <Button href="/packages" variant="outline" size="lg">Browse packages</Button>
        </div>
      </div>
    </section>
  );
}
