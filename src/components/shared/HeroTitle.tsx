"use client";

import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/cn";

/** «Ай Патшам» балабақшасы / Детский сад «Ай Патшам» — тіл бойынша дұрыс сөз тәртібі */
export function HeroTitle({ className, brandClassName, restClassName }: { className?: string; brandClassName?: string; restClassName?: string }) {
  const { t } = useLang();
  return (
    <h1 className={cn("font-display font-black tracking-tight", className)}>
      {t.hero.titleBefore ? <span className={cn("block text-ink", restClassName)}>{t.hero.titleBefore}</span> : null}
      <span className={cn("relative inline-block whitespace-nowrap text-blue", brandClassName)}>
        «Ай <span className="text-pink-deep">Патшам</span>»
        <svg
          viewBox="0 0 300 20"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute -bottom-[0.12em] left-[4%] h-[0.22em] w-[92%] text-pink/70"
        >
          <path d="M3 14C60 4 150 2 297 10" stroke="currentColor" strokeWidth="7" strokeLinecap="round" fill="none" />
        </svg>
      </span>
      {t.hero.titleAfter ? <span className={cn("block text-ink", restClassName)}>{t.hero.titleAfter}</span> : null}
    </h1>
  );
}
