"use client";

import { useState } from "react";
import type { BudgetItem } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  items: BudgetItem[];
  onChange: (items: BudgetItem[], total: [number, number]) => void;
};

function calcTotal(items: BudgetItem[]): [number, number] {
  const selected = items.filter((i) => i.selected);
  if (!selected.length) return [0, 0];
  const low = selected.reduce((s, i) => s + i.priceRange[0], 0);
  const high = selected.reduce((s, i) => s + i.priceRange[1], 0);
  return [low, high];
}

export default function BudgetStep({ items, onChange }: Props) {
  const [localItems, setLocalItems] = useState<BudgetItem[]>(items);
  const { t } = useLanguage();

  const toggle = (id: string) => {
    const updated = localItems.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setLocalItems(updated);
    onChange(updated, calcTotal(updated));
  };

  const total = calcTotal(localItems);
  const hasSelection = total[0] > 0;

  return (
    <div>
      <p className="text-xs tracking-[0.25em] uppercase text-gold mb-3">{t("step.5of5")}</p>
      <h2 className="font-heading text-3xl md:text-4xl text-white mb-2">
        {t("p5.title")}
      </h2>
      <p className="text-sm text-muted mb-10">{t("p5.sub")}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
        {localItems.map((item) => (
          <button
            key={item.id}
            onClick={() => toggle(item.id)}
            className={`flex items-center justify-between p-5 border text-start transition-all duration-300 group ${
              item.selected
                ? "border-gold bg-gold/5"
                : "border-white/5 bg-surface/30 hover:border-white/15"
            }`}
          >
            <div>
              <p
                className={`text-sm font-medium mb-1 transition-colors ${
                  item.selected ? "text-gold" : "text-white"
                }`}
              >
                {item.label}
              </p>
              <p className="text-xs text-muted">
                ${item.priceRange[0]}–${item.priceRange[1]}
              </p>
            </div>
            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                item.selected ? "border-gold bg-gold" : "border-white/20"
              }`}
            >
              {item.selected && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4L3.5 6.5L9 1"
                    stroke="#0A0A0A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Total */}
      <div className="p-8 border border-gold/20 bg-gold/5">
        {hasSelection ? (
          <>
            <p className="text-xs tracking-widest uppercase text-gold mb-2">
              {t("budget.range")}
            </p>
            <p className="font-heading text-4xl text-white">
              ${total[0].toLocaleString()}
              <span className="text-muted text-2xl"> – </span>${total[1].toLocaleString()}
            </p>
            <p className="text-xs text-muted mt-4 leading-relaxed">
              {t("budget.note")}
            </p>
          </>
        ) : (
          <p className="text-sm text-muted">
            {t("budget.empty")}
          </p>
        )}
      </div>
    </div>
  );
}
