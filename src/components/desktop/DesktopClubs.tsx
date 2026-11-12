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
    <div className="section-pad relative mx-auto hidden max-w-[1240px] px-6 lg:block xl:px-10">
      <StarShape className="animate-twinkle absolute top-14 left-[10%] h-6 w-6 text-sun" />
      <Sparkle className="animate-twinkle absolute top-24 right-[12%] h-4 w-4 text-pink [animation-delay:1.4s]" />

      <SectionHeading eyebrow={t.clubs.eyebrow} title={t.clubs.title} subtitle={t.clubs.subtitle} />

      <ul className="mt-9 grid grid-cols-6 gap-4 xl:gap-5">
        {t.clubs.items.map((club, i) => {
          const Icon = clubIcons[i];
          const tone = clubTones[i];
          const wide = i >= 3;
          return (
            <Reveal as="li" key={club.title} delay={0.08 * i} className={layout[i]}>
              <article
                className={cn(
                  "group relative h-full overflow-hidden rounded-[inherit] p-6 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card",
                  tone.card,
                  wide ? "flex items-center gap-5 xl:p-7" : "min-h-[230px] xl:p-7",
                )}
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.4}
                  className={cn(
                    "absolute -right-4 -bottom-6 h-32 w-32 transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110",
                    tone.ghost,
                  )}
                />
                <span
                  className={cn(
                    "blob-a relative grid h-[58px] w-[58px] shrink-0 place-items-center shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                    tone.icon,
                  )}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </span>
                <div className={cn("relative", !wide && "mt-6")}>
                  <span className={cn("text-[13px] font-black tracking-[0.2em]", tone.num)}>0{i + 1}</span>
                  <h3 className={cn("font-display mt-1 text-[1.4rem] leading-tight font-black", tone.title)}>
                    {club.title}
                  </h3>
                  <p className={cn("mt-2 max-w-[360px] text-[14.5px] leading-relaxed font-semibold", tone.text)}>
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
