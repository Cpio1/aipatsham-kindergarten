"use client";

import { useLang } from "@/lib/i18n";
import { useActiveSection, useScrolled } from "@/lib/hooks";
import { sectionIds, site } from "@/data/site";
import type { SiteImage } from "@/lib/images";
import { Logo } from "@/components/shared/Logo";
import { LangSwitch } from "@/components/shared/LangSwitch";
import { WhatsAppIcon } from "@/components/shared/BrandIcons";
import { cn } from "@/lib/cn";

export function DesktopHeader({ logo }: { logo: SiteImage | null }) {
  const { t } = useLang();
  const scrolled = useScrolled();
  const active = useActiveSection();

  return (
    <header className="fixed inset-x-0 top-0 z-50 hidden lg:block">
      <div
        className={cn(
          "transition-all duration-500",
          scrolled ? "bg-white/85 shadow-[0_8px_30px_-18px_rgb(38_52_81/0.35)] backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[84px] max-w-[1320px] items-center gap-3 px-5 xl:gap-4 xl:px-10">
          <a href="#home" aria-label={site.brand} className="shrink-0 rounded-2xl">
            <Logo logo={logo} markClassName="h-10 w-10 xl:h-11 xl:w-11" />
          </a>

          <nav aria-label="Main" className="mx-auto">
            <ul className="flex items-center gap-0.5 rounded-full bg-white/70 p-1 ring-1 ring-blue/10 backdrop-blur xl:gap-1 xl:p-1.5">
              {sectionIds.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={active === id ? "true" : undefined}
                    className={cn(
                      "relative block rounded-full px-2 py-2 text-[13.5px] font-extrabold whitespace-nowrap transition-colors duration-300 xl:px-3.5 xl:text-[15px]",
                      active === id ? "bg-blue-soft text-blue" : "text-ink/75 hover:bg-pink-soft hover:text-pink-deep",
                    )}
                  >
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <LangSwitch id="desktop" />
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-blue px-3 text-[15px] font-extrabold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-deep xl:px-5"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span className="hidden xl:inline">{t.ui.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
