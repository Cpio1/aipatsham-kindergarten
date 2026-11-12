"use client";

import { Info } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { mealIcons } from "@/components/shared/icons";
import { cn } from "@/lib/cn";

const tones = [
  { icon: "bg-blue text-white", card: "bg-white rounded-[26px_26px_26px_10px]" },
  { icon: "bg-pink-deep text-white", card: "bg-pink-soft rounded-[10px_26px_26px_26px]" },
  { icon: "bg-sun text-ink", card: "bg-white rounded-[26px_10px_26px_26px]" },
  { icon: "bg-pink-deep text-white", card: "bg-pink-soft rounded-[26px_26px_10px_26px]" },
  { icon: "bg-blue text-white", card: "bg-white rounded-[26px_26px_26px_10px]" },
];

export function MobileNutrition() {
  const { t } = useLang();

  return (
    <div className="section-pad relative mx-auto max-w-xl px-4 sm:px-6 lg:hidden">
      <SectionHeading eyebrow={t.nutrition.eyebrow} title={t.nutrition.title} subtitle={t.nutrition.subtitle} />

      <ol className="relative mt-7 grid gap-2.5 pl-1">
        <span
          aria-hidden="true"
          className="absolute top-8 bottom-8 left-[28px] border-l-[3px] border-dotted border-blue/30"
        />
        {t.nutrition.meals.map((meal, i) => {
          const Icon = mealIcons[i];
          const tone = tones[i];
          return (
            <Reveal as="li" key={meal.title} delay={0.05 * i} x={-16} y={0} className="relative flex items-center gap-3">
              <span
                className={cn(
                  "blob-b relative z-10 grid h-[52px] w-[52px] shrink-0 place-items-center shadow-soft ring-4 ring-white/80",
                  tone.icon,
                )}
              >
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <div className={cn("card-soft min-w-0 flex-1 px-4 py-3", tone.card)}>
                <div className="flex items-baseline gap-2">
                  <span className="text-[12px] font-black text-pink-deep">0{i + 1}</span>
                  <h3 className="font-display text-[1.05rem] leading-tight font-black text-blue">{meal.title}</h3>
                </div>
                <p className="mt-0.5 text-[13.5px] leading-snug font-semibold text-ink-soft">{meal.text}</p>
              </div>
            </Reveal>
          );
        })}
      </ol>

      <Reveal className="mt-6">
        <p className="flex items-start gap-2 card-soft rounded-[20px] bg-white/85 px-4 py-3 text-[13.5px] font-bold text-ink-soft">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
          {t.nutrition.note}
        </p>
      </Reveal>
    </div>
  );
}
