import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-jade-500 disabled:opacity-60";

const variants = {
  primary:
    "bg-jade-600 text-white shadow-soft hover:bg-jade-700 hover:-translate-y-0.5 hover:shadow-card",
  gold: "bg-gold-400 text-ink shadow-soft hover:bg-gold-300 hover:-translate-y-0.5 hover:shadow-card",
  outline:
    "border border-jade-600/30 text-jade-700 bg-white/70 backdrop-blur hover:border-jade-600 hover:bg-white",
  ghost: "text-ink/80 hover:text-jade-700 hover:bg-jade-50",
  white:
    "bg-white text-ink shadow-soft hover:-translate-y-0.5 hover:shadow-card",
  glass:
    "bg-white/15 text-white border border-white/40 backdrop-blur-md hover:bg-white/25",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
