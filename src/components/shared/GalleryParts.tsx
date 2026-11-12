"use client";

import Image from "next/image";
import { ChevronDown, Expand, ImageIcon } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/data/site";
import type { SiteImage } from "@/lib/images";
import { InstagramIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const tileShapes = [
  "rounded-[36px_36px_36px_12px]",
  "rounded-[12px_36px_36px_36px]",
  "rounded-[36px]",
  "rounded-[36px_12px_36px_36px]",
  "rounded-[36px_36px_12px_36px]",
  "rounded-[56px_20px_56px_20px]",
];

export function GalleryTile({
  image,
  index,
  sizes,
  onOpen,
}: {
  image: SiteImage;
  index: number;
  sizes: string;
  onOpen: (i: number) => void;
}) {
  const { t } = useLang();
  return (
    <Reveal delay={(index % 3) * 0.06} y={24} className="mb-3 break-inside-avoid lg:mb-5">
      <button
        type="button"
        onClick={() => onOpen(index)}
        aria-label={`${t.gallery.openPhoto}: ${index + 1}`}
        className={cn(
          "group relative block w-full overflow-hidden bg-blue-soft shadow-soft ring-4 ring-white transition-all duration-500 hover:-translate-y-1 hover:shadow-card lg:ring-[6px]",
          tileShapes[index % tileShapes.length],
        )}
      >
        <Image
          src={image.src}
          alt={t.gallery.photoAlt(index + 1)}
          width={image.width}
          height={image.height}
          sizes={sizes}
          className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-blue/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute right-3 bottom-3 grid h-10 w-10 scale-75 place-items-center rounded-full bg-white text-blue opacity-0 shadow-soft transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
          <Expand className="h-5 w-5" />
        </span>
      </button>
    </Reveal>
  );
}

export function MoreButton({ expanded, onClick }: { expanded: boolean; onClick: () => void }) {
  const { t } = useLang();
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={expanded}
      className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-white px-6 text-[15px] font-extrabold text-blue shadow-soft ring-2 ring-blue/15 transition-all duration-300 hover:-translate-y-0.5 hover:ring-blue/40"
    >
      {expanded ? t.gallery.less : t.gallery.more}
      <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", expanded && "rotate-180")} />
    </button>
  );
}

/** Фото әлі жоқ кезде: таза, «сынбаған» плейсхолдер */
export function GalleryEmpty({ compact }: { compact?: boolean }) {
  const { t } = useLang();
  const tiles = compact ? 4 : 6;
  return (
    <Reveal className="relative">
      <ul aria-hidden="true" className={cn("grid gap-3", compact ? "grid-cols-2" : "grid-cols-3 gap-5")}>
        {Array.from({ length: tiles }).map((_, i) => (
          <li
            key={i}
            className={cn(
              "grid place-items-center",
              tileShapes[i % tileShapes.length],
              i % 2 ? "bg-pink-soft text-pink/50" : "bg-blue-soft text-blue/30",
              compact ? "aspect-square" : i % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3.2]",
            )}
          >
            <ImageIcon className={compact ? "h-7 w-7" : "h-10 w-10"} strokeWidth={1.5} />
          </li>
        ))}
      </ul>
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="max-w-sm rounded-[32px] bg-white/95 px-6 py-6 text-center shadow-card backdrop-blur">
          <p className="font-display text-[1.25rem] font-black text-blue lg:text-[1.45rem]">{t.gallery.emptyTitle}</p>
          <p className="mt-1.5 text-[14.5px] font-semibold text-ink-soft">{t.gallery.emptyText}</p>
          <ButtonLink
            href={site.instagram.url}
            external
            variant="pink"
            size="sm"
            className="mt-4"
            icon={<InstagramIcon className="h-4.5 w-4.5" />}
          >
            {site.instagram.handle}
          </ButtonLink>
        </div>
      </div>
    </Reveal>
  );
}
