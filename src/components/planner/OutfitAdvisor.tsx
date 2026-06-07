"use client";

import type { Location, VisualStyle } from "@/types";

type Props = {
  location: Location | null;
  style: VisualStyle | null;
};

const AVOID_LIST = [
  "Matching outfits that make you look like twins",
  "Logos or graphic tees",
  "Overly bright neon colors",
  "Very short skirts in windy outdoor locations",
  "All-black couple outfits in dark settings",
];

const ACCESSORIES = [
  "Delicate gold jewelry reflects beautifully on camera",
  "Scarves / shawls add movement and elegance",
  "Hats work for casual and editorial styles",
  "Keep it minimal — less is more on camera",
];

const COUPLE_TIPS = [
  "Coordinate colors, but don't match exactly",
  "One person can wear a pattern if the other is solid",
  "Consider your location's backdrop colors",
  "Comfort matters — if it's uncomfortable, it shows",
];

export default function OutfitAdvisor({ location, style }: Props) {
  return (
    <div>
      <p className="text-xs tracking-[0.25em] uppercase text-gold mb-3">Step 4 of 5</p>
      <h2 className="font-heading text-3xl md:text-4xl text-white mb-2">
        Outfit Advisor
      </h2>
      <p className="text-sm text-muted mb-10">
        Personalized recommendations based on your location and style.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Location-specific advice */}
        {location && (
          <div className="p-8 border border-gold/20 bg-gold/5">
            <p className="text-[10px] tracking-widest uppercase text-gold mb-4">
              {location.title}
            </p>
            <h3 className="font-heading text-xl text-white mb-4">
              Color Recommendation
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
              Style: {style}
            </p>
            <h3 className="font-heading text-xl text-white mb-4">
              Style Direction
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {style === "cinematic" &&
                "Aim for timeless, structured pieces. Think film noir — dark coats, neutral tones, elegant silhouettes."}
              {style === "luxury" &&
                "Full luxury styling. Evening gowns, tailored suits, statement accessories. Every detail counts."}
              {style === "romantic" &&
                "Flowy fabrics, soft pastels, lace details. Think dreamlike and ethereal."}
              {style === "editorial" &&
                "Bold choices. Strong silhouettes, high-fashion pieces, unexpected combinations."}
              {style === "documentary" &&
                "Look like yourself, just polished. Natural, authentic — avoid costume-like outfits."}
              {style === "minimal" &&
                "Clean lines, solid colors, premium basics. The less, the better."}
              {style === "social-media" &&
                "Bright, eye-catching, Instagram-ready. Think trendy but tasteful."}
              {style === "drone" &&
                "Colors that stand out from above — avoid blending into the environment."}
            </p>
          </div>
        )}

        {/* Avoid list */}
        <div className="p-8 border border-white/5 bg-surface/20">
          <h3 className="font-heading text-xl text-white mb-5">Avoid These</h3>
          <ul className="space-y-3">
            {AVOID_LIST.map((item, i) => (
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
            Couple Coordination
          </h3>
          <ul className="space-y-3">
            {COUPLE_TIPS.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted">
                <span className="text-gold mt-0.5 shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Accessories */}
        <div className="p-8 border border-white/5 bg-surface/20 lg:col-span-2">
          <h3 className="font-heading text-xl text-white mb-5">Accessories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ACCESSORIES.map((item, i) => (
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
