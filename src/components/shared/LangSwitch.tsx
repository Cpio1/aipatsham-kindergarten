"use client";

import { m } from "motion/react";
import { useLang } from "@/lib/i18n";
import type { Lang } from "@/data/content";
import { cn } from "@/lib/cn";

const options: { value: Lang; label: string }[] = [
  { value: "kk", label: "ҚАЗ" },
  { value: "ru", label: "РУС" },
];

export function LangSwitch({ id, className }: { id: string; className?: string }) {
  const { lang, setLang, t } = useLang();
  return (
    <div
      role="group"
      aria-label={t.ui.switchLang}
      className={cn("relative flex rounded-full bg-blue-soft p-1 ring-1 ring-blue/10", className)}
    >
      {options.map((o) => {
        const active = lang === o.value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => setLang(o.value)}
            aria-pressed={active}
            lang={o.value}
            className={cn(
              "relative z-10 h-8 rounded-full px-3 text-[13px] font-black tracking-wide transition-colors",
              active ? "text-white" : "text-blue/70 hover:text-blue",
            )}
          >
            {active ? (
              <m.span
                layoutId={`lang-pill-${id}`}
                className="absolute inset-0 -z-10 rounded-full bg-blue shadow-[0_6px_14px_-6px_rgb(52_103_213/0.8)]"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            ) : null}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
