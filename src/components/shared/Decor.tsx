import { cn } from "@/lib/cn";

type DecorProps = { className?: string };

/** Жұмсақ бұрышты жұлдызша */
export function StarShape({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={cn("pointer-events-none", className)}>
      <path
        fill="currentColor"
        d="M24 3.5c1.6 0 2.9 1 3.5 2.4l4.2 9.6 10.4 1.1c3.2.4 4.5 4.3 2.1 6.5l-7.8 7 2.2 10.2c.7 3.2-2.7 5.6-5.5 4L24 39l-9.1 5.3c-2.8 1.6-6.2-.8-5.5-4l2.2-10.2-7.8-7c-2.4-2.2-1.1-6.1 2.1-6.5l10.4-1.1 4.2-9.6c.6-1.4 1.9-2.4 3.5-2.4Z"
      />
    </svg>
  );
}

/** Төрт сәулелі жылтыр */
export function Sparkle({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("pointer-events-none", className)}>
      <path fill="currentColor" d="M16 1c1 7.6 4.4 11 15 15-10.6 4-14 7.4-15 15-1-7.6-4.4-11-15-15 10.6-4 14-7.4 15-15Z" />
    </svg>
  );
}

export function CloudShape({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 120 64" aria-hidden="true" className={cn("pointer-events-none", className)}>
      <path
        fill="currentColor"
        d="M30 62C14 62 2 52 2 39.5 2 27.6 12.4 18 25.6 17.3 30.4 7.7 40.6 2 52.4 2c14.4 0 26.4 8.6 29.6 20.2 1.6-.4 3.4-.6 5.2-.6C104.2 21.6 118 32.6 118 42S104.2 62 87.2 62H30Z"
      />
    </svg>
  );
}

export function FlowerShape({ className, center = "#FFC233" }: DecorProps & { center?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={cn("pointer-events-none", className)}>
      <g fill="currentColor">
        <circle cx="24" cy="11" r="9" />
        <circle cx="36.4" cy="20" r="9" />
        <circle cx="31.6" cy="34.6" r="9" />
        <circle cx="16.4" cy="34.6" r="9" />
        <circle cx="11.6" cy="20" r="9" />
      </g>
      <circle cx="24" cy="24" r="7" fill={center} />
    </svg>
  );
}

export function MoonShape({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={cn("pointer-events-none", className)}>
      <path fill="currentColor" d="M30.5 4.2A20 20 0 1 0 44 32.6 16.5 16.5 0 0 1 30.5 4.2Z" />
    </svg>
  );
}

export function SquiggleLine({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 120 16" fill="none" aria-hidden="true" className={cn("pointer-events-none", className)}>
      <path
        d="M2 8c7.5-6 15-6 22.5 0s15 6 22.5 0 15-6 22.5 0 15 6 22.5 0 15-6 22.5 0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Секциялар арасындағы толқын. `fill` — келесі секцияның түсі */
export function Wave({ className, flip = false }: DecorProps & { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("pointer-events-none block h-(--wave-h) w-full", flip && "rotate-180", className)}
    >
      <path
        fill="currentColor"
        d="M0 46c120-30 240-42 360-30s240 52 360 54 240-38 360-50 240 4 360 22v48H0V46Z"
      />
    </svg>
  );
}

/**
 * Hero астындағы көп қабатты толқындар: артқы көгілдір, ортаңғы қызғылт, алдыңғы ақ
 * (келесі ақ секциямен қосылады). Артқы қабаттар сәл кеңірек — тербелгенде шеті көрінбейді.
 * Mobile үшін жайпақ, бір-екі иірімді жеке пішіндер.
 */
const heroWavePaths = {
  desktop: [
    "M0 38C180 8 360 6 560 30S940 70 1140 40 1380 6 1440 18V100H0Z",
    "M0 54C220 22 420 28 660 52S1040 84 1240 58 1400 32 1440 38V100H0Z",
    "M0 70C200 48 420 50 680 70S1100 94 1300 76 1420 62 1440 64V100H0Z",
  ],
  mobile: [
    "M0 34C160 6 380 2 640 26S1120 58 1440 22V100H0Z",
    "M0 52C260 24 520 30 800 54S1240 70 1440 44V100H0Z",
    "M0 70C300 52 640 56 920 72S1300 82 1440 66V100H0Z",
  ],
};

export function HeroWaves({ className, variant = "desktop" }: DecorProps & { variant?: "desktop" | "mobile" }) {
  const [back, mid, front] = heroWavePaths[variant];
  const layer = "absolute bottom-0 -left-[5%] h-full w-[110%]";
  return (
    <div aria-hidden="true" className={cn("pointer-events-none relative -mb-px w-full", className)}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className={cn(layer, "animate-sway-slow")}>
        <path fill="#A9DBFF" fillOpacity="0.75" d={back} />
      </svg>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={cn(layer, "animate-sway [animation-direction:alternate-reverse]")}
      >
        <path fill="#FFC6E5" fillOpacity="0.9" d={mid} />
      </svg>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-full w-full">
        <path fill="#FFFFFF" d={front} />
      </svg>
    </div>
  );
}
