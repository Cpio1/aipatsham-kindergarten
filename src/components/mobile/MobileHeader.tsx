"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useActiveSection, useLockBody, useScrolled } from "@/lib/hooks";
import { sectionIds, site } from "@/data/site";
import type { SiteImage } from "@/lib/images";
import { Logo } from "@/components/shared/Logo";
import { LangSwitch } from "@/components/shared/LangSwitch";
import { WhatsAppIcon } from "@/components/shared/BrandIcons";
import { StarShape } from "@/components/shared/Decor";
import { cn } from "@/lib/cn";

const dotColors = ["bg-blue", "bg-pink", "bg-sun", "bg-blue", "bg-pink", "bg-sun", "bg-blue"];

export function MobileHeader({ logo }: { logo: SiteImage | null }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection();
  useLockBody(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 lg:hidden">
      <div
        className={cn(
          "relative z-20 transition-all duration-300",
          scrolled || open ? "bg-white/95 shadow-[0_8px_24px_-16px_rgb(38_52_81/0.4)] backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-3xl items-center gap-2 px-4 sm:px-6">
          <a href="#home" aria-label={site.brand} onClick={() => setOpen(false)} className="mr-auto min-w-0 rounded-2xl">
            <Logo logo={logo} markClassName="h-10 w-10" />
          </a>
          <LangSwitch id="mobile" className="shrink-0 [&_button]:h-7 [&_button]:px-2.5 [&_button]:text-[12px]" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.ui.closeMenu : t.ui.menu}
            className={cn(
              "grid h-11 w-11 shrink-0 place-items-center rounded-2xl transition-colors duration-300",
              open ? "bg-pink-deep text-white" : "bg-blue text-white shadow-card",
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              <m.span
                key={open ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="grid place-items-center"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </m.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <m.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-0 bg-ink/30 backdrop-blur-[2px]"
              aria-hidden="true"
            />
            <m.nav
              key="menu"
              id="mobile-menu"
              aria-label="Mobile"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-3 top-[78px] z-10 mx-auto max-h-[calc(100dvh-92px)] max-w-xl overflow-y-auto overscroll-contain rounded-[32px] bg-white p-3 shadow-[0_30px_60px_-24px_rgb(38_52_81/0.5)] sm:inset-x-6"
            >
              <StarShape className="absolute top-4 right-5 h-6 w-6 text-pink/40" />
              <ul className="grid gap-1">
                {sectionIds.map((id, i) => (
                  <m.li
                    key={id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i + 0.05 }}
                  >
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      aria-current={active === id ? "true" : undefined}
                      className={cn(
                        "flex items-center gap-3 rounded-2xl px-4 py-3 text-[17px] font-extrabold transition-colors",
                        active === id ? "bg-blue-soft text-blue" : "text-ink active:bg-pink-soft",
                      )}
                    >
                      <span className={cn("h-2.5 w-2.5 shrink-0 rounded-full", dotColors[i])} />
                      {t.nav[id]}
                    </a>
                  </m.li>
                ))}
              </ul>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#25D366] text-[15px] font-extrabold text-white"
                >
                  <WhatsAppIcon className="h-5 w-5" /> WhatsApp
                </a>
                <a
                  href={site.phone.tel}
                  className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-blue text-[15px] font-extrabold text-white"
                >
                  <Phone className="h-5 w-5" /> {t.contacts.call}
                </a>
              </div>
              <div className="mt-3 grid gap-2 rounded-2xl bg-pink-soft px-4 py-3 text-[14px] font-bold text-ink-soft">
                <span className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-pink-deep" /> {t.contacts.address}
                </span>
                <span className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-pink-deep" /> {t.contacts.days}, {site.hours.open}–
                  {site.hours.close}
                </span>
              </div>
            </m.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
