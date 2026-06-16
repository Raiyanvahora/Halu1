import Link from "next/link";
import Image from "next/image";

// Official Halu Vietnam Tours circular emblem.
// `dark` = dark text/context → use the blue logo on light backgrounds;
// otherwise use the white logo for dark backgrounds (e.g. the footer).
export default function Logo({ dark = false, className = "h-12 w-12" }) {
  const src = dark ? "/brand/halu-logo-blue.png" : "/brand/halu-logo-white.png";
  return (
    <Link
      href="/"
      className="group inline-flex items-center transition-transform duration-300 hover:-translate-y-0.5"
      aria-label="Halu Vietnam Tours home"
    >
      <Image
        src={src}
        alt="Halu Vietnam Tours"
        width={160}
        height={160}
        priority
        className={`object-contain ${className}`}
      />
    </Link>
  );
}
