"use client";

import { useState } from "react";
import Link from "next/link";
import { budgetItems as defaultItems } from "@/data/packages";
import type { BudgetItem } from "@/types";

function calcTotal(items: BudgetItem[]): [number, number] {
  const sel = items.filter((i) => i.selected);
  if (!sel.length) return [0, 0];
  return [
    sel.reduce((s, i) => s + i.priceRange[0], 0),
    sel.reduce((s, i) => s + i.priceRange[1], 0),
  ];
}

export default function BudgetCalculatorPage() {
  const [items, setItems] = useState<BudgetItem[]>(defaultItems);

  const toggle = (id: string) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, selected: !i.selected } : i)));

  const total = calcTotal(items);
  const hasSelection = total[0] > 0;

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-16">
      <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Planning Tool</p>
      <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
        Budget Calculator
      </h1>
      <p className="text-muted text-sm mb-12 max-w-xl leading-relaxed">
        Select the services you need and get an estimated price range. This helps you plan
        your budget before we discuss the final quote.
      </p>

      {/* Items */}
      <div className="space-y-3 mb-10">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => toggle(item.id)}
            className={`w-full flex items-center justify-between p-5 border text-start transition-all duration-300 group ${
              item.selected
                ? "border-gold bg-gold/5"
                : "border-white/5 bg-surface/20 hover:border-white/15"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                  item.selected ? "border-gold bg-gold" : "border-white/20"
                }`}
              >
                {item.selected && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </div>
              <div>
                <p className={`text-sm font-medium ${item.selected ? "text-gold" : "text-white"}`}>
                  {item.label}
                </p>
              </div>
            </div>
            <p className={`text-sm shrink-0 ${item.selected ? "text-gold" : "text-muted"}`}>
              ${item.priceRange[0]}–${item.priceRange[1]}
            </p>
          </button>
        ))}
      </div>

      {/* Total */}
      <div className={`p-8 border mb-8 ${hasSelection ? "border-gold/30 bg-gold/5" : "border-white/5 bg-surface/20"}`}>
        {hasSelection ? (
          <>
            <p className="text-xs tracking-widest uppercase text-gold mb-3">
              Your Estimated Range
            </p>
            <p className="font-heading text-5xl text-white mb-4">
              ${total[0].toLocaleString()}
              <span className="text-muted text-3xl"> – </span>
              ${total[1].toLocaleString()}
            </p>
            <p className="text-xs text-muted leading-relaxed">
              ⓘ Final price depends on date, location, production complexity and availability.
              This is an estimate to help you plan.
            </p>
          </>
        ) : (
          <p className="text-sm text-muted">
            Select services above to calculate your estimated budget.
          </p>
        )}
      </div>

      {/* CTA */}
      {hasSelection && (
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/booking"
            className="flex-1 text-center py-4 bg-gold text-bg text-sm tracking-widest uppercase hover:bg-gold-light transition-colors"
          >
            Book Now
          </Link>
          <a
            href={`https://wa.me/905528309873?text=${encodeURIComponent(`Hello! I'm planning a photoshoot and my estimated budget is $${total[0]}–$${total[1]}. I'd love to discuss details.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-gold/40 hover:text-gold transition-colors"
          >
            Discuss on WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
