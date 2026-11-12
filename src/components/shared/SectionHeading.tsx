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
            "inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[12.5px] font-extrabold tracking-wide uppercase shadow-[0_6px_16px_-10px_rgb(233_30_120/0.45)] ring-1 backdrop-blur",
            tone === "blue" ? "bg-white/85 text-pink-deep ring-blush" : "bg-white/85 text-blue ring-sky-light",
          )}
        >
          <span className={cn("h-2 w-2 rounded-full", tone === "blue" ? "bg-rose" : "bg-blue")} />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display mt-3 text-[1.65rem] leading-[1.15] font-black tracking-tight text-balance text-blue sm:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem]">
        {title}
      </h2>
      <SquiggleLine
        className={cn("mt-2.5 h-2.5 w-20 text-pink lg:mt-3 lg:w-24", align === "center" ? "mx-auto" : "")}
      />
      {subtitle ? (
        <p className="mt-3 text-[15px] leading-relaxed font-semibold text-pretty text-ink-soft lg:text-[16.5px]">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
