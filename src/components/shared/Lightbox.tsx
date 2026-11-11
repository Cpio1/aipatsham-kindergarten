"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useLockBody } from "@/lib/hooks";
import type { SiteImage } from "@/lib/images";

type Props = {
  images: SiteImage[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onChange }: Props) {
  const { t } = useLang();
  const open = index !== null;
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  useLockBody(open);

  const total = images.length;
  const prev = () => index !== null && onChange((index - 1 + total) % total);
  const next = () => index !== null && onChange((index + 1) % total);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => previous?.focus?.();
  }, [open]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onChange((index - 1 + total) % total);
      if (e.key === "ArrowRight") onChange((index + 1) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, total, onClose, onChange]);

  const img = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {img && index !== null ? (
        <m.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t.gallery.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] flex flex-col bg-[#14203A]/92 backdrop-blur-md"
          onClick={onClose}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
          }}
        >
          <div className="flex shrink-0 items-center justify-between px-4 pt-4 sm:px-6" onClick={(e) => e.stopPropagation()}>
            <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-[14px] font-extrabold text-white">
              {index + 1} / {total}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label={t.gallery.close}
              className="grid h-11 w-11 place-items-center rounded-full bg-white text-blue shadow-soft transition-transform hover:scale-105 hover:rotate-90"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 py-4 sm:px-20">
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="relative h-full w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={img.src}
                  alt={t.gallery.photoAlt(index + 1)}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </m.div>
            </AnimatePresence>

            {total > 1 ? (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label={t.gallery.prev}
                  className="absolute bottom-2 left-4 grid h-12 w-12 place-items-center rounded-full bg-white/95 text-blue shadow-soft transition-transform hover:scale-105 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label={t.gallery.next}
                  className="absolute right-4 bottom-2 grid h-12 w-12 place-items-center rounded-full bg-pink-deep text-white shadow-soft transition-transform hover:scale-105 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            ) : null}
          </div>
          <div className="h-16 shrink-0 sm:h-6" />
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
