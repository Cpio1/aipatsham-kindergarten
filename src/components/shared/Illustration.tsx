import { cn } from "@/lib/cn";

/**
 * Фотосурет әлі қосылмаған кезде көрсетілетін балабақша иллюстрациясы.
 * Сынған сурет орнына әдемі, бренд түстеріндегі сурет шығады.
 */
export function KindergartenArt({ className, variant = "hero" }: { className?: string; variant?: "hero" | "about" }) {
  const sky = variant === "hero" ? ["#E3EFFF", "#FFE8F2"] : ["#FFE8F2", "#E3EFFF"];
  const id = `sky-${variant}`;
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      className={cn("block h-full w-full", className)}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={sky[0]} />
          <stop offset="1" stopColor={sky[1]} />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#${id})`} />

      {/* Ай */}
      <path d="M318 46a34 34 0 1 0 26 54.6A27.6 27.6 0 0 1 318 46Z" fill="#FFC233" />
      {/* Бұлттар */}
      <path d="M60 104c-13 0-22-8-22-18s9-17 20-17c4-8 12-13 22-13 12 0 22 7 24 17h4c13 0 22 7 22 15s-9 16-22 16H60Z" fill="#fff" />
      <path d="M232 72c-9 0-15-5-15-12s6-12 14-12c3-6 9-9 15-9 8 0 15 5 17 12h3c9 0 15 5 15 10s-6 11-15 11h-34Z" fill="#fff" opacity=".9" />

      {/* Шарлар */}
      <path d="M86 196c0 28-6 40-10 52" stroke="#4E5B7E" strokeWidth="1.6" fill="none" opacity=".5" />
      <ellipse cx="86" cy="176" rx="20" ry="24" fill="#FF5FA2" />
      <path d="M110 186c-2 26 4 42 2 64" stroke="#4E5B7E" strokeWidth="1.6" fill="none" opacity=".5" />
      <ellipse cx="112" cy="166" rx="18" ry="22" fill="#2B5FE8" />
      <ellipse cx="80" cy="168" rx="5" ry="8" fill="#fff" opacity=".45" />
      <ellipse cx="106" cy="158" rx="4.5" ry="7" fill="#fff" opacity=".45" />

      {/* Шөп */}
      <path d="M0 330c60-22 130-26 200-16s140 12 200-8v94H0v-70Z" fill="#BDEBCB" />

      {/* Ғимарат */}
      <rect x="138" y="186" width="190" height="150" rx="22" fill="#fff" />
      <rect x="138" y="186" width="190" height="150" rx="22" fill="#C6DCFF" opacity=".55" />
      <path d="M126 196 233 120l107 76c4 3 2 9-3 9H129c-5 0-7-6-3-9Z" fill="#FF5FA2" />
      <path d="M233 120v-34" stroke="#2B5FE8" strokeWidth="4" strokeLinecap="round" />
      <path d="M235 86h30l-8 9 8 9h-30Z" fill="#2B5FE8" />
      <circle cx="233" cy="166" r="17" fill="#fff" />
      <path d="M238 154a12 12 0 1 0 8 19.8A9.6 9.6 0 0 1 238 154Z" fill="#2B5FE8" />

      {/* Терезелер */}
      <rect x="160" y="226" width="40" height="40" rx="14" fill="#2B5FE8" />
      <rect x="266" y="226" width="40" height="40" rx="14" fill="#2B5FE8" />
      <path d="M180 226v40M160 246h40M286 226v40M266 246h40" stroke="#fff" strokeWidth="3" opacity=".8" />
      {/* Есік */}
      <path d="M213 336v-50a20 20 0 0 1 40 0v50Z" fill="#FF5FA2" />
      <circle cx="244" cy="312" r="3" fill="#fff" />

      {/* Кубиктер: А Ә Б */}
      <g fontFamily="Nunito, Arial, sans-serif" fontWeight="900" fontSize="22" textAnchor="middle">
        <rect x="40" y="300" width="36" height="36" rx="9" fill="#2B5FE8" />
        <text x="58" y="326" fill="#fff">А</text>
        <rect x="78" y="300" width="36" height="36" rx="9" fill="#FF5FA2" />
        <text x="96" y="326" fill="#fff">Ә</text>
        <rect x="59" y="262" width="36" height="36" rx="9" fill="#FFC233" />
        <text x="77" y="288" fill="#263451">Б</text>
      </g>

      {/* Ағаш */}
      <rect x="350" y="290" width="8" height="40" rx="4" fill="#C9A27A" />
      <circle cx="354" cy="278" r="24" fill="#7FD49C" />
      <circle cx="342" cy="270" r="6" fill="#fff" opacity=".35" />

      {/* Гүлдер */}
      <g fill="#FF5FA2">
        <circle cx="160" cy="350" r="5" />
        <circle cx="168" cy="345" r="5" />
        <circle cx="168" cy="355" r="5" />
        <circle cx="176" cy="350" r="5" />
      </g>
      <circle cx="168" cy="350" r="3.5" fill="#FFC233" />
      <g fill="#2B5FE8">
        <circle cx="300" cy="356" r="4.5" />
        <circle cx="307" cy="351" r="4.5" />
        <circle cx="307" cy="361" r="4.5" />
        <circle cx="314" cy="356" r="4.5" />
      </g>
      <circle cx="307" cy="356" r="3" fill="#FFC233" />
    </svg>
  );
}
