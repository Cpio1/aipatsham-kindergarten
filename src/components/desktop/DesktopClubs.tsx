"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Sparkle, StarShape } from "@/components/shared/Decor";
import { clubIcons } from "@/components/shared/icons";
import { clubTones } from "@/components/shared/clubStyles";
import { cn } from "@/lib/cn";

const layout = [
  "col-span-2 rounded-[56px_56px_56px_18px]",
  "col-span-2 rounded-[18px_56px_56px_56px]",
  "col-span-2 rounded-[56px_18px_56px_56px]",
  "col-span-3 rounded-[56px_56px_18px_56px]",
  "col-span-3 rounded-[56px_56px_56px_18px]",
];

export function DesktopClubs() {
  const { t } = useLang();

  return (
    <div className="relative mx-auto hidden max-w-[1320px] px-6 py-24 lg:block xl:px-10 xl:py-28">
      <StarShape className="animate-twinkle absolute top-24 left-[12%] h-9 w-9 text-sun" />
      <Sparkle className="animate-twinkle absolute top-40 right-[14%] h-6 w-6 text-pink [animation-delay:1.4s]" />

      <SectionHeading eyebrow={t.clubs.eyebrow} title={t.clubs.title} subtitle={t.clubs.subtitle} />

      <ul className="mt-14 grid grid-cols-6 gap-6">
        {t.clubs.items.map((club, i) => {
          const Icon = clubIcons[i];
          const tone = clubTones[i];
          const wide = i >= 3;
          return (
            <Reveal as="li" key={club.title} delay={0.08 * i} className={layout[i]}>
              <article
                className={cn(
                  "group relative h-full overflow-hidden rounded-[inherit] p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card",
                  tone.card,
                  wide ? "flex items-center gap-7 xl:p-9" : "min-h-[300px]",
                )}
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.4}
                  className={cn(
                    "absolute -right-6 -bottom-8 h-44 w-44 transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110",
                    tone.ghost,
                  )}
                />
                <span
                  className={cn(
                    "blob-a relative grid h-[72px] w-[72px] shrink-0 place-items-center shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                    tone.icon,
                  )}
                >
                  <Icon className="h-9 w-9" strokeWidth={1.8} />
                </span>
                <div className={cn("relative", !wide && "mt-10")}>
                  <span className={cn("text-[13px] font-black tracking-[0.2em]", tone.num)}>0{i + 1}</span>
                  <h3 className={cn("font-display mt-1 text-[1.75rem] leading-tight font-black", tone.title)}>
                    {club.title}
                  </h3>
                  <p className={cn("mt-2.5 max-w-[340px] text-[16px] leading-relaxed font-semibold", tone.text)}>
                    {club.text}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}
