"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronsRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { clubIcons } from "@/components/shared/icons";
import { clubTones } from "@/components/shared/clubStyles";
import { cn } from "@/lib/cn";

const shapes = [
  "rounded-[40px_40px_40px_14px]",
  "rounded-[14px_40px_40px_40px]",
  "rounded-[40px_14px_40px_40px]",
  "rounded-[40px_40px_14px_40px]",
  "rounded-[40px_40px_40px_14px]",
];

export function MobileClubs() {
  const { t } = useLang();
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const cards = Array.from(el.children) as HTMLElement[];
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setIndex(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const el = track.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: "smooth" });
  };

  return (
    <div className="section-pad mx-auto max-w-xl lg:hidden">
      <div className="px-4 sm:px-6">
        <SectionHeading eyebrow={t.clubs.eyebrow} title={t.clubs.title} subtitle={t.clubs.subtitle} />
      </div>

      <Reveal className="mt-6">
        <ul
          ref={track}
          className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-smooth px-4 pt-2 pb-4 sm:px-6"
          aria-label={t.clubs.title}
        >
          {t.clubs.items.map((club, i) => {
            const Icon = clubIcons[i];
            const tone = clubTones[i];
            return (
              <li
                key={club.title}
                className={cn(
                  "relative w-[78%] max-w-[290px] card-soft shrink-0 snap-center overflow-hidden p-5",
                  shapes[i],
                  tone.card,
                )}
              >
                <Icon aria-hidden="true" strokeWidth={1.4} className={cn("absolute -right-4 -bottom-4 h-24 w-24", tone.ghost)} />
                <span className={cn("blob-a relative grid h-12 w-12 place-items-center", tone.icon)}>
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <span className={cn("relative mt-5 block text-[12px] font-black tracking-[0.2em]", tone.num)}>0{i + 1}</span>
                <h3 className={cn("font-display relative mt-0.5 text-[1.25rem] leading-tight font-black", tone.title)}>
                  {club.title}
                </h3>
                <p className={cn("relative mt-1.5 text-[14px] leading-snug font-semibold", tone.text)}>{club.text}</p>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-center gap-3 px-4">
          <div className="flex items-center gap-1.5">
            {t.clubs.items.map((club, i) => (
              <button
                key={club.title}
                type="button"
                onClick={() => goTo(i)}
                aria-label={club.title}
                aria-current={index === i ? "true" : undefined}
                className="grid h-8 min-w-6 place-items-center px-0.5"
              >
                <span
                  className={cn(
                    "block h-2.5 rounded-full transition-all duration-300",
                    index === i ? "w-7 bg-blue" : "w-2.5 bg-blue/20",
                  )}
                />
              </button>
            ))}
          </div>
          <span className="inline-flex items-center gap-1 text-[12.5px] font-bold text-ink-soft">
            {t.clubs.swipeHint}
            <ChevronsRight className="h-4 w-4 text-pink-deep" />
          </span>
        </div>
      </Reveal>
    </div>
  );
}
