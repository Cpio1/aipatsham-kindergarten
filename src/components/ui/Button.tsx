import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "blue" | "pink" | "white" | "outline" | "whatsapp";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  blue: "bg-blue text-white shadow-card hover:bg-blue-deep",
  pink: "bg-pink-deep text-white shadow-pink hover:bg-[#b4336b]",
  white: "bg-white text-blue shadow-soft hover:bg-blue-soft",
  outline: "bg-white/70 text-blue ring-2 ring-inset ring-blue/25 hover:ring-blue/60 hover:bg-white",
  whatsapp: "bg-[#25D366] text-white shadow-[0_14px_30px_-14px_rgb(37_211_102/0.7)] hover:bg-[#1FB959]",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-[14px] gap-2",
  md: "h-12 px-6 text-[15px] gap-2.5",
  lg: "h-14 px-7 text-[16px] gap-3",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  external?: boolean;
};

/** Сілтеме-батырма: тартымды hover, басқанда жеңіл «басылу» */
export function ButtonLink({ variant = "blue", size = "md", icon, external, className, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group/btn inline-flex shrink-0 items-center justify-center rounded-full font-extrabold whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
