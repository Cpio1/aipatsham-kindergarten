"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import type { SiteImage } from "@/lib/images";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Lightbox } from "@/components/shared/Lightbox";
import { GalleryEmpty, GalleryTile, MoreButton } from "@/components/shared/GalleryParts";
import { FlowerShape, StarShape } from "@/components/shared/Decor";

const INITIAL = 6;

export function DesktopGallery({ images }: { images: SiteImage[] }) {
  const { t } = useLang();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const visible = expanded ? images : images.slice(0, INITIAL);

  return (
    <div className="relative mx-auto hidden max-w-[1320px] px-6 py-24 lg:block xl:px-10 xl:py-28">
      <FlowerShape className="animate-float absolute top-24 right-[10%] h-12 w-12 text-blue/80" />
      <StarShape className="animate-twinkle absolute top-32 left-[9%] h-8 w-8 text-pink" />

      <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} subtitle={t.gallery.subtitle} />

      <div className="mt-14">
        {images.length === 0 ? (
          <GalleryEmpty />
        ) : (
          <>
            <div className="columns-3 gap-6">
              {visible.map((img, i) => (
                <GalleryTile key={img.src} image={img} index={i} sizes="(min-width: 1024px) 420px, 1px" onOpen={setOpen} />
              ))}
            </div>
            {images.length > INITIAL ? (
              <div className="mt-8 flex justify-center">
                <MoreButton expanded={expanded} onClick={() => setExpanded((v) => !v)} />
              </div>
            ) : null}
          </>
        )}
      </div>
      <Lightbox images={images} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
    </div>
  );
}
