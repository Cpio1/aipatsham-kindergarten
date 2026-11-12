"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import type { SiteImage } from "@/lib/images";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Lightbox } from "@/components/shared/Lightbox";
import { GalleryEmpty, GalleryTile, MoreButton } from "@/components/shared/GalleryParts";

const INITIAL = 4;

export function MobileGallery({ images }: { images: SiteImage[] }) {
  const { t } = useLang();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const visible = expanded ? images : images.slice(0, INITIAL);

  return (
    <div className="section-pad mx-auto max-w-xl px-4 sm:px-6 lg:hidden">
      <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} subtitle={t.gallery.subtitle} />
      <div className="mt-6">
        {images.length === 0 ? (
          <GalleryEmpty compact />
        ) : (
          <>
            <div className="columns-2 gap-3">
              {visible.map((img, i) => (
                <GalleryTile key={img.src} image={img} index={i} sizes="(max-width: 1023px) 48vw, 1px" onOpen={setOpen} />
              ))}
            </div>
            {images.length > INITIAL ? (
              <div className="mt-5 flex justify-center">
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
