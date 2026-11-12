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
  { card: "rounded-[28px_60px_28px_60px] bg-pink-soft", icon: "bg-pink-deep text-white", lift: "translate-y-6" },
  { card: "rounded-[96px_96px_32px_32px] bg-white", icon: "bg-sun text-ink", lift: "" },
  { card: "rounded-[60px_28px_60px_28px] bg-pink-soft", icon: "bg-pink-deep text-white", lift: "translate-y-6" },
  { card: "rounded-[60px_60px_28px_28px] bg-white", icon: "bg-blue text-white", lift: "" },
];

export function DesktopNutrition() {
  const { t } = useLang();

  return (
    <div className="relative hidden lg:block">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <CloudShape className="animate-float-slow absolute top-6 left-[44%] w-20 text-white" />
        <CloudShape className="animate-float absolute right-[5%] bottom-16 w-16 text-white" />
        <Sparkle className="animate-twinkle absolute top-20 right-[16%] h-4 w-4 text-pink" />
      </div>

      <div className="section-pad relative mx-auto max-w-[1240px] px-6 xl:px-10">
        <div className="flex items-end justify-between gap-10">
          <SectionHeading align="left" eyebrow={t.nutrition.eyebrow} title={t.nutrition.title} subtitle={t.nutrition.subtitle} />
          <Reveal scale={0.85} y={0} className="relative mr-4 shrink-0">
            <div className="blob-a grid h-32 w-32 place-items-center bg-white text-center shadow-card">
              <span>
                <span className="font-display block text-[46px] leading-none font-black text-blue">5</span>
                <span className="mt-0.5 block max-w-[96px] text-[12.5px] leading-tight font-extrabold text-pink-deep">
                  {t.nutrition.perDay}
                </span>
              </span>
            </div>
            <FlowerShape className="animate-float absolute -top-2 -right-2 h-8 w-8 text-pink" />
          </Reveal>
        </div>

        <div className="relative mt-9">
          {/* Байланыстырушы толқын сызық */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute top-[64px] left-0 h-[100px] w-full text-blue/25"
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

          <ol className="relative grid grid-cols-5 gap-4 xl:gap-5">
            {t.nutrition.meals.map((meal, i) => {
              const Icon = mealIcons[i];
              const s = mealStyles[i];
              return (
                <li key={meal.title} className={s.lift}>
                  <Reveal delay={0.1 * i}>
                    <div
                      className={cn(
                        "group flex h-full flex-col items-center px-4 pt-7 pb-6 text-center shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card",
                        s.card,
                      )}
                    >
                      <span className="relative">
                        <span
                          className={cn(
                            "blob-b grid h-[60px] w-[60px] place-items-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-8deg]",
                            s.icon,
                          )}
                        >
                          <Icon className="h-7 w-7" strokeWidth={1.8} />
                        </span>
                        <span className="absolute -top-2 -right-3 grid h-7 w-7 place-items-center rounded-full bg-white text-[13px] font-black text-blue shadow-soft ring-2 ring-blue-soft">
                          {i + 1}
                        </span>
                      </span>
                      <h3 className="font-display mt-4 text-[1.1rem] leading-tight font-black text-balance text-blue xl:text-[1.2rem]">
                        {meal.title}
                      </h3>
                      <p className="mt-1.5 text-[13.5px] leading-snug font-semibold text-ink-soft">{meal.text}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal className="mt-12 flex justify-center">
          <p className="inline-flex items-center gap-2.5 rounded-full bg-white/80 px-5 py-2 text-[14px] font-bold text-ink-soft">
            <Info className="h-4.5 w-4.5 text-blue" />
            {t.nutrition.note}
          </p>
        </Reveal>
      </div>
    </div>
  );
}
