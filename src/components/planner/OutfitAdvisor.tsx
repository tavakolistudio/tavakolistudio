"use client";

import type { Location, VisualStyle } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  location: Location | null;
  style: VisualStyle | null;
};

export default function OutfitAdvisor({ location, style }: Props) {
  const { t } = useLanguage();

  const avoidList = [
    t("outfit.avoid.1"),
    t("outfit.avoid.2"),
    t("outfit.avoid.3"),
    t("outfit.avoid.4"),
    t("outfit.avoid.5"),
  ];

  const coupleTips = [
    t("outfit.couple.1"),
    t("outfit.couple.2"),
    t("outfit.couple.3"),
    t("outfit.couple.4"),
  ];

  const accessories = [
    t("outfit.acc.1"),
    t("outfit.acc.2"),
    t("outfit.acc.3"),
    t("outfit.acc.4"),
  ];

  const styleDescription = style ? t(`outfit.style.${style}`) : "";

  return (
    <div>
      <p className="text-xs tracking-[0.25em] uppercase text-gold mb-3">{t("step.4of5")}</p>
      <h2 className="font-heading text-3xl md:text-4xl text-white mb-2">
        {t("p4.title")}
      </h2>
      <p className="text-sm text-muted mb-10">{t("p4.sub")}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Location-specific advice */}
        {location && (
          <div className="p-8 border border-gold/20 bg-gold/5">
            <p className="text-[10px] tracking-widest uppercase text-gold mb-4">
              {location.title}
            </p>
            <h3 className="font-heading text-xl text-white mb-4">
              {t("outfit.color_rec")}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {location.outfitSuggestion}
            </p>
          </div>
        )}

        {/* Style-specific advice */}
        {style && (
          <div className="p-8 border border-white/5 bg-surface/30">
            <p className="text-[10px] tracking-widest uppercase text-muted-2 mb-4">
              {t("step.style")}: {style}
            </p>
            <h3 className="font-heading text-xl text-white mb-4">
              {t("outfit.style_dir")}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {styleDescription}
            </p>
          </div>
        )}

        {/* Avoid list */}
        <div className="p-8 border border-white/5 bg-surface/20">
          <h3 className="font-heading text-xl text-white mb-5">{t("outfit.avoid")}</h3>
          <ul className="space-y-3">
            {avoidList.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted">
                <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Couple tips */}
        <div className="p-8 border border-white/5 bg-surface/20">
          <h3 className="font-heading text-xl text-white mb-5">
            {t("outfit.couple")}
          </h3>
          <ul className="space-y-3">
            {coupleTips.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted">
                <span className="text-gold mt-0.5 shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Accessories */}
        <div className="p-8 border border-white/5 bg-surface/20 lg:col-span-2">
          <h3 className="font-heading text-xl text-white mb-5">{t("outfit.accessories")}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {accessories.map((item, i) => (
              <p key={i} className="text-sm text-muted leading-relaxed">
                <span className="text-gold">✦ </span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
