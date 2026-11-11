"use client";

import { AnimatePresence, m } from "motion/react";
import { site } from "@/data/site";
import { useScrolled } from "@/lib/hooks";
import { WhatsAppIcon } from "./BrandIcons";

/** Скролл кезінде пайда болатын WhatsApp батырмасы */
export function FloatingWhatsApp() {
  const visible = useScrolled(640);
  return (
    <AnimatePresence>
      {visible ? (
        <m.a
          key="wa"
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 360, damping: 24 }}
          className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_16px_34px_-12px_rgb(37_211_102/0.8)] ring-4 ring-white transition-transform hover:scale-105 lg:right-8 lg:bottom-8 lg:h-16 lg:w-16"
        >
          <WhatsAppIcon className="h-7 w-7 lg:h-8 lg:w-8" />
        </m.a>
      ) : null}
    </AnimatePresence>
  );
}
