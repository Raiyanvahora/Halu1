import Reveal from "./Reveal";

// Reusable section header: eyebrow + title + optional description, with optional action slot.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className = "",
}) {
  const centered = align === "center";
  return (
    <div
      className={`flex flex-col gap-4 sm:gap-5 ${
        centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      } ${className}`}
    >
      <Reveal className={centered ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow && (
          <span className="eyebrow mb-3">
            <span className="h-px w-6 bg-jade-500" />
            {eyebrow}
          </span>
        )}
        <h2 className="text-[1.7rem] leading-tight text-ink sm:text-4xl lg:text-[2.6rem] text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-[15px] leading-relaxed text-ink/65 sm:mt-4 sm:text-base">{description}</p>
        )}
      </Reveal>
      {action && <Reveal delay={0.1} className="shrink-0">{action}</Reveal>}
    </div>
  );
}
