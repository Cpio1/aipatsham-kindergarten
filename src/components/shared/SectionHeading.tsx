import { Reveal } from "./Reveal";
import { SquiggleLine } from "./Decor";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "blue",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "blue" | "pink";
  className?: string;
}) {
  return (
    <Reveal className={cn(align === "center" ? "mx-auto text-center" : "text-left", "max-w-2xl", className)}>
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-extrabold tracking-wide uppercase",
            tone === "blue" ? "bg-pink-soft text-pink-deep" : "bg-blue-soft text-blue",
          )}
        >
          <span className={cn("h-2 w-2 rounded-full", tone === "blue" ? "bg-pink" : "bg-blue")} />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display mt-4 text-[1.85rem] leading-[1.12] font-black tracking-tight text-balance text-blue sm:text-[2.2rem] lg:text-[2.9rem]">
        {title}
      </h2>
      <SquiggleLine
        className={cn("mt-3 h-3 w-24 text-pink lg:mt-4 lg:w-28", align === "center" ? "mx-auto" : "")}
      />
      {subtitle ? (
        <p className="mt-4 text-[16px] leading-relaxed font-semibold text-pretty text-ink-soft lg:text-[18px]">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
