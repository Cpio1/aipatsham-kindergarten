"use client";

import { ArrowUpRight, FileText, FolderOpen, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Sparkle } from "./Decor";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Құжаттар бөлімі. Құжаттар `src/data/site.ts` ішіндегі `documents` және
 * `documentsDriveUrl` арқылы қосылады. Әзірге бос болса — бейтарап хабарлама көрсетіледі.
 */
export function Documents() {
  const { t, lang } = useLang();
  const docs = site.documents;
  const drive = site.documentsDriveUrl;
  const empty = docs.length === 0 && !drive;

  return (
    <div className="section-pad mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10">
      <SectionHeading eyebrow={t.documents.eyebrow} title={t.documents.title} subtitle={t.documents.subtitle} tone="pink" />

      {empty ? (
        <Reveal className="relative mx-auto mt-7 max-w-[720px] lg:mt-8">
          <div className="card-soft relative overflow-hidden rounded-[36px_36px_36px_14px] border-2 border-dashed border-rose/20 bg-gradient-to-br from-white via-white/90 to-pink-soft px-5 py-7 text-center lg:rounded-[48px_48px_48px_18px] lg:px-10 lg:py-9">
            <Sparkle className="animate-twinkle absolute top-5 right-6 h-4 w-4 text-pink lg:h-5 lg:w-5" />
            <span className="blob-a mx-auto grid h-14 w-14 place-items-center bg-white text-blue shadow-soft lg:h-16 lg:w-16">
              <FolderOpen className="h-7 w-7 lg:h-8 lg:w-8" strokeWidth={1.8} />
            </span>
            <h3 className="font-display mt-4 text-[1.25rem] font-black text-blue lg:text-[1.5rem]">
              {t.documents.emptyTitle}
            </h3>
            <p className="mx-auto mt-2 max-w-md text-[14.5px] font-semibold text-ink-soft lg:text-[15.5px]">
              {t.documents.emptyText}
            </p>
            <ButtonLink href={site.phone.tel} variant="white" size="sm" className="mt-5" icon={<Phone className="h-4 w-4" />}>
              {site.phone.display}
            </ButtonLink>
          </div>
        </Reveal>
      ) : (
        <div className="mx-auto mt-7 max-w-[860px] lg:mt-8">
          {docs.length > 0 ? (
            <ul className="grid gap-3 sm:grid-cols-2 lg:gap-5">
              {docs.map((doc, i) => (
                <Reveal as="li" key={doc.url} delay={0.06 * i}>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 card-soft rounded-[26px] bg-white/90 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-soft text-blue">
                      <FileText className="h-6 w-6" />
                    </span>
                    <span className="min-w-0 flex-1 text-[15.5px] leading-snug font-extrabold text-ink">{doc.title[lang]}</span>
                    <span className="inline-flex items-center gap-1 text-[13.5px] font-extrabold text-pink-deep">
                      {t.documents.open}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>
          ) : null}
          {drive ? (
            <Reveal className="mt-6 flex justify-center">
              <ButtonLink href={drive} external icon={<FolderOpen className="h-5 w-5" />}>
                {t.documents.drive}
              </ButtonLink>
            </Reveal>
          ) : null}
        </div>
      )}
    </div>
  );
}
