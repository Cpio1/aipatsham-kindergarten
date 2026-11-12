"use client";

import { Check, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/data/site";
import type { SiteImage } from "@/lib/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhotoFrame } from "@/components/shared/PhotoFrame";
import { FlowerShape, MoonShape, Sparkle, StarShape } from "@/components/shared/Decor";
import { featureIcons, groupIcons } from "@/components/shared/icons";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const groupStyles = [
  {
    card: "bg-blue-soft rounded-[48px_48px_48px_16px]",
    icon: "bg-blue text-white blob-a",
    num: "text-blue/10",
    dot: "bg-blue",
  },
  {
    card: "bg-pink-soft rounded-[48px_16px_48px_48px] lg:translate-y-5",
    icon: "bg-pink-deep text-white blob-b",
    num: "text-pink/20",
    dot: "bg-pink-deep",
  },
  {
    card: "bg-gradient-to-br from-blue-soft via-white to-pink-soft rounded-[16px_48px_48px_48px]",
    icon: "bg-sun text-ink blob-c",
    num: "text-blue/10",
    dot: "bg-sun",
  },
];

export function DesktopAbout({ image }: { image: SiteImage | null }) {
  const { t } = useLang();

  return (
    <div className="relative hidden lg:block">
      <div className="section-pad mx-auto max-w-[1240px] px-6 xl:px-10">
        <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-10 xl:gap-14">
          {/* Фото */}
          <Reveal x={-30} y={0} className="relative mx-auto w-full max-w-[360px] xl:max-w-[420px]">
            <div aria-hidden="true" className="blob-c absolute inset-[-4%] rotate-[-8deg] bg-blue-soft" />
            <div aria-hidden="true" className="dots absolute -right-4 -bottom-4 h-20 w-20 text-pink/40" />
            <PhotoFrame
              image={image}
              alt={t.about.photoAlt}
              variant="about"
              sizes="(min-width: 1024px) 420px, 1px"
              className="relative aspect-[4/4.6] rounded-[150px_150px_40px_40px] shadow-[0_32px_60px_-30px_rgb(38_52_81/0.5)] ring-8 ring-white"
            />
            <MoonShape className="animate-float absolute -top-3 -left-3 h-10 w-10 text-sun" />
            <FlowerShape className="animate-float-slow absolute -right-4 top-[30%] h-8 w-8 text-pink" />
            <div className="absolute -bottom-5 left-[10%] flex items-center gap-2.5 rounded-[20px] bg-white px-4 py-2.5 shadow-[0_20px_40px_-18px_rgb(38_52_81/0.35)]">
              <span className="font-display text-[28px] leading-none font-black text-pink-deep">{site.groupsCount}</span>
              <span className="text-[13px] leading-tight font-bold text-ink-soft">
                {t.hero.stats[1].label}
                <br />
                {site.ages.from}–{site.ages.to} {t.hero.stats[0].label}
              </span>
            </div>
          </Reveal>

          {/* Мәтін */}
          <div>
            <SectionHeading align="left" eyebrow={t.about.eyebrow} title={t.about.title} />
            <Reveal delay={0.1}>
              <p className="mt-4 text-[16px] leading-relaxed font-semibold text-ink-soft">{t.about.lead}</p>
            </Reveal>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {t.about.features.map((f, i) => {
                const Icon = featureIcons[i];
                const pink = i % 2 === 1;
                return (
                  <Reveal
                    as="li"
                    key={f.title}
                    delay={0.08 * i}
                    className={cn(
                      "group flex gap-3.5 rounded-[22px] border border-transparent bg-white p-3.5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-blue/10",
                      i === 4 && "col-span-2",
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:rotate-[-8deg]",
                        pink ? "bg-pink-soft text-pink-deep" : "bg-blue-soft text-blue",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[15px] leading-snug font-extrabold text-ink">{f.title}</span>
                      <span className="mt-0.5 block text-[13.5px] leading-snug font-semibold text-ink-soft">{f.text}</span>
                    </span>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Топтар */}
        <div className="relative mt-16 xl:mt-20">
          <Sparkle className="animate-twinkle absolute top-2 left-[18%] h-4 w-4 text-pink" />
          <StarShape className="animate-twinkle absolute top-0 right-[20%] h-6 w-6 text-sun [animation-delay:1.2s]" />
          <Reveal className="mx-auto max-w-2xl text-center">
            <h3 className="font-display text-[1.9rem] font-black tracking-tight text-blue">{t.about.groupsTitle}</h3>
            <p className="mt-2 text-[15.5px] font-semibold text-ink-soft">{t.about.groupsIntro}</p>
          </Reveal>

          <ul className="mt-8 grid grid-cols-3 gap-5 xl:gap-6">
            {[1, 2, 3].map((n, i) => {
              const s = groupStyles[i];
              const Icon = groupIcons[i];
              return (
                <Reveal as="li" key={n} delay={0.12 * i} className={s.card}>
                  <div className="group relative h-full overflow-hidden rounded-[inherit] p-6 transition-transform xl:p-7 duration-500 hover:-translate-y-2">
                    <span
                      aria-hidden="true"
                      className={cn("font-display absolute -top-4 right-4 text-[110px] leading-none font-black", s.num)}
                    >
                      {n}
                    </span>
                    <span
                      className={cn(
                        "relative grid h-13 w-13 place-items-center shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                        s.icon,
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <h4 className="font-display relative mt-4 text-[1.45rem] font-black text-blue">{t.about.groupName(n)}</h4>
                    <ul className="relative mt-3 grid gap-2">
                      {t.about.groupPoints.map((p) => (
                        <li key={p} className="flex items-center gap-2.5 text-[14.5px] font-bold text-ink">
                          <span className={cn("grid h-5 w-5 place-items-center rounded-full text-white", s.dot)}>
                            <Check className="h-3 w-3" strokeWidth={3.5} />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </ul>

          <Reveal className="mt-12 flex items-center justify-center gap-4 text-center">
            <p className="text-[15px] font-bold text-ink-soft">{t.about.groupsNote}</p>
            <ButtonLink href={site.phone.tel} variant="white" size="sm" icon={<Phone className="h-4 w-4" />}>
              {site.phone.display}
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
