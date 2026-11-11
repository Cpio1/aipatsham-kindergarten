/**
 * Балабақша туралы бірыңғай мәліметтер.
 * Телефон, мекенжай, кесте, сілтемелер — барлығы осы жерден өзгертіледі.
 * Қазақ және орыс нұсқалары осы деректерді ортақ пайдаланады.
 */

export const site = {
  brand: "Ай Патшам",
  legalName: "Smart Korkem",

  phone: {
    display: "+7 747 744 68 69",
    tel: "tel:+77477446869",
  },
  whatsapp: "https://wa.me/77477446869",
  instagram: {
    url: "https://www.instagram.com/ai.patsham1/",
    handle: "@ai.patsham1",
  },

  /**
   * 2GIS сілтемесі.
   * Нақты орны (қала, координаттар) расталмағандықтан, мекенжай бойынша іздеу ашылады.
   * Нақты 2GIS карточкасының сілтемесі белгілі болса — осы жерге қойыңыз,
   * мысалы: "https://2gis.kz/almaty/firm/XXXXXXXX".
   */
  mapUrl: "https://2gis.kz/search/" + encodeURIComponent("Көктем-1, 11"),

  hours: { open: "08:00", close: "18:30" },
  groupsCount: 3,
  ages: { from: 1, to: 7 },
  mealsPerDay: 5,

  /**
   * Құжаттар. Әзірге бос — құжаттар қосылғанда толтырыңыз:
   * { title: { kk: "...", ru: "..." }, url: "https://drive.google.com/..." }
   */
  documents: [] as { title: { kk: string; ru: string }; url: string }[],
  /** Google Drive папкасының сілтемесі (бар болса). */
  documentsDriveUrl: null as string | null,
} as const;

export type SectionId =
  | "home"
  | "about"
  | "nutrition"
  | "clubs"
  | "gallery"
  | "documents"
  | "contacts";

export const sectionIds: SectionId[] = [
  "home",
  "about",
  "nutrition",
  "clubs",
  "gallery",
  "documents",
  "contacts",
];
