"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { istanbulLocations } from "@/data/locations";
import type { Location } from "@/types";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "romantic", label: "Romantic" },
  { id: "historical", label: "Historical" },
  { id: "luxury", label: "Luxury" },
  { id: "street", label: "Street" },
  { id: "sea view", label: "Sea View" },
  { id: "sunrise", label: "Sunrise" },
  { id: "sunset", label: "Sunset" },
  { id: "low crowd", label: "Low Crowd" },
];

const CROWD_BADGE: Record<string, string> = {
  low: "bg-green-400/10 text-green-400",
  medium: "bg-yellow-400/10 text-yellow-400",
  high: "bg-red-400/10 text-red-400",
};

export default function LocationsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? istanbulLocations
      : istanbulLocations.filter((l) => l.tags.includes(activeFilter));

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-4">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Istanbul</p>
        <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">
          Shooting Locations
        </h1>
        <p className="text-muted text-sm max-w-xl">
          Nine premium locations across Istanbul. Each one tells a different story.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 text-xs tracking-widest uppercase border transition-colors duration-200 ${
                activeFilter === f.id
                  ? "border-gold text-gold bg-gold/5"
                  : "border-white/10 text-muted hover:border-white/25 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {filtered.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden bg-surface-2">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${loc.imageUrl})`,
                    backgroundColor: "#1a1a1a",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {loc.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-black/50 backdrop-blur-sm text-[10px] text-white/60 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-6 bg-surface/20 border border-white/5 border-t-0">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="font-heading text-xl text-white group-hover:text-gold transition-colors">
                    {loc.title}
                  </h2>
                  <span
                    className={`text-[10px] px-2 py-1 uppercase tracking-wider shrink-0 ${
                      CROWD_BADGE[loc.crowdLevel]
                    }`}
                  >
                    {loc.crowdLevel} crowd
                  </span>
                </div>

                <p className="text-xs text-muted leading-relaxed mb-4">
                  {loc.description}
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs text-muted mb-5">
                  <div>
                    <p className="text-muted-2 uppercase tracking-wider text-[10px] mb-1">
                      Best Time
                    </p>
                    <p>{loc.bestTime}</p>
                  </div>
                  <div>
                    <p className="text-muted-2 uppercase tracking-wider text-[10px] mb-1">
                      Duration
                    </p>
                    <p>{loc.estimatedDuration}</p>
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-[10px] uppercase tracking-wider text-muted-2 mb-1">
                    Outfit Colors
                  </p>
                  <p className="text-xs text-white/70">{loc.outfitSuggestion}</p>
                </div>

                <Link
                  href={`/planner?location=${loc.slug}`}
                  className="block text-center py-3 border border-gold/30 text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-bg transition-colors duration-300"
                >
                  Plan Shoot Here →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
