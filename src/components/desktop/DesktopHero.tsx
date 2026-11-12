"use client";

import { m } from "motion/react";
import { ArrowDown, Clock, Sparkles } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/data/site";
import type { SiteImage } from "@/lib/images";
import { ButtonLink } from "@/components/ui/Button";
import { HeroTitle } from "@/components/shared/HeroTitle";
import { PhotoFrame } from "@/components/shared/PhotoFrame";
import { WhatsAppIcon } from "@/components/shared/BrandIcons";
import { CloudShape, FlowerShape, Sparkle, StarShape, Wave } from "@/components/shared/Decor";
import { statIcons } from "@/components/shared/icons";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

const chipPlacement = [
  "left-[-6%] top-[10%]",
  "right-[-5%] top-[44%]",
  "left-[2%] bottom-[2%]",
];
const chipTone = ["bg-blue text-white", "bg-pink-deep text-white", "bg-sun text-ink"];

export function DesktopHero({ image }: { image: SiteImage | null }) {
  const { t } = useLang();

  return (
    <div className="relative hidden overflow-hidden bg-gradient-to-b from-blue-soft via-[#F4F8FF] to-white lg:block">
      {/* Фондық декорлар */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[380px] w-[380px] rounded-full bg-white/70 blur-3xl" />
        <div className="absolute top-24 right-[-80px] h-[320px] w-[320px] rounded-full bg-pink-soft blur-3xl" />
        <CloudShape className="animate-float-slow absolute top-[110px] left-[44%] w-20 text-white" />
        <CloudShape className="animate-float absolute bottom-[120px] left-0 w-28 text-white/90" />
        <Sparkle className="animate-twinkle absolute top-[150px] left-[4%] h-4 w-4 text-pink" />
        <div className="dots absolute bottom-20 left-[38%] h-16 w-24 text-blue/15" />
      </div>

      <div className="relative mx-auto grid max-w-[1320px] grid-cols-[1.05fr_0.95fr] items-center gap-10 px-6 pt-[100px] pb-10 xl:gap-14 xl:px-10 xl:pt-[112px] xl:pb-14">
        {/* Мәтін */}
        <div className="relative z-10">
          <m.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-extrabold text-blue shadow-soft"
          >
            <Sparkles className="h-4 w-4 text-pink-deep" />
            {t.hero.badge}
          </m.span>

          <m.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
          >
            <HeroTitle
              className="mt-4 leading-[1.02]"
              brandClassName="text-[3.3rem] xl:text-[4rem]"
              restClassName="text-[2rem] xl:text-[2.4rem] leading-[1.15]"
            />
          </m.div>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-4 max-w-[540px] text-[1.2rem] leading-snug font-extrabold text-balance text-pink-deep xl:text-[1.35rem]"
          >
            {t.hero.subtitle}
          </m.p>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease }}
            className="mt-3 max-w-[520px] text-[15.5px] leading-relaxed font-semibold text-ink-soft xl:text-[16.5px]"
          >
            {t.hero.description}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <ButtonLink href={site.whatsapp} external icon={<WhatsAppIcon className="h-5 w-5" />}>
              {t.hero.ctaContact}
            </ButtonLink>
            <ButtonLink
              href="#about"
              variant="outline"
              icon={<ArrowDown className="h-5 w-5 transition-transform group-hover/btn:translate-y-0.5" />}
            >
              {t.hero.ctaMore}
            </ButtonLink>
          </m.div>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-5 inline-flex items-center gap-2 text-[14px] font-bold text-ink-soft"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-blue shadow-soft">
              <Clock className="h-4 w-4" />
            </span>
            {t.hero.hoursLabel} · {site.hours.open}–{site.hours.close}
          </m.p>
        </div>

        {/* Фото композициясы */}
        <div className="relative mx-auto w-full max-w-[360px] xl:max-w-[440px]">
          <m.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="relative aspect-[1/1.06]"
          >
            <div aria-hidden="true" className="blob-b absolute inset-[-4%] translate-x-[5%] translate-y-[4%] rotate-6 bg-pink/80" />
            <div aria-hidden="true" className="animate-spin-slow absolute inset-[-6%] rounded-full border-[3px] border-dashed border-blue/25" />
            <PhotoFrame
              image={image}
              alt={t.hero.photoAlt}
              priority
              sizes="(min-width: 1024px) 440px, 1px"
              className="blob-a absolute inset-0 shadow-[0_40px_80px_-30px_rgb(52_103_213/0.55)] ring-8 ring-white"
            />
          </m.div>

          {/* Декорлар */}
          <StarShape className="animate-twinkle absolute -top-4 right-[14%] h-8 w-8 text-sun" />
          <FlowerShape className="animate-float absolute right-[-3%] bottom-[16%] h-9 w-9 text-blue" />
          <Sparkle className="animate-twinkle absolute bottom-[-2%] left-[38%] h-5 w-5 text-pink-deep [animation-delay:1s]" />
          <CloudShape className="animate-float-slow absolute -top-3 left-[-6%] w-16 text-white drop-shadow-sm" />

          {/* Ақпараттық чиптер */}
          {t.hero.stats.map((s, i) => {
            const Icon = statIcons[i];
            return (
              <m.div
                key={s.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.12, ease }}
                className={cn("absolute z-10", chipPlacement[i])}
              >
                <div
                  className="animate-float flex items-center gap-2.5 rounded-[20px] bg-white/95 py-2 pr-4 pl-2 shadow-[0_20px_40px_-18px_rgb(38_52_81/0.35)] backdrop-blur"
                  style={{ animationDelay: `${i * 1.3}s` }}
                >
                  <span className={cn("grid h-9 w-9 place-items-center rounded-xl", chipTone[i])}>
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="leading-tight">
                    <span className="font-display block text-[18px] font-black text-blue">{s.value}</span>
                    <span className="block text-[12px] font-bold text-ink-soft">{s.label}</span>
                  </span>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
      <Wave className="relative -mb-px text-white" />
    </div>
  );
}
