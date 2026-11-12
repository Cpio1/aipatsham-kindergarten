"use client";

import { useEffect, useState } from "react";
import { sectionIds, type SectionId } from "@/data/site";

export function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

/** Қазір экранда тұрған секция (навигацияда белсенді пунктті көрсету үшін) */
export function useActiveSection() {
  const [active, setActive] = useState<SectionId>("home");
  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return active;
}

/** Модаль/мәзір ашық кезде бетті айналдыруды бұғаттау */
export function useLockBody(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [locked]);
}

/**
 * Секцияға жұмсақ айналдыру. Шегіністі CSS-тегі `scroll-margin-top` береді,
 * сондықтан мұнда қосымша есептеу жоқ — native #hash сілтемелерімен бірдей нәтиже.
 */
export function scrollToSection(id: SectionId) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior: ScrollBehavior = reduce ? "auto" : "smooth";
  if (id === "home") {
    window.scrollTo({ top: 0, behavior });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
  }
  const url = id === "home" ? window.location.pathname + window.location.search : `#${id}`;
  window.history.replaceState(null, "", url);
}
