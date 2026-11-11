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
  "left-[-4%] xl:left-[-6%] top-[12%]",
  "right-[-3%] xl:right-[-7%] top-[44%]",
  "left-[2%] bottom-[2%]",
];
const chipTone = ["bg-blue text-white", "bg-pink-deep text-white", "bg-sun text-ink"];

export function DesktopHero({ image }: { image: SiteImage | null }) {
  const { t } = useLang();

  return (
    <div className="relative hidden overflow-hidden bg-gradient-to-b from-blue-soft via-[#F4F8FF] to-white lg:block">
      {/* Фондық декорлар */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-white/70 blur-3xl" />
        <div className="absolute top-24 right-[-120px] h-[420px] w-[420px] rounded-full bg-pink-soft blur-3xl" />
        <CloudShape className="animate-float-slow absolute top-[120px] left-[44%] w-28 text-white" />
        <CloudShape className="animate-float absolute bottom-[140px] left-[-30px] w-40 text-white/90" />
        <Sparkle className="animate-twinkle absolute top-[170px] left-[6%] h-6 w-6 text-pink" />
        <div className="dots absolute bottom-24 left-[38%] h-24 w-32 text-blue/15" />
      </div>

      <div className="relative mx-auto grid max-w-[1320px] grid-cols-[1.05fr_0.95fr] items-center gap-10 px-6 pt-[124px] pb-20 xl:gap-16 xl:px-10 xl:pt-[140px] xl:pb-28">
        {/* Мәтін */}
        <div className="relative z-10">
          <m.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[14px] font-extrabold text-blue shadow-soft"
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
              className="mt-6 leading-[1.02]"
              brandClassName="text-[4.1rem] xl:text-[5.1rem]"
              restClassName="text-[2.5rem] xl:text-[3rem] leading-[1.15]"
            />
          </m.div>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-6 max-w-[560px] text-[1.45rem] leading-snug font-extrabold text-balance text-pink-deep xl:text-[1.6rem]"
          >
            {t.hero.subtitle}
          </m.p>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease }}
            className="mt-4 max-w-[520px] text-[17px] leading-relaxed font-semibold text-ink-soft xl:text-[18px]"
          >
            {t.hero.description}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <ButtonLink href={site.whatsapp} external size="lg" icon={<WhatsAppIcon className="h-5 w-5" />}>
              {t.hero.ctaContact}
            </ButtonLink>
            <ButtonLink
              href="#about"
              variant="outline"
              size="lg"
              icon={<ArrowDown className="h-5 w-5 transition-transform group-hover/btn:translate-y-0.5" />}
            >
              {t.hero.ctaMore}
            </ButtonLink>
          </m.div>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-7 inline-flex items-center gap-2 text-[15px] font-bold text-ink-soft"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-blue shadow-soft">
              <Clock className="h-4 w-4" />
            </span>
            {t.hero.hoursLabel} · {site.hours.open}–{site.hours.close}
          </m.p>
        </div>

        {/* Фото композициясы */}
        <div className="relative mx-auto w-full max-w-[440px] xl:max-w-[540px]">
          <m.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="relative aspect-[1/1.06]"
          >
            <div aria-hidden="true" className="blob-b absolute inset-[-4%] translate-x-[5%] translate-y-[4%] rotate-6 bg-pink/80" />
            <div aria-hidden="true" className="animate-spin-slow absolute inset-[-9%] rounded-full border-[3px] border-dashed border-blue/25" />
            <PhotoFrame
              image={image}
              alt={t.hero.photoAlt}
              priority
              sizes="(min-width: 1024px) 540px, 1px"
              className="blob-a absolute inset-0 shadow-[0_40px_80px_-30px_rgb(52_103_213/0.55)] ring-[10px] ring-white"
            />
          </m.div>

          {/* Декорлар */}
          <StarShape className="animate-twinkle absolute -top-6 right-[14%] h-12 w-12 text-sun" />
          <FlowerShape className="animate-float absolute right-[-4%] bottom-[16%] h-14 w-14 text-blue" />
          <Sparkle className="animate-twinkle absolute bottom-[-2%] left-[38%] h-7 w-7 text-pink-deep [animation-delay:1s]" />
          <CloudShape className="animate-float-slow absolute -top-4 left-[-10%] w-24 text-white drop-shadow-sm" />

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
                  className="animate-float flex items-center gap-3 rounded-[22px] bg-white/95 py-2.5 pr-5 pl-2.5 shadow-[0_20px_40px_-18px_rgb(38_52_81/0.35)] backdrop-blur"
                  style={{ animationDelay: `${i * 1.3}s` }}
                >
                  <span className={cn("grid h-11 w-11 place-items-center rounded-2xl", chipTone[i])}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="leading-tight">
                    <span className="font-display block text-[22px] font-black text-blue">{s.value}</span>
                    <span className="block text-[13px] font-bold text-ink-soft">{s.label}</span>
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
