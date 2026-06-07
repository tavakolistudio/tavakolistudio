"use client";

import { projectTypeOptions } from "@/data/packages";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  selected: string | null;
  onSelect: (id: string) => void;
};

export default function ProjectTypePicker({ selected, onSelect }: Props) {
  const { locale } = useLanguage();

  return (
    <div>
      <p className="text-xs tracking-[0.25em] uppercase text-gold mb-3">Step 1 of 5</p>
      <h2 className="font-heading text-3xl md:text-4xl text-white mb-2">
        What are we creating?
      </h2>
      <p className="text-sm text-muted mb-10">Choose your project type to begin.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {projectTypeOptions.map((opt) => {
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
              <span className="text-2xl block mb-3">{opt.icon}</span>
              <p
                className={`font-heading text-lg mb-1 transition-colors duration-300 ${
                  isSelected ? "text-gold" : "text-white group-hover:text-gold"
                }`}
              >
                {label}
              </p>
              <p className="text-xs text-muted leading-relaxed">{opt.description}</p>
              {isSelected && (
                <span className="mt-3 inline-block text-[10px] tracking-widest uppercase text-gold">
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
