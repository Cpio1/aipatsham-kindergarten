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
    card: "bg-pink-soft rounded-[48px_16px_48px_48px] lg:translate-y-8",
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
      <div className="mx-auto max-w-[1320px] px-6 py-24 xl:px-10 xl:py-28">
        <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-14 xl:gap-20">
          {/* Фото */}
          <Reveal x={-30} y={0} className="relative mx-auto w-full max-w-[500px]">
            <div aria-hidden="true" className="blob-c absolute inset-[-4%] rotate-[-8deg] bg-blue-soft" />
            <div aria-hidden="true" className="dots absolute -right-6 -bottom-6 h-28 w-28 text-pink/40" />
            <PhotoFrame
              image={image}
              alt={t.about.photoAlt}
              variant="about"
              sizes="(min-width: 1024px) 500px, 1px"
              className="relative aspect-[4/4.6] rounded-[180px_180px_48px_48px] shadow-[0_40px_70px_-34px_rgb(38_52_81/0.5)] ring-[10px] ring-white"
            />
            <MoonShape className="animate-float absolute -top-4 -left-4 h-16 w-16 text-sun" />
            <FlowerShape className="animate-float-slow absolute -right-6 top-[30%] h-12 w-12 text-pink" />
            <div className="absolute -bottom-7 left-[12%] flex items-center gap-3 rounded-[24px] bg-white px-5 py-3.5 shadow-[0_20px_40px_-18px_rgb(38_52_81/0.35)]">
              <span className="font-display text-[34px] leading-none font-black text-pink-deep">{site.groupsCount}</span>
              <span className="text-[14px] leading-tight font-bold text-ink-soft">
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
              <p className="mt-6 text-[17.5px] leading-relaxed font-semibold text-ink-soft">{t.about.lead}</p>
            </Reveal>
            <ul className="mt-8 grid grid-cols-2 gap-3.5">
              {t.about.features.map((f, i) => {
                const Icon = featureIcons[i];
                const pink = i % 2 === 1;
                return (
                  <Reveal
                    as="li"
                    key={f.title}
                    delay={0.08 * i}
                    className={cn(
                      "group flex gap-3.5 rounded-[26px] border border-transparent bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-blue/10",
                      i === 4 && "col-span-2",
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-transform duration-300 group-hover:rotate-[-8deg]",
                        pink ? "bg-pink-soft text-pink-deep" : "bg-blue-soft text-blue",
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-[16px] leading-snug font-extrabold text-ink">{f.title}</span>
                      <span className="mt-1 block text-[14.5px] leading-snug font-semibold text-ink-soft">{f.text}</span>
                    </span>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Топтар */}
        <div className="relative mt-28">
          <Sparkle className="animate-twinkle absolute top-2 left-[18%] h-6 w-6 text-pink" />
          <StarShape className="animate-twinkle absolute top-0 right-[20%] h-8 w-8 text-sun [animation-delay:1.2s]" />
          <Reveal className="mx-auto max-w-2xl text-center">
            <h3 className="font-display text-[2.2rem] font-black tracking-tight text-blue">{t.about.groupsTitle}</h3>
            <p className="mt-3 text-[17px] font-semibold text-ink-soft">{t.about.groupsIntro}</p>
          </Reveal>

          <ul className="mt-12 grid grid-cols-3 gap-7">
            {[1, 2, 3].map((n, i) => {
              const s = groupStyles[i];
              const Icon = groupIcons[i];
              return (
                <Reveal as="li" key={n} delay={0.12 * i} className={s.card}>
                  <div className="group relative h-full overflow-hidden rounded-[inherit] p-8 transition-transform duration-500 hover:-translate-y-2">
                    <span
                      aria-hidden="true"
                      className={cn("font-display absolute -top-6 right-4 text-[150px] leading-none font-black", s.num)}
                    >
                      {n}
                    </span>
                    <span
                      className={cn(
                        "relative grid h-16 w-16 place-items-center shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                        s.icon,
                      )}
                    >
                      <Icon className="h-8 w-8" />
                    </span>
                    <h4 className="font-display relative mt-6 text-[1.75rem] font-black text-blue">{t.about.groupName(n)}</h4>
                    <ul className="relative mt-4 grid gap-2.5">
                      {t.about.groupPoints.map((p) => (
                        <li key={p} className="flex items-center gap-2.5 text-[15.5px] font-bold text-ink">
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

          <Reveal className="mt-16 flex items-center justify-center gap-4 text-center">
            <p className="text-[16px] font-bold text-ink-soft">{t.about.groupsNote}</p>
            <ButtonLink href={site.phone.tel} variant="white" size="sm" icon={<Phone className="h-4 w-4" />}>
              {site.phone.display}
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
