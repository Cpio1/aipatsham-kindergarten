"use client";

import { ArrowUp, Clock, MapPin, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { sectionIds, site } from "@/data/site";
import type { SiteImage } from "@/lib/images";
import { Logo } from "./Logo";
import { InstagramIcon, WhatsAppIcon } from "./BrandIcons";
import { Wave } from "./Decor";

export function Footer({ logo, year }: { logo: SiteImage | null; year: number }) {
  const { t } = useLang();

  return (
    <footer className="relative bg-white">
      <Wave className="text-blue-soft" />
      <div className="bg-blue-soft">
        <div className="mx-auto max-w-[1320px] px-4 pt-6 pb-8 sm:px-6 lg:px-10 lg:pt-10 lg:pb-10">
          <div className="grid gap-9 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-12">
            <div>
              <Logo logo={logo} legal={t.footer.legal} markClassName="h-12 w-12" />
              <p className="mt-4 max-w-sm text-[15px] font-semibold text-ink-soft">{t.footer.tagline}</p>
              <div className="mt-5 flex gap-2.5">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-[#1FA855] shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-pink-deep shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={site.phone.tel}
                  aria-label={t.contacts.call}
                  className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>

            <nav aria-label={t.footer.sections}>
              <p className="font-display text-[1.1rem] font-black text-blue">{t.footer.sections}</p>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 lg:grid-cols-1">
                {sectionIds.map((id) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-[15px] font-bold text-ink-soft transition-colors hover:text-pink-deep">
                      {t.nav[id]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="font-display text-[1.1rem] font-black text-blue">{t.footer.contacts}</p>
              <ul className="mt-3 grid gap-2.5 text-[15px] font-bold text-ink-soft">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-pink-deep" />
                  {t.contacts.address}
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-pink-deep" />
                  <a href={site.phone.tel} className="hover:text-blue">
                    {site.phone.display}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4.5 w-4.5 shrink-0 text-pink-deep" />
                  {t.contacts.days}, {site.hours.open}–{site.hours.close}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-9 flex flex-col items-center justify-between gap-3 border-t border-blue/10 pt-6 text-center text-[13.5px] font-bold text-ink-soft sm:flex-row sm:text-left">
            <p>
              © {year} {t.footer.legal}. {t.footer.rights}
            </p>
            <a href="#home" className="inline-flex items-center gap-1.5 text-blue hover:text-pink-deep">
              <ArrowUp className="h-4 w-4" />
              {t.ui.backToTop}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
