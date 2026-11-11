"use client";

import { Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/data/site";
import type { SiteImage } from "@/lib/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhotoFrame } from "@/components/shared/PhotoFrame";
import { FlowerShape, MoonShape } from "@/components/shared/Decor";
import { featureIcons, groupIcons } from "@/components/shared/icons";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const groupTone = [
  { card: "bg-blue-soft rounded-[32px_32px_32px_12px]", icon: "bg-blue text-white", num: "text-blue/15" },
  { card: "bg-pink-soft rounded-[32px_12px_32px_32px]", icon: "bg-pink-deep text-white", num: "text-pink/25" },
  {
    card: "bg-gradient-to-r from-blue-soft to-pink-soft rounded-[12px_32px_32px_32px]",
    icon: "bg-sun text-ink",
    num: "text-blue/15",
  },
];

export function MobileAbout({ image }: { image: SiteImage | null }) {
  const { t } = useLang();

  return (
    <div className="mx-auto max-w-xl px-4 py-14 sm:px-6 lg:hidden">
      <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

      <Reveal className="relative mx-auto mt-9 max-w-[420px]">
        <div aria-hidden="true" className="blob-a absolute inset-x-1 inset-y-[-4%] rotate-[6deg] bg-blue-soft" />
        <PhotoFrame
          image={image}
          alt={t.about.photoAlt}
          variant="about"
          sizes="(max-width: 1023px) 90vw, 1px"
          className="relative aspect-[4/3.4] rounded-[120px_120px_36px_36px] shadow-[0_24px_50px_-28px_rgb(38_52_81/0.5)] ring-[6px] ring-white"
        />
        <MoonShape className="animate-float absolute -top-3 -left-1 h-11 w-11 text-sun" />
        <FlowerShape className="animate-float-slow absolute -right-2 bottom-6 h-10 w-10 text-pink" />
      </Reveal>

      <Reveal>
        <p className="mt-8 text-[16px] leading-relaxed font-semibold text-ink-soft">{t.about.lead}</p>
      </Reveal>

      <ul className="mt-6 grid gap-2.5">
        {t.about.features.map((f, i) => {
          const Icon = featureIcons[i];
          const pink = i % 2 === 1;
          return (
            <Reveal as="li" key={f.title} delay={0.04 * i} y={18}>
              <div className="flex gap-3 rounded-[22px] bg-white p-3.5 shadow-soft ring-1 ring-blue/5">
                <span
                  className={cn(
                    "grid h-11 w-11 shrink-0 place-items-center rounded-2xl",
                    pink ? "bg-pink-soft text-pink-deep" : "bg-blue-soft text-blue",
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[15.5px] leading-snug font-extrabold text-ink">{f.title}</span>
                  <span className="mt-0.5 block text-[14px] leading-snug font-semibold text-ink-soft">{f.text}</span>
                </span>
              </div>
            </Reveal>
          );
        })}
      </ul>

      {/* Топтар */}
      <Reveal className="mt-14 text-center">
        <h3 className="font-display text-[1.65rem] font-black tracking-tight text-blue">{t.about.groupsTitle}</h3>
        <p className="mt-2 text-[15px] font-semibold text-ink-soft">{t.about.groupsIntro}</p>
      </Reveal>

      <ul className="mt-6 grid gap-3">
        {[1, 2, 3].map((n, i) => {
          const tone = groupTone[i];
          const Icon = groupIcons[i];
          return (
            <Reveal as="li" key={n} delay={0.06 * i} className={cn("relative overflow-hidden p-5", tone.card)}>
              <span
                aria-hidden="true"
                className={cn("font-display absolute -top-3 right-3 text-[96px] leading-none font-black", tone.num)}
              >
                {n}
              </span>
              <div className="relative flex items-center gap-3.5">
                <span className={cn("blob-b grid h-12 w-12 shrink-0 place-items-center", tone.icon)}>
                  <Icon className="h-6 w-6" />
                </span>
                <h4 className="font-display text-[1.4rem] font-black text-blue">{t.about.groupName(n)}</h4>
              </div>
              <ul className="relative mt-3.5 flex flex-wrap gap-1.5">
                {t.about.groupPoints.map((p) => (
                  <li key={p} className="rounded-full bg-white/85 px-3 py-1 text-[12.5px] font-bold text-ink">
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </ul>

      <Reveal className="mt-6 rounded-[24px] border-2 border-dashed border-blue/20 p-4 text-center">
        <p className="text-[14.5px] font-bold text-ink-soft">{t.about.groupsNote}</p>
        <ButtonLink href={site.phone.tel} size="sm" className="mt-3" icon={<Phone className="h-4 w-4" />}>
          {site.phone.display}
        </ButtonLink>
      </Reveal>
    </div>
  );
}
