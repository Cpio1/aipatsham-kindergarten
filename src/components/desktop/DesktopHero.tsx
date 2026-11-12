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
import { CloudShape, FlowerShape, HeroWaves, Sparkle, StarShape } from "@/components/shared/Decor";
import { statIcons } from "@/components/shared/icons";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Көп қабатты аспан градиенті: көгілдір жоғарғы-сол жақта басым,
 * қызғылт оң жақ пен төменде пайда болады; мәтін артында жұмсақ ақ жарық.
 */
const skyGradient = [
  "radial-gradient(42% 52% at 24% 48%, rgb(255 255 255 / 0.5) 0%, rgb(255 255 255 / 0) 70%)",
  "radial-gradient(42% 58% at 94% 58%, #FFC6E5 0%, rgb(255 198 229 / 0) 72%)",
  "radial-gradient(60% 45% at 68% 100%, #FFE3F2 0%, rgb(255 227 242 / 0) 75%)",
  "radial-gradient(55% 70% at 0% 0%, #A9DBFF 0%, rgb(169 219 255 / 0) 72%)",
  "linear-gradient(155deg, #A9DBFF 0%, #C5E8FF 36%, #FFE3F2 76%, #FFFFFF 100%)",
].join(", ");

const cloudShadow = "drop-shadow-[0_8px_14px_rgb(43_95_232/0.14)]";

/** Desktop фонының декоры: жарқылдар, бұлттар, жұлдызшалар, толқын сызықтар */
function DesktopHeroSky() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* Жұмсақ түрлі түсті жарқылдар */}
      <div className="animate-glow absolute -top-28 -left-28 h-[440px] w-[440px] rounded-full bg-[#A9DBFF] blur-3xl will-change-[opacity]" />
      <div className="animate-glow absolute top-[20%] -right-28 h-[400px] w-[400px] rounded-full bg-[#FFC6E5] blur-3xl will-change-[opacity] [animation-delay:-4.5s]" />
      <div className="animate-glow absolute top-[14%] left-[30%] h-44 w-44 rounded-full bg-white/70 blur-2xl will-change-[opacity] [animation-delay:-2s]" />
      <div className="absolute bottom-6 left-[18%] h-48 w-[42%] rounded-full bg-[#FFE3F2]/80 blur-3xl" />

      {/* Толқын сызықтар */}
      <svg viewBox="0 0 1000 120" preserveAspectRatio="none" fill="none" className="absolute top-[62px] right-0 left-[34%] h-[120px]">
        <path
          d="M-10 70C140 20 300 14 460 50S800 110 1010 36"
          stroke="#FFFFFF"
          strokeOpacity="0.75"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-10 104C180 64 360 70 540 92S860 118 1010 80"
          stroke="#FF5FA2"
          strokeOpacity="0.28"
          strokeWidth="2"
          strokeDasharray="2 10"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Бұлттар */}
      <CloudShape className={cn("animate-drift absolute top-[92px] left-[37%] w-24 text-white", cloudShadow)} />
      <CloudShape className={cn("animate-drift-slow absolute top-[150px] right-[3%] w-16 text-white/90", cloudShadow)} />
      <CloudShape className={cn("animate-drift-slow absolute bottom-[100px] left-[44%] w-20 text-white/95 [animation-delay:-12s]", cloudShadow)} />

      {/* Жұлдызшалар */}
      <Sparkle className="animate-twinkle absolute top-[140px] left-[3%] h-4 w-4 text-pink" />
      <StarShape className="animate-twinkle absolute top-[86px] left-[56%] h-4 w-4 text-white [animation-delay:0.8s]" />
      <Sparkle className="animate-twinkle absolute bottom-[38%] left-[48%] h-3.5 w-3.5 text-white [animation-delay:1.6s]" />
      <Sparkle className="animate-twinkle absolute top-[24%] right-[2%] h-4 w-4 text-pink [animation-delay:2.2s]" />

      {/* Нүктелер */}
      <div className="dots absolute right-[4%] bottom-[104px] h-14 w-20 text-white/80" />
    </div>
  );
}

const chipPlacement = [
  "left-[-6%] top-[10%]",
  "right-[-5%] top-[44%]",
  "left-[2%] bottom-[2%]",
];
const chipTone = ["bg-blue text-white", "bg-pink-deep text-white", "bg-sun text-ink"];

export function DesktopHero({ image }: { image: SiteImage | null }) {
  const { t } = useLang();

  return (
    <div className="relative hidden overflow-hidden lg:block" style={{ backgroundImage: skyGradient }}>
      <DesktopHeroSky />

      <div className="relative mx-auto grid max-w-[1320px] grid-cols-[1.05fr_0.95fr] items-center gap-10 px-6 pt-[100px] pb-6 xl:gap-14 xl:px-10 xl:pt-[112px] xl:pb-8">
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
              className="blob-a absolute inset-0 shadow-[0_40px_80px_-30px_rgb(43_95_232/0.55)] ring-8 ring-white"
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
      <HeroWaves className="h-[76px] xl:h-[92px]" />
    </div>
  );
}
