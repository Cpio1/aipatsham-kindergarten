import Image from "next/image";
import type { SiteImage } from "@/lib/images";
import { KindergartenArt } from "./Illustration";
import { cn } from "@/lib/cn";

/**
 * Органикалық пішіндегі фото. Фото жоқ болса — иллюстрация.
 * Позициялау класын (relative/absolute) шақырушы береді.
 * `sizes` — CSS арқылы жасырылған нұсқа үшін "1px" беріп, артық жүктеуді болдырмаймыз.
 */
export function PhotoFrame({
  image,
  alt,
  sizes,
  priority,
  className,
  variant = "hero",
  position = "center",
}: {
  image: SiteImage | null;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  variant?: "hero" | "about";
  position?: string;
}) {
  return (
    <div className={cn("overflow-hidden bg-blue-soft", className)}>
      {image ? (
        <Image
          src={image.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{ objectPosition: position }}
        />
      ) : (
        <KindergartenArt variant={variant} />
      )}
    </div>
  );
}
