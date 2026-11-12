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
import { CloudShape, HeroWaves, Sparkle, StarShape } from "@/components/shared/Decor";
import { statIcons } from "@/components/shared/icons";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;
const statTone = ["bg-blue text-white", "bg-pink-deep text-white", "bg-sun text-ink"];

/**
 * Mobile үшін тік градиент: жоғары — көгілдір аспан, ортасынан төмен — қызғылт,
 * соңы ақ толқынға ұласады. Тақырып артында жұмсақ ақ жарық.
 */
const skyGradient = [
  "radial-gradient(85% 16% at 50% 14%, rgb(255 255 255 / 0.55) 0%, rgb(255 255 255 / 0) 72%)",
  "radial-gradient(75% 26% at 100% 50%, #FFC6E5 0%, rgb(255 198 229 / 0) 72%)",
  "radial-gradient(75% 22% at 0% 80%, #FFE3F2 0%, rgb(255 227 242 / 0) 72%)",
  "linear-gradient(180deg, #A9DBFF 0%, #C5E8FF 26%, #FFE3F2 62%, #FFD5EB 84%, #FFFFFF 100%)",
].join(", ");

/** Mobile фоны: жарқылдар аз әрі ықшам, бұлттар мен жұлдызшалар кішкентай, мәтін аймағынан тыс */
function MobileHeroSky() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="animate-glow absolute -top-12 -left-16 h-56 w-56 rounded-full bg-[#A9DBFF] blur-3xl will-change-[opacity]" />
      <div className="animate-glow absolute top-[44%] -right-20 h-60 w-60 rounded-full bg-[#FFC6E5] blur-3xl will-change-[opacity] [animation-delay:-4.5s]" />

      <CloudShape className="animate-drift absolute top-[70px] right-2 w-10 text-white drop-shadow-[0_4px_8px_rgb(43_95_232/0.14)]" />
      <CloudShape className="animate-drift-slow absolute top-[76px] left-1 w-8 text-white/85" />

      <Sparkle className="animate-twinkle absolute top-[118px] left-[5%] h-3 w-3 text-pink" />
      <StarShape className="animate-twinkle absolute top-[150px] right-[5%] h-3 w-3 text-white [animation-delay:1.2s]" />
      <Sparkle className="animate-twinkle absolute top-[52%] left-[3%] h-2.5 w-2.5 text-white [animation-delay:2s]" />
    </div>
  );
}

export function MobileHero({ image }: { image: SiteImage | null }) {
  const { t } = useLang();

  return (
    <div className="relative overflow-hidden lg:hidden" style={{ backgroundImage: skyGradient }}>
      <MobileHeroSky />

      <div className="relative mx-auto max-w-xl px-4 pt-[80px] pb-4 sm:px-6 sm:pt-[92px]">
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[12.5px] font-extrabold text-blue shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-pink-deep" />
            {t.hero.badge}
          </span>
          <HeroTitle
            className="mt-3 leading-[1.05]"
            brandClassName="text-[clamp(2.1rem,10.5vw,3rem)]"
            restClassName="text-[clamp(1.35rem,6.4vw,1.9rem)] leading-[1.2]"
          />
          <p className="mx-auto mt-3 max-w-[26rem] text-[clamp(1rem,4.3vw,1.2rem)] leading-snug font-extrabold text-balance text-pink-deep">
            {t.hero.subtitle}
          </p>
        </m.div>

        {/* Фото + статистика */}
        <m.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="relative mx-auto mt-6 max-w-[420px] px-2"
        >
          <div aria-hidden="true" className="blob-c absolute inset-x-0 top-3 bottom-8 rotate-[-4deg] bg-pink/75" />
          <PhotoFrame
            image={image}
            alt={t.hero.photoAlt}
            priority
            sizes="(max-width: 1023px) 92vw, 1px"
            className="relative aspect-[5/4] rounded-[44px_44px_44px_120px] shadow-[0_28px_50px_-26px_rgb(43_95_232/0.6)] ring-[6px] ring-white"
          />
          <StarShape className="animate-twinkle absolute -top-2 right-3 h-6 w-6 text-sun" />
          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[12.5px] font-extrabold text-ink shadow-soft">
            <Clock className="h-3.5 w-3.5 text-blue" />
            {t.hero.hoursLabel} {site.hours.open}–{site.hours.close}
          </span>

          <ul className="relative -mt-9 grid grid-cols-3 gap-2 px-1">
            {t.hero.stats.map((s, i) => {
              const Icon = statIcons[i];
              return (
                <m.li
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.1, ease }}
                  className="flex min-w-0 flex-col items-center rounded-[22px] bg-white px-1.5 pt-2.5 pb-2.5 text-center shadow-[0_16px_30px_-18px_rgb(38_52_81/0.45)]"
                >
                  <span className={cn("grid h-8 w-8 place-items-center rounded-xl", statTone[i])}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-display mt-1 text-[20px] leading-none font-black text-blue">{s.value}</span>
                  <span className="mt-1 text-[11.5px] leading-tight font-bold text-ink-soft">{s.label}</span>
                </m.li>
              );
            })}
          </ul>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
        >
          <p className="mx-auto mt-5 max-w-[28rem] text-center text-[15px] leading-relaxed font-semibold text-ink-soft">
            {t.hero.description}
          </p>
          <div className="mx-auto mt-5 grid max-w-[28rem] gap-2.5 min-[420px]:grid-cols-[1.25fr_1fr]">
            <ButtonLink
              href={site.whatsapp}
              external
              icon={<WhatsAppIcon className="h-5 w-5" />}
              className="w-full px-4"
            >
              {t.hero.ctaContact}
            </ButtonLink>
            <ButtonLink href="#about" variant="outline" icon={<ArrowDown className="h-5 w-5" />} className="w-full px-4">
              {t.hero.ctaMore}
            </ButtonLink>
          </div>
        </m.div>
      </div>
      <HeroWaves variant="mobile" className="h-[44px] sm:h-[60px]" />
    </div>
  );
}
