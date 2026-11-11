import { getSiteImages } from "@/lib/images";
import { DesktopHeader } from "@/components/desktop/DesktopHeader";
import { DesktopHero } from "@/components/desktop/DesktopHero";
import { DesktopAbout } from "@/components/desktop/DesktopAbout";
import { DesktopNutrition } from "@/components/desktop/DesktopNutrition";
import { DesktopClubs } from "@/components/desktop/DesktopClubs";
import { DesktopGallery } from "@/components/desktop/DesktopGallery";
import { DesktopContacts } from "@/components/desktop/DesktopContacts";
import { MobileHeader } from "@/components/mobile/MobileHeader";
import { MobileHero } from "@/components/mobile/MobileHero";
import { MobileAbout } from "@/components/mobile/MobileAbout";
import { MobileNutrition } from "@/components/mobile/MobileNutrition";
import { MobileClubs } from "@/components/mobile/MobileClubs";
import { MobileGallery } from "@/components/mobile/MobileGallery";
import { MobileContacts } from "@/components/mobile/MobileContacts";
import { Documents } from "@/components/shared/Documents";
import { Footer } from "@/components/shared/Footer";
import { FloatingWhatsApp } from "@/components/shared/FloatingWhatsApp";
import { Wave } from "@/components/shared/Decor";

/**
 * Әр секцияның id-і біреу ғана; ішінде Desktop (lg+) және Mobile (<lg)
 * композициялары CSS арқылы ауысады. Деректер мен мәтіндер ортақ.
 */
export default function Home() {
  const images = getSiteImages();
  const year = new Date().getFullYear();

  return (
    <>
      <a
        href="#about"
        className="sr-only z-[80] rounded-full bg-blue px-4 py-2 font-bold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Мазмұнға өту
      </a>
      <DesktopHeader logo={images.logo} />
      <MobileHeader logo={images.logo} />

      <main>
        <section id="home" aria-label="Ай Патшам">
          <DesktopHero image={images.hero} />
          <MobileHero image={images.hero} />
        </section>

        <section id="about">
          <DesktopAbout image={images.about} />
          <MobileAbout image={images.about} />
        </section>

        <section id="nutrition" className="relative">
          <Wave className="text-blue-soft" />
          <div className="bg-blue-soft">
            <DesktopNutrition />
            <MobileNutrition />
          </div>
          <Wave flip className="text-blue-soft" />
        </section>

        <section id="clubs">
          <DesktopClubs />
          <MobileClubs />
        </section>

        <section id="gallery" className="relative bg-gradient-to-b from-white via-pink-soft/60 to-white">
          <DesktopGallery images={images.gallery} />
          <MobileGallery images={images.gallery} />
        </section>

        <section id="documents">
          <Documents />
        </section>

        <section id="contacts">
          <DesktopContacts logo={images.logo} />
          <MobileContacts logo={images.logo} />
        </section>
      </main>

      <Footer logo={images.logo} year={year} />
      <FloatingWhatsApp />
    </>
  );
}
