import Image from "next/image";
import type { SiteImage } from "@/lib/images";
import { cn } from "@/lib/cn";

/** Логотип белгісі: public/logo.* болса — сол, әйтпесе ай мен тәж бейнеленген белгі */
export function LogoMark({ logo, className }: { logo: SiteImage | null; className?: string }) {
  if (logo) {
    return (
      <span className={cn("relative block overflow-hidden rounded-full bg-white", className)}>
        <Image src={logo.src} alt="" fill sizes="96px" className="object-contain" />
      </span>
    );
  }
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("block", className)}>
      <circle cx="32" cy="32" r="31" fill="#EAF3FF" />
      <path d="M38 14a19 19 0 1 0 14.5 30.5A15.5 15.5 0 0 1 38 14Z" fill="#3467D5" />
      <path
        d="M17 22.5l3.6 3.4 3.4-6.4 3.4 6.4 3.6-3.4-1.4 9H18.4l-1.4-9Z"
        fill="#FF83B5"
        stroke="#FF83B5"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="47" cy="17" r="2.6" fill="#FF83B5" />
      <circle cx="51.5" cy="26" r="1.6" fill="#FFCF5C" />
    </svg>
  );
}

export function Logo({
  logo,
  className,
  markClassName,
  legal,
}: {
  logo: SiteImage | null;
  className?: string;
  markClassName?: string;
  legal?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark logo={logo} className={cn("h-11 w-11 shrink-0", markClassName)} />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-display text-[1.3rem] font-black tracking-tight text-blue">
          Ай <span className="text-pink-deep">Патшам</span>
        </span>
        {legal ? <span className="mt-1 truncate text-[11px] font-bold text-ink-soft">{legal}</span> : null}
      </span>
    </span>
  );
}
