import { CloudShape, FlowerShape, MoonShape, Sparkle, StarShape } from "./Decor";
import { cn } from "@/lib/cn";

/**
 * Секцияның фоны: градиент (globals.css-тегі `.sky-*`), шағын декор және
 * келесі секцияға жұмсақ өтетін толқын. Секция ішінде бірінші бала ретінде қойылады;
 * секцияның өзі `relative isolate` болуы тиіс — фон мазмұннан төмен (-z-10) тұрады.
 *
 * Декор Desktop және Mobile үшін бөлек жиналған: мобильдіде аз әрі кішкентай,
 * тек шеттерде, мәтін мен батырмаларға кедергі жасамайды.
 */

type Kind = "cloud" | "star" | "sparkle" | "flower" | "moon" | "ring" | "circle" | "blob" | "dots" | "glow";
type Item = [Kind, string];

export type SectionVariant = "about" | "nutrition" | "clubs" | "gallery" | "documents" | "contacts" | "footer";

type WaveSpec = {
  /** Келесі секцияның жоғарғы түсі */
  front: string;
  /** Артқы мөлдір қабат — секцияның акценті */
  back: string;
  shape: 0 | 1 | 2;
};

type Config = { wave: WaveSpec | null; desktop: Item[]; mobile: Item[] };

const configs: Record<SectionVariant, Config> = {
  // Біз туралы және топтар — көгілдір, нәзік қызғылт акценттер
  about: {
    wave: { front: "#DDF0FF", back: "rgb(255 198 229 / 0.75)", shape: 0 },
    desktop: [
      ["glow", "top-[6%] -left-24 h-80 w-80 bg-[radial-gradient(closest-side,#A9DBFF,transparent)]"],
      ["glow", "top-[52%] -right-20 h-72 w-72 bg-[radial-gradient(closest-side,#FFC6E5,transparent)] [animation-delay:-4s]"],
      ["cloud", "animate-drift top-[5%] right-[6%] w-16 text-white"],
      ["star", "animate-twinkle top-[44%] left-[2.5%] h-4 w-4 text-sun"],
      ["ring", "top-[58%] right-[3%] h-12 w-12 border-blue/20"],
      ["flower", "animate-float-slow bottom-[10%] left-[3%] h-6 w-6 text-blush"],
      ["dots", "bottom-[22%] right-[2%] h-12 w-16 text-rose/20"],
    ],
    mobile: [
      ["cloud", "animate-drift top-3 right-2 w-10 text-white"],
      ["sparkle", "animate-twinkle top-[36%] left-1.5 h-3 w-3 text-rose/70"],
      ["blob", "blob-b top-[60%] -right-6 h-16 w-16 bg-blush/60"],
      ["star", "animate-twinkle bottom-[6%] left-2 h-3 w-3 text-sun"],
    ],
  },
  // Тамақтану — ашық көгілдір, қызғылт элементтер
  nutrition: {
    wave: { front: "#FFEAF5", back: "rgb(169 219 255 / 0.8)", shape: 1 },
    desktop: [
      ["glow", "-top-16 right-[8%] h-72 w-72 bg-[radial-gradient(closest-side,#FFC6E5,transparent)]"],
      ["circle", "top-[14%] left-[2%] h-14 w-14 bg-white/45"],
      ["sparkle", "animate-twinkle top-[30%] left-[5%] h-4 w-4 text-rose/70"],
      ["flower", "animate-float bottom-[18%] right-[2.5%] h-7 w-7 text-blush"],
      ["blob", "blob-a bottom-[8%] left-[2%] h-20 w-24 bg-blush/45"],
    ],
    mobile: [
      ["circle", "top-4 -left-4 h-12 w-12 bg-white/50"],
      ["sparkle", "animate-twinkle top-[26%] right-2 h-3 w-3 text-rose/70"],
      ["flower", "bottom-[8%] right-2 h-5 w-5 text-blush"],
    ],
  },
  // Үйірмелер — нәзік қызғылт, көгілдір жарқылдар
  clubs: {
    wave: { front: "#E4F3FF", back: "rgb(255 198 229 / 0.85)", shape: 2 },
    desktop: [
      ["glow", "top-[10%] -left-20 h-80 w-80 bg-[radial-gradient(closest-side,#A9DBFF,transparent)]"],
      ["glow", "bottom-[4%] -right-16 h-72 w-72 bg-[radial-gradient(closest-side,#C5E8FF,transparent)] [animation-delay:-5s]"],
      ["cloud", "animate-drift-slow top-[8%] right-[4%] w-16 text-white"],
      ["moon", "top-[46%] left-[2%] h-6 w-6 text-sky"],
      ["ring", "bottom-[12%] left-[4%] h-10 w-10 border-rose/20"],
      ["sparkle", "animate-twinkle top-[52%] right-[2.5%] h-4 w-4 text-blue/50 [animation-delay:1s]"],
    ],
    mobile: [
      ["cloud", "animate-drift top-3 left-1 w-9 text-white"],
      ["circle", "top-[40%] -right-5 h-14 w-14 bg-sky/40"],
      ["star", "animate-twinkle bottom-[10%] left-2 h-3 w-3 text-blue/40"],
    ],
  },
  // Галерея — көгілдір-ақ
  gallery: {
    wave: { front: "#FFF2F8", back: "rgb(197 232 255 / 0.9)", shape: 0 },
    desktop: [
      ["glow", "top-[30%] -right-24 h-80 w-80 bg-[radial-gradient(closest-side,#C5E8FF,transparent)]"],
      ["cloud", "animate-drift top-[6%] left-[3%] w-20 text-sky-light"],
      ["circle", "top-[40%] left-[1.5%] h-10 w-10 bg-blush/50"],
      ["star", "animate-twinkle bottom-[16%] right-[3%] h-5 w-5 text-sun [animation-delay:0.6s]"],
      ["dots", "bottom-[8%] left-[2%] h-12 w-16 text-blue/15"],
    ],
    mobile: [
      ["cloud", "animate-drift-slow top-4 right-1 w-10 text-sky-light"],
      ["sparkle", "animate-twinkle bottom-[12%] left-2 h-3 w-3 text-rose/60"],
    ],
  },
  // Құжаттар — нәзік қызғылт-ақ
  documents: {
    wave: { front: "#E0F1FF", back: "rgb(255 198 229 / 0.8)", shape: 1 },
    desktop: [
      ["glow", "top-[20%] -left-16 h-72 w-72 bg-[radial-gradient(closest-side,#FFC6E5,transparent)]"],
      ["cloud", "animate-drift top-[12%] right-[8%] w-16 text-white"],
      ["flower", "animate-float-slow bottom-[22%] left-[6%] h-7 w-7 text-white"],
      ["ring", "top-[48%] right-[5%] h-12 w-12 border-blue/15"],
      ["sparkle", "animate-twinkle top-[30%] left-[12%] h-4 w-4 text-rose/60"],
    ],
    mobile: [
      ["flower", "top-4 left-2 h-5 w-5 text-white"],
      ["ring", "bottom-[14%] -right-3 h-12 w-12 border-rose/20"],
    ],
  },
  // Байланыс — жарқын көгілдір-қызғылт
  contacts: {
    wave: { front: "#DDEFFF", back: "rgb(169 219 255 / 0.85)", shape: 2 },
    desktop: [
      ["glow", "-top-10 right-[4%] h-80 w-80 bg-[radial-gradient(closest-side,#FFC6E5,transparent)]"],
      ["glow", "bottom-[6%] -left-20 h-72 w-72 bg-[radial-gradient(closest-side,#A9DBFF,transparent)] [animation-delay:-3s]"],
      ["cloud", "animate-drift top-[8%] left-[4%] w-20 text-white"],
      ["star", "animate-twinkle top-[22%] right-[3%] h-5 w-5 text-sun"],
      ["blob", "blob-c bottom-[14%] right-[2%] h-16 w-20 bg-white/40"],
      ["sparkle", "animate-twinkle bottom-[26%] left-[2.5%] h-4 w-4 text-rose/60 [animation-delay:1.4s]"],
    ],
    mobile: [
      ["cloud", "animate-drift top-3 right-2 w-10 text-white"],
      ["sparkle", "animate-twinkle top-[34%] left-1.5 h-3 w-3 text-rose/70"],
      ["blob", "blob-a bottom-[16%] -left-6 h-16 w-16 bg-white/40"],
    ],
  },
  // Footer
  footer: {
    wave: null,
    desktop: [
      ["cloud", "animate-drift-slow top-[14%] right-[5%] w-16 text-white"],
      ["star", "animate-twinkle top-[30%] left-[2%] h-4 w-4 text-sun"],
      ["circle", "bottom-[18%] right-[2%] h-12 w-12 bg-blush/50"],
      ["sparkle", "animate-twinkle bottom-[30%] left-[45%] h-3.5 w-3.5 text-rose/50 [animation-delay:1s]"],
    ],
    mobile: [
      ["cloud", "animate-drift top-4 right-2 w-10 text-white"],
      ["star", "animate-twinkle top-[40%] right-3 h-3 w-3 text-sun"],
    ],
  },
};

const wavePaths = [
  ["M0 24C200 4 420 2 640 18S1060 44 1260 26 1420 10 1440 12V60H0Z", "M0 36C220 18 460 20 700 34S1120 52 1300 40 1420 30 1440 32V60H0Z"],
  ["M0 14C160 30 360 36 560 22S940 0 1140 16 1380 34 1440 26V60H0Z", "M0 34C240 46 480 48 720 36S1140 18 1440 34V60H0Z"],
  ["M0 20C260 2 520 4 760 22S1200 46 1440 16V60H0Z", "M0 38C280 24 560 26 820 38S1240 50 1440 32V60H0Z"],
] as const;

function DecorItem({ kind, className }: { kind: Kind; className: string }) {
  const base = cn("absolute", className);
  switch (kind) {
    case "cloud":
      return <CloudShape className={cn(base, "drop-shadow-[0_6px_10px_rgb(43_95_232/0.12)]")} />;
    case "star":
      return <StarShape className={base} />;
    case "sparkle":
      return <Sparkle className={base} />;
    case "flower":
      return <FlowerShape className={base} />;
    case "moon":
      return <MoonShape className={base} />;
    case "ring":
      return <span className={cn(base, "rounded-full border-2")} />;
    case "circle":
      return <span className={cn(base, "rounded-full")} />;
    case "blob":
    case "dots":
      return <span className={cn(base, kind === "dots" && "dots")} />;
    case "glow":
      return <span className={cn(base, "animate-glow rounded-full will-change-[opacity]")} />;
  }
}

/** Келесі секцияға өтетін жайпақ екі қабатты толқын */
function SectionWave({ front, back, shape }: WaveSpec) {
  const [b, f] = wavePaths[shape];
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-x-0 -bottom-px h-(--divider-h) w-full"
    >
      <path fill={back} d={b} />
      <path fill={front} d={f} />
    </svg>
  );
}

export function SectionBackground({ variant, className }: { variant: SectionVariant; className?: string }) {
  const { wave, desktop, mobile } = configs[variant];
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", `sky-${variant}`, className)}>
      <div className="absolute inset-0 hidden lg:block">
        {desktop.map(([kind, cls], i) => (
          <DecorItem key={i} kind={kind} className={cls} />
        ))}
      </div>
      <div className="absolute inset-0 lg:hidden">
        {mobile.map(([kind, cls], i) => (
          <DecorItem key={i} kind={kind} className={cls} />
        ))}
      </div>
      {wave ? <SectionWave {...wave} /> : null}
    </div>
  );
}
