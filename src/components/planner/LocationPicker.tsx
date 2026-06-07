"use client";

import { istanbulLocations } from "@/data/locations";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Location } from "@/types";

type Props = {
  selected: Location | null;
  onSelect: (location: Location) => void;
};

const CROWD_COLOR: Record<string, string> = {
  low: "text-green-400",
  medium: "text-yellow-400",
  high: "text-red-400",
};

export default function LocationPicker({ selected, onSelect }: Props) {
  const { locale } = useLanguage();

  return (
    <div>
      <p className="text-xs tracking-[0.25em] uppercase text-gold mb-3">Step 2 of 5</p>
      <h2 className="font-heading text-3xl md:text-4xl text-white mb-2">
        Choose your location
      </h2>
      <p className="text-sm text-muted mb-10">
        Each location has a different mood, light and character.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {istanbulLocations.map((loc) => {
          const title =
            locale === "fa" ? loc.title_fa : locale === "tr" ? loc.title_tr : loc.title;
          const isSelected = selected?.id === loc.id;

          return (
            <button
              key={loc.id}
              onClick={() => onSelect(loc)}
              className={`text-start border transition-all duration-300 group overflow-hidden ${
                isSelected
                  ? "border-gold"
                  : "border-white/5 hover:border-white/15"
              }`}
            >
              {/* Image */}
              <div className="aspect-[16/9] bg-surface-2 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${loc.imageUrl})`,
                    backgroundColor: "#1A1A1A",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {isSelected && (
                  <div className="absolute inset-0 bg-gold/10 flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4 bg-surface/30">
                <p
                  className={`font-heading text-base mb-1 transition-colors ${
                    isSelected ? "text-gold" : "text-white"
                  }`}
                >
                  {title}
                </p>
                <div className="flex items-center gap-4 text-[11px] text-muted mb-2">
                  <span>⏱ {loc.estimatedDuration}</span>
                  <span className={CROWD_COLOR[loc.crowdLevel]}>
                    ● {loc.crowdLevel} crowd
                  </span>
                </div>
                <p className="text-[11px] text-muted">{loc.bestTime}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
