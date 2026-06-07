"use client";

import { styleOptions } from "@/data/packages";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  selected: string | null;
  onSelect: (id: string) => void;
};

export default function StylePicker({ selected, onSelect }: Props) {
  const { locale } = useLanguage();

  return (
    <div>
      <p className="text-xs tracking-[0.25em] uppercase text-gold mb-3">Step 3 of 5</p>
      <h2 className="font-heading text-3xl md:text-4xl text-white mb-2">
        What visual style speaks to you?
      </h2>
      <p className="text-sm text-muted mb-10">
        This guides the lighting, editing and direction of your shoot.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {styleOptions.map((opt) => {
          const label =
            locale === "fa" ? opt.label_fa : locale === "tr" ? opt.label_tr : opt.label;
          const isSelected = selected === opt.id;

          return (
            <button
              key={opt.id}
              onClick={() => onSelect(opt.id)}
              className={`text-start p-6 border transition-all duration-300 group ${
                isSelected
                  ? "border-gold bg-gold/5"
                  : "border-white/5 bg-surface/30 hover:border-white/15 hover:bg-surface/60"
              }`}
            >
              <p
                className={`font-heading text-xl mb-2 transition-colors ${
                  isSelected ? "text-gold" : "text-white group-hover:text-gold"
                }`}
              >
                {label}
              </p>
              <p className="text-xs text-muted leading-relaxed">{opt.description}</p>
              {isSelected && (
                <span className="mt-4 inline-block text-[10px] tracking-widest uppercase text-gold">
                  ✓ Selected
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
