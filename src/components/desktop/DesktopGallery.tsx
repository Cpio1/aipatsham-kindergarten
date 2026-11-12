"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import type { SiteImage } from "@/lib/images";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Lightbox } from "@/components/shared/Lightbox";
import { GalleryEmpty, GalleryTile, MoreButton } from "@/components/shared/GalleryParts";

const INITIAL = 6;

export function DesktopGallery({ images }: { images: SiteImage[] }) {
  const { t } = useLang();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const visible = expanded ? images : images.slice(0, INITIAL);

  return (
    <div className="section-pad relative mx-auto hidden max-w-[1160px] px-6 lg:block xl:px-10">
      <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} subtitle={t.gallery.subtitle} />

      <div className="mt-9">
        {images.length === 0 ? (
          <GalleryEmpty />
        ) : (
          <>
            <div className="columns-3 gap-5">
              {visible.map((img, i) => (
                <GalleryTile key={img.src} image={img} index={i} sizes="(min-width: 1024px) 380px, 1px" onOpen={setOpen} />
              ))}
            </div>
            {images.length > INITIAL ? (
              <div className="mt-6 flex justify-center">
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
