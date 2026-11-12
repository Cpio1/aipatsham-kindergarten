"use client";

import { CalendarDays, Clock, MapPin, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/data/site";
import type { SiteImage } from "@/lib/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LogoMark } from "@/components/shared/Logo";
import { StarShape } from "@/components/shared/Decor";
import { getContactActions } from "@/components/shared/contactActions";
import { cn } from "@/lib/cn";

export function MobileContacts({ logo }: { logo: SiteImage | null }) {
  const { t } = useLang();
  const actions = getContactActions(t, "h-6 w-6");
  const rows = [
    { icon: MapPin, label: t.contacts.addressLabel, value: t.contacts.address },
    { icon: Phone, label: t.contacts.phoneLabel, value: site.phone.display, href: site.phone.tel },
    { icon: CalendarDays, label: t.contacts.daysLabel, value: t.contacts.days },
    { icon: Clock, label: t.contacts.hoursLabel, value: `${site.hours.open}–${site.hours.close}` },
  ];

  return (
    <div className="section-pad mx-auto max-w-xl px-4 sm:px-6 lg:hidden">
      <SectionHeading eyebrow={t.contacts.eyebrow} title={t.contacts.title} subtitle={t.contacts.subtitle} />

      <Reveal className="mt-6">
        <div className="relative overflow-hidden rounded-[32px_32px_32px_14px] bg-blue p-4 text-white shadow-card sm:p-6">
          <div aria-hidden="true" className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-pink/35" />
          <StarShape className="animate-twinkle absolute top-4 right-4 h-5 w-5 text-sun" />
          <div className="relative flex items-center gap-3 pr-8">
            <LogoMark logo={logo} className="h-11 w-11 shrink-0" />
            <div className="min-w-0">
              <p className="font-display text-[1.1rem] leading-tight font-black">{t.contacts.kindergarten}</p>
              <p className="text-[12.5px] font-bold text-white/70">{t.footer.legal}</p>
            </div>
          </div>
          <dl className="relative mt-4 grid gap-2">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl bg-white/10 px-3 py-2">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <dt className="text-[11.5px] font-extrabold tracking-wide text-white/65 uppercase">{label}</dt>
                  <dd className="text-[15px] leading-snug font-extrabold break-words">
                    {href ? <a href={href}>{value}</a> : value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      <ul className="mt-3 grid grid-cols-2 gap-3">
        {actions.map((a, i) => (
          <Reveal as="li" key={a.key} delay={0.05 * i} y={16}>
            <a
              href={a.href}
              {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={cn(
                "flex h-full min-h-[108px] flex-col items-start card-soft justify-between gap-2.5 p-4 transition-transform active:scale-[0.97]",
                i % 2 === 0 ? "rounded-[28px_28px_28px_12px]" : "rounded-[28px_12px_28px_28px]",
                i === 0 || i === 3 ? "bg-gradient-to-br from-white to-pink-soft" : "bg-gradient-to-br from-white to-blue-soft",
              )}
            >
              <span className={cn("blob-b grid h-11 w-11 place-items-center", a.tone)}>{a.icon}</span>
              <span className="min-w-0">
                <span className="font-display block text-[1rem] leading-tight font-black text-blue">{a.label}</span>
                <span className="mt-0.5 block text-[12px] leading-snug font-bold break-words text-ink-soft">{a.hint}</span>
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
