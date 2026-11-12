import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { Providers } from "@/components/shared/Providers";
import "@/styles/globals.css";

const nunito = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const title = "«Ай Патшам» балабақшасы — Көктем-1";
const description =
  "«Ай Патшам» балабақшасы: 1–7 жас аралығындағы балаларға арналған жайлы орта, қазақ тіліндегі тәрбие, 5 мезгіл тамақтану және қызықты үйірмелер. Дс–Жм, 08:00–18:30.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Ай Патшам",
  keywords: ["Ай Патшам", "балабақша", "детский сад", "Көктем-1", "Smart Korkem", "қазақ тілді балабақша"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "kk_KZ",
    alternateLocale: ["ru_RU"],
    url: "/",
    siteName: "Ай Патшам",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#E3EFFF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kk" className={nunito.variable} style={{ colorScheme: "light" }}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
