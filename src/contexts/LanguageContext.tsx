"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { AppLocale } from "@/types";

interface LanguageContextType {
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
  dir: "ltr" | "rtl";
  t: (key: string) => string;
}

const translations: Record<AppLocale, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.planner": "Plan Your Shoot",
    "nav.locations": "Locations",
    "nav.ai_preview": "AI Preview",
    "nav.pose_coach": "Pose Coach",
    "nav.budget": "Budget Calculator",
    "nav.booking": "Book Now",
    "nav.contact": "Contact",
    "hero.title": "Plan Your Cinematic Photoshoot in Istanbul",
    "hero.subtitle":
      "Choose your location, style, outfit and package — then book a premium photography or film session with Tavakoli Studio.",
    "hero.cta_plan": "Start Planning",
    "hero.cta_wa": "Book on WhatsApp",
    "common.back": "Back",
    "common.next": "Next",
    "common.select": "Select",
    "common.selected": "Selected",
    "common.loading": "Loading...",
    "common.submit": "Submit",
    "common.wa_cta": "Book on WhatsApp",
    "common.instagram": "Follow on Instagram",
    "booking.title": "Book Your Session",
    "booking.subtitle": "Fill in your details and we'll get back to you within 24 hours.",
    "booking.success": "Thank you! Your booking request has been received.",
    "booking.wa_followup": "Continue on WhatsApp",
  },
  fa: {
    "nav.home": "خانه",
    "nav.planner": "برنامه‌ریزی عکاسی",
    "nav.locations": "لوکیشن‌ها",
    "nav.ai_preview": "پیش‌نمایش هوش مصنوعی",
    "nav.pose_coach": "آموزش پوز",
    "nav.budget": "محاسبه بودجه",
    "nav.booking": "رزرو",
    "nav.contact": "تماس",
    "hero.title": "عکاسی سینماتیک خود را در استانبول برنامه‌ریزی کنید",
    "hero.subtitle":
      "لوکیشن، سبک، لباس و پکیج خود را انتخاب کنید — سپس یک جلسه عکاسی یا فیلمبرداری با تاواکولی استودیو رزرو کنید.",
    "hero.cta_plan": "شروع برنامه‌ریزی",
    "hero.cta_wa": "رزرو از واتساپ",
    "common.back": "بازگشت",
    "common.next": "بعدی",
    "common.select": "انتخاب",
    "common.selected": "انتخاب شد",
    "common.loading": "در حال بارگذاری...",
    "common.submit": "ارسال",
    "common.wa_cta": "رزرو از واتساپ",
    "common.instagram": "دنبال کنید در اینستاگرام",
    "booking.title": "جلسه خود را رزرو کنید",
    "booking.subtitle": "اطلاعات خود را وارد کنید و ما ظرف ۲۴ ساعت با شما تماس خواهیم گرفت.",
    "booking.success": "ممنون! درخواست رزرو شما دریافت شد.",
    "booking.wa_followup": "ادامه در واتساپ",
  },
  tr: {
    "nav.home": "Ana Sayfa",
    "nav.planner": "Çekim Planla",
    "nav.locations": "Konumlar",
    "nav.ai_preview": "AI Önizleme",
    "nav.pose_coach": "Poz Koçu",
    "nav.budget": "Bütçe Hesaplayıcı",
    "nav.booking": "Rezervasyon",
    "nav.contact": "İletişim",
    "hero.title": "İstanbul'da Sinematik Fotoğraf Çekiminizi Planlayın",
    "hero.subtitle":
      "Konumunuzu, stilinizi, kıyafetinizi ve paketinizi seçin — ardından Tavakoli Studio ile premium bir fotoğraf veya film çekimi oturumu rezervasyonu yapın.",
    "hero.cta_plan": "Planlamaya Başla",
    "hero.cta_wa": "WhatsApp ile Rezervasyon",
    "common.back": "Geri",
    "common.next": "İleri",
    "common.select": "Seç",
    "common.selected": "Seçildi",
    "common.loading": "Yükleniyor...",
    "common.submit": "Gönder",
    "common.wa_cta": "WhatsApp ile Rezervasyon",
    "common.instagram": "Instagram'da Takip Et",
    "booking.title": "Oturumunuzu Rezerve Edin",
    "booking.subtitle": "Bilgilerinizi doldurun, 24 saat içinde size döneceğiz.",
    "booking.success": "Teşekkürler! Rezervasyon talebiniz alındı.",
    "booking.wa_followup": "WhatsApp'ta Devam Et",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  dir: "ltr",
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<AppLocale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("app-locale") as AppLocale | null;
    if (saved && ["en", "fa", "tr"].includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (l: AppLocale) => {
    setLocaleState(l);
    localStorage.setItem("app-locale", l);
  };

  const dir = locale === "fa" ? "rtl" : "ltr";

  const t = (key: string): string => {
    return translations[locale][key] ?? translations["en"][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, dir, t }}>
      <div dir={dir} lang={locale}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
