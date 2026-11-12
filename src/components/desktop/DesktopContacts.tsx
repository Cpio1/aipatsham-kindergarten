"use client";

import { ArrowUpRight, CalendarDays, Clock, MapPin, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/data/site";
import type { SiteImage } from "@/lib/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LogoMark } from "@/components/shared/Logo";
import { CloudShape, FlowerShape, Sparkle, StarShape } from "@/components/shared/Decor";
import { getContactActions } from "@/components/shared/contactActions";
import { cn } from "@/lib/cn";

export function DesktopContacts({ logo }: { logo: SiteImage | null }) {
  const { t } = useLang();
  const actions = getContactActions(t, "h-6 w-6");
  const rows = [
    { icon: MapPin, label: t.contacts.addressLabel, value: t.contacts.address },
    { icon: Phone, label: t.contacts.phoneLabel, value: site.phone.display, href: site.phone.tel },
    { icon: CalendarDays, label: t.contacts.daysLabel, value: t.contacts.days },
    { icon: Clock, label: t.contacts.hoursLabel, value: `${site.hours.open}–${site.hours.close}` },
  ];

  return (
    <div className="section-pad relative mx-auto hidden max-w-[1240px] px-6 lg:block xl:px-10">
      <SectionHeading eyebrow={t.contacts.eyebrow} title={t.contacts.title} subtitle={t.contacts.subtitle} />

      <div className="mt-9 grid grid-cols-[1.1fr_0.9fr] gap-5 xl:gap-6">
        {/* Ақпарат картасы */}
        <Reveal x={-24} y={0}>
          <div className="relative h-full overflow-hidden rounded-[52px_52px_52px_20px] bg-blue p-8 text-white shadow-card xl:p-9">
            <div aria-hidden="true" className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-pink/35" />
            <div aria-hidden="true" className="absolute -bottom-20 -left-12 h-40 w-40 rounded-full bg-white/10" />
            <CloudShape className="animate-float-slow absolute top-8 right-10 w-16 text-white/20" />
            <StarShape className="animate-twinkle absolute right-10 bottom-8 h-6 w-6 text-sun" />

            <div className="relative flex items-center gap-4">
              <LogoMark logo={logo} className="h-14 w-14 shrink-0 shadow-soft" />
              <div>
                <p className="font-display text-[1.45rem] leading-tight font-black">{t.contacts.kindergarten}</p>
                <p className="mt-1 text-[13px] font-bold text-white/70">{t.footer.legal}</p>
              </div>
            </div>

            <dl className="relative mt-7 grid grid-cols-2 gap-x-5 gap-y-5">
              {rows.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-3.5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/15 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[12px] font-extrabold tracking-wide text-white/65 uppercase">{label}</dt>
                    <dd className="mt-0.5 text-[15.5px] leading-snug font-extrabold break-words">
                      {href ? (
                        <a href={href} className="underline-offset-4 hover:underline">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* Батырмалар */}
        <div className="relative grid grid-cols-2 gap-4">
          <FlowerShape className="animate-float absolute -top-3 -right-2 z-10 h-8 w-8 text-pink" />
          <Sparkle className="animate-twinkle absolute -bottom-2 left-[46%] z-10 h-4 w-4 text-blue" />
          {actions.map((a, i) => (
            <Reveal key={a.key} delay={0.08 * i} scale={0.94} y={16}>
              <a
                href={a.href}
                {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={cn(
                  "group relative flex h-full min-h-[150px] flex-col justify-between gap-3 card-soft overflow-hidden p-5 transition-all duration-500 hover:-translate-y-1.5",
                  i % 2 === 0 ? "rounded-[36px_36px_36px_14px]" : "rounded-[36px_14px_36px_36px]",
                  i === 0 || i === 3 ? "bg-gradient-to-br from-white to-pink-soft" : "bg-gradient-to-br from-white to-blue-soft",
                )}
              >
                <span className="flex items-start justify-between">
                  <span
                    className={cn(
                      "blob-b grid h-13 w-13 place-items-center shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                      a.tone,
                    )}
                  >
                    {a.icon}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-blue/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue" />
                </span>
                <span>
                  <span className="font-display block text-[1.2rem] leading-tight font-black text-blue">{a.label}</span>
                  <span className="mt-0.5 block text-[13px] font-bold break-words text-ink-soft">{a.hint}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
