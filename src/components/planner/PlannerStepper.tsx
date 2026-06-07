"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProjectTypePicker from "./ProjectTypePicker";
import LocationPicker from "./LocationPicker";
import StylePicker from "./StylePicker";
import OutfitAdvisor from "./OutfitAdvisor";
import BudgetStep from "./BudgetStep";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { PlannerState, ProjectType, VisualStyle, Location } from "@/types";
import { budgetItems as defaultItems } from "@/data/packages";

const STEPS = [
  { num: 1, label: "Project" },
  { num: 2, label: "Location" },
  { num: 3, label: "Style" },
  { num: 4, label: "Outfit" },
  { num: 5, label: "Budget" },
];

const initialState: PlannerState = {
  step: 1,
  projectType: null,
  location: null,
  style: null,
  outfitNotes: "",
  budgetItems: defaultItems,
  totalBudget: [0, 0],
};

export default function PlannerStepper() {
  const [state, setState] = useState<PlannerState>(initialState);
  const [done, setDone] = useState(false);

  const update = (patch: Partial<PlannerState>) =>
    setState((s) => ({ ...s, ...patch }));

  const next = () => update({ step: Math.min(state.step + 1, 5) });
  const back = () => update({ step: Math.max(state.step - 1, 1) });

  const waLink = state.location
    ? buildWhatsAppLink({
        name: "a client",
        projectType: state.projectType ?? "",
        location: state.location.title,
        date: "TBD",
        style: state.style ?? "",
        budgetRange: `$${state.totalBudget[0]}–$${state.totalBudget[1]}`,
      })
    : "#";

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 gap-8"
      >
        <div className="w-16 h-px bg-gold mx-auto" />
        <h2 className="font-heading text-4xl md:text-5xl text-white">
          Your plan is ready.
        </h2>
        <p className="text-muted max-w-sm leading-relaxed text-sm">
          {state.location?.title} · {state.style} · ${state.totalBudget[0]}–$
          {state.totalBudget[1]}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gold text-bg text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors duration-300"
          >
            Book on WhatsApp
          </a>
          <Link
            href="/booking"
            className="px-8 py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-gold/40 hover:text-gold transition-colors duration-300"
          >
            Fill Booking Form
          </Link>
        </div>
        <button
          onClick={() => { setState(initialState); setDone(false); }}
          className="text-xs text-muted hover:text-white transition-colors tracking-widest uppercase mt-2"
        >
          Start Over
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-14">
        {STEPS.map((s, i) => (
          <div key={s.num} className="flex items-center gap-2 flex-1">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-medium transition-colors duration-300 ${
                  state.step >= s.num
                    ? "bg-gold text-bg"
                    : "bg-surface-2 text-muted"
                }`}
              >
                {state.step > s.num ? "✓" : s.num}
              </div>
              <span
                className={`text-[10px] tracking-wider uppercase hidden sm:block ${
                  state.step >= s.num ? "text-gold" : "text-muted-2"
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`flex-1 h-px transition-colors duration-300 ${
                  state.step > s.num ? "bg-gold/40" : "bg-white/5"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={state.step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {state.step === 1 && (
            <ProjectTypePicker
              selected={state.projectType}
              onSelect={(v) => update({ projectType: v as ProjectType })}
            />
          )}
          {state.step === 2 && (
            <LocationPicker
              selected={state.location}
              onSelect={(v) => update({ location: v })}
            />
          )}
          {state.step === 3 && (
            <StylePicker
              selected={state.style}
              onSelect={(v) => update({ style: v as VisualStyle })}
            />
          )}
          {state.step === 4 && (
            <OutfitAdvisor
              location={state.location}
              style={state.style}
            />
          )}
          {state.step === 5 && (
            <BudgetStep
              items={state.budgetItems}
              onChange={(items, total) =>
                update({ budgetItems: items, totalBudget: total })
              }
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
        <button
          onClick={back}
          disabled={state.step === 1}
          className="text-xs tracking-widest uppercase text-muted hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Back
        </button>

        {state.step < 5 ? (
          <button
            onClick={next}
            disabled={
              (state.step === 1 && !state.projectType) ||
              (state.step === 2 && !state.location) ||
              (state.step === 3 && !state.style)
            }
            className="px-8 py-3 bg-gold text-bg text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={() => setDone(true)}
            className="px-8 py-3 bg-gold text-bg text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-colors duration-300"
          >
            See My Plan →
          </button>
        )}
      </div>
    </div>
  );
}
