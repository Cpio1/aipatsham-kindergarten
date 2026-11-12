"use client";

import { ArrowUp, Clock, MapPin, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { navIds, site } from "@/data/site";
import type { SiteImage } from "@/lib/images";
import { Logo } from "./Logo";
import { InstagramIcon, WhatsAppIcon } from "./BrandIcons";
import { SectionBackground } from "./SectionBackground";

export function Footer({ logo, year }: { logo: SiteImage | null; year: number }) {
  const { t } = useLang();

  return (
    <footer className="relative isolate">
      <SectionBackground variant="footer" />
      <div>
        <div className="mx-auto max-w-[1320px] px-4 pt-10 pb-[calc(5.5rem+env(safe-area-inset-bottom))] sm:px-6 sm:pb-8 lg:px-10 lg:pt-12 lg:pb-8">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-10">
            <div>
              <Logo logo={logo} legal={t.footer.legal} markClassName="h-11 w-11" />
              <p className="mt-3 max-w-sm text-[14.5px] font-semibold text-ink-soft">{t.footer.tagline}</p>
              <div className="mt-4 flex gap-2.5">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="card-soft grid h-11 w-11 place-items-center rounded-2xl bg-white text-[#1FA855] transition-transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="card-soft grid h-11 w-11 place-items-center rounded-2xl bg-white text-pink-deep transition-transform hover:-translate-y-0.5"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={site.phone.tel}
                  aria-label={t.contacts.call}
                  className="card-soft grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>

            <nav aria-label={t.footer.sections}>
              <p className="font-display text-[1.1rem] font-black text-blue">{t.footer.sections}</p>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                {navIds.map((id) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-[15px] font-bold text-ink-soft transition-colors hover:text-pink-deep">
                      {t.nav[id]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="sm:col-span-2 lg:col-span-1">
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

          <div className="mt-7 flex flex-col items-center justify-between gap-3 border-t border-blue/15 pt-5 sm:flex-row sm:pr-20 lg:pr-24 text-center text-[13.5px] font-bold text-ink-soft sm:text-left">
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
