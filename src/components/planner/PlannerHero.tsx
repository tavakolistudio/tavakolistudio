"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function PlannerHero() {
  const { t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-4 text-center">
      <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
        Tavakoli AI Studio
      </p>
      <h1 className="font-heading text-4xl md:text-6xl text-white mb-4 leading-tight">
        {t("hero.title")}
      </h1>
      <p className="text-muted max-w-xl mx-auto text-sm leading-relaxed">
        {t("hero.subtitle")}
      </p>
      <div className="w-16 h-px bg-white/10 mx-auto mt-8" />
    </div>
  );
}
