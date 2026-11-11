"use client";

import { Info } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CloudShape, FlowerShape, Sparkle } from "@/components/shared/Decor";
import { mealIcons } from "@/components/shared/icons";
import { cn } from "@/lib/cn";

const mealStyles = [
  { card: "rounded-[60px_60px_28px_28px] bg-white", icon: "bg-blue text-white", lift: "" },
  { card: "rounded-[28px_60px_28px_60px] bg-pink-soft", icon: "bg-pink-deep text-white", lift: "translate-y-10" },
  { card: "rounded-[999px_999px_32px_32px] bg-white", icon: "bg-sun text-ink", lift: "" },
  { card: "rounded-[60px_28px_60px_28px] bg-pink-soft", icon: "bg-pink-deep text-white", lift: "translate-y-10" },
  { card: "rounded-[60px_60px_28px_28px] bg-white", icon: "bg-blue text-white", lift: "" },
];

export function DesktopNutrition() {
  const { t } = useLang();

  return (
    <div className="relative hidden lg:block">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <CloudShape className="animate-float-slow absolute top-10 left-[44%] w-32 text-white" />
        <CloudShape className="animate-float absolute right-[5%] bottom-24 w-24 text-white" />
        <Sparkle className="animate-twinkle absolute top-28 right-[16%] h-6 w-6 text-pink" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 pt-20 pb-28 xl:px-10">
        <div className="flex items-end justify-between gap-10">
          <SectionHeading align="left" eyebrow={t.nutrition.eyebrow} title={t.nutrition.title} subtitle={t.nutrition.subtitle} />
          <Reveal scale={0.85} y={0} className="relative mr-6 shrink-0">
            <div className="blob-a grid h-44 w-44 place-items-center bg-white text-center shadow-card">
              <span>
                <span className="font-display block text-[64px] leading-none font-black text-blue">5</span>
                <span className="mt-1 block max-w-[110px] text-[14px] leading-tight font-extrabold text-pink-deep">
                  {t.nutrition.perDay}
                </span>
              </span>
            </div>
            <FlowerShape className="animate-float absolute -top-3 -right-3 h-12 w-12 text-pink" />
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* Байланыстырушы толқын сызық */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute top-[86px] left-0 h-[120px] w-full text-blue/25"
          >
            <path
              d="M20 40C140 120 260 120 360 60S600 0 720 70 960 130 1180 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="2 12"
              strokeLinecap="round"
            />
          </svg>

          <ol className="relative grid grid-cols-5 gap-5 xl:gap-6">
            {t.nutrition.meals.map((meal, i) => {
              const Icon = mealIcons[i];
              const s = mealStyles[i];
              return (
                <li key={meal.title} className={s.lift}>
                  <Reveal delay={0.1 * i}>
                    <div
                      className={cn(
                        "group flex h-full flex-col items-center px-5 pt-9 pb-8 text-center shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card",
                        s.card,
                      )}
                    >
                      <span className="relative">
                        <span
                          className={cn(
                            "blob-b grid h-[76px] w-[76px] place-items-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-8deg]",
                            s.icon,
                          )}
                        >
                          <Icon className="h-9 w-9" strokeWidth={1.8} />
                        </span>
                        <span className="absolute -top-2 -right-3 grid h-8 w-8 place-items-center rounded-full bg-white text-[14px] font-black text-blue shadow-soft ring-2 ring-blue-soft">
                          {i + 1}
                        </span>
                      </span>
                      <h3 className="font-display mt-5 text-[1.3rem] leading-tight font-black text-balance text-blue xl:text-[1.4rem]">
                        {meal.title}
                      </h3>
                      <p className="mt-2 text-[14.5px] leading-snug font-semibold text-ink-soft">{meal.text}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal className="mt-20 flex justify-center">
          <p className="inline-flex items-center gap-2.5 rounded-full bg-white/80 px-5 py-2.5 text-[15px] font-bold text-ink-soft">
            <Info className="h-4.5 w-4.5 text-blue" />
            {t.nutrition.note}
          </p>
        </Reveal>
      </div>
    </div>
  );
}
