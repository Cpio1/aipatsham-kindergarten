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
  const actions = getContactActions(t, "h-7 w-7");
  const rows = [
    { icon: MapPin, label: t.contacts.addressLabel, value: t.contacts.address },
    { icon: Phone, label: t.contacts.phoneLabel, value: site.phone.display, href: site.phone.tel },
    { icon: CalendarDays, label: t.contacts.daysLabel, value: t.contacts.days },
    { icon: Clock, label: t.contacts.hoursLabel, value: `${site.hours.open}–${site.hours.close}` },
  ];

  return (
    <div className="relative mx-auto hidden max-w-[1320px] px-6 py-24 lg:block xl:px-10 xl:py-28">
      <SectionHeading eyebrow={t.contacts.eyebrow} title={t.contacts.title} subtitle={t.contacts.subtitle} />

      <div className="mt-14 grid grid-cols-[1.1fr_0.9fr] gap-7">
        {/* Ақпарат картасы */}
        <Reveal x={-24} y={0}>
          <div className="relative h-full overflow-hidden rounded-[64px_64px_64px_24px] bg-blue p-10 text-white shadow-card xl:p-12">
            <div aria-hidden="true" className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-pink/35" />
            <div aria-hidden="true" className="absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-white/10" />
            <CloudShape className="animate-float-slow absolute top-10 right-12 w-24 text-white/20" />
            <StarShape className="animate-twinkle absolute right-16 bottom-12 h-9 w-9 text-sun" />

            <div className="relative flex items-center gap-4">
              <LogoMark logo={logo} className="h-16 w-16 shrink-0 shadow-soft" />
              <div>
                <p className="font-display text-[1.75rem] leading-tight font-black">{t.contacts.kindergarten}</p>
                <p className="mt-1 text-[14px] font-bold text-white/70">{t.footer.legal}</p>
              </div>
            </div>

            <dl className="relative mt-10 grid grid-cols-2 gap-x-6 gap-y-7">
              {rows.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-3.5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/15 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[13px] font-extrabold tracking-wide text-white/65 uppercase">{label}</dt>
                    <dd className="mt-1 text-[17px] leading-snug font-extrabold">
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
        <div className="relative grid grid-cols-2 gap-5">
          <FlowerShape className="animate-float absolute -top-5 -right-4 z-10 h-12 w-12 text-pink" />
          <Sparkle className="animate-twinkle absolute -bottom-3 left-[45%] z-10 h-6 w-6 text-blue" />
          {actions.map((a, i) => (
            <Reveal key={a.key} delay={0.08 * i} scale={0.94} y={16}>
              <a
                href={a.href}
                {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={cn(
                  "group relative flex h-full min-h-[180px] flex-col justify-between overflow-hidden p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card",
                  i % 2 === 0 ? "rounded-[44px_44px_44px_16px]" : "rounded-[44px_16px_44px_44px]",
                  i === 0 || i === 3 ? "bg-pink-soft" : "bg-blue-soft",
                )}
              >
                <span className="flex items-start justify-between">
                  <span
                    className={cn(
                      "blob-b grid h-16 w-16 place-items-center shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                      a.tone,
                    )}
                  >
                    {a.icon}
                  </span>
                  <ArrowUpRight className="h-6 w-6 text-blue/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue" />
                </span>
                <span>
                  <span className="font-display block text-[1.35rem] leading-tight font-black text-blue">{a.label}</span>
                  <span className="mt-1 block text-[14px] font-bold text-ink-soft">{a.hint}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
