"use client";

import { Phone } from "lucide-react";
import type { ReactNode } from "react";
import type { Dictionary } from "@/data/content";
import { site } from "@/data/site";
import { InstagramIcon, TwoGisIcon, WhatsAppIcon } from "./BrandIcons";

export type ContactAction = {
  key: string;
  href: string;
  external: boolean;
  label: string;
  hint: string;
  icon: ReactNode;
  tone: string;
};

/** 4 байланыс батырмасы: desktop пен mobile бірдей деректерді қолданады */
export function getContactActions(t: Dictionary, iconClass = "h-6 w-6"): ContactAction[] {
  return [
    {
      key: "whatsapp",
      href: site.whatsapp,
      external: true,
      label: "WhatsApp",
      hint: t.contacts.writeUs,
      icon: <WhatsAppIcon className={iconClass} />,
      tone: "bg-[#25D366] text-white",
    },
    {
      key: "phone",
      href: site.phone.tel,
      external: false,
      label: t.contacts.call,
      hint: site.phone.display,
      icon: <Phone className={iconClass} />,
      tone: "bg-blue text-white",
    },
    {
      key: "instagram",
      href: site.instagram.url,
      external: true,
      label: "Instagram",
      hint: site.instagram.handle,
      icon: <InstagramIcon className={iconClass} />,
      tone: "bg-gradient-to-br from-[#FF83B5] via-[#E0518D] to-[#8F5BD6] text-white",
    },
    {
      key: "map",
      href: site.mapUrl,
      external: true,
      label: t.contacts.map,
      hint: t.contacts.mapText,
      icon: <TwoGisIcon className={iconClass} />,
      tone: "bg-[#2FB34A] text-white",
    },
  ];
}
