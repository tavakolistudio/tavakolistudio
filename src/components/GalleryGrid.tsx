"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type Props = {
  items: GalleryItem[];
  category: string;
};

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function GalleryGrid({ items, category }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex !== null ? items[selectedIndex] : null;

  const prev = useCallback(() => {
    setSelectedIndex((i) => (i !== null ? (i - 1 + items.length) % items.length : null));
  }, [items.length]);

  const next = useCallback(() => {
    setSelectedIndex((i) => (i !== null ? (i + 1) % items.length : null));
  }, [items.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setSelectedIndex(null);
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }, [prev, next]);

  useEffect(() => {
    if (selected) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected, handleKeyDown]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            onClick={() => setSelectedIndex(i)}
            aria-label={`View photo: ${item.alt}`}
            className="aspect-[4/3] relative overflow-hidden bg-surface group cursor-pointer"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              unoptimized
              loading={i < 6 ? "eager" : "lazy"}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
            <span className="absolute bottom-3 right-3 text-white/50 text-[10px] tracking-[0.2em] uppercase font-light select-none pointer-events-none">
              BY: TAVAKOLISTUDIO
            </span>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && selectedIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selected.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-2 z-10"
              aria-label="Previous photo"
            >
              <ChevronLeft />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                width={selected.width || 1200}
                height={selected.height || 800}
                unoptimized
                className="object-contain max-h-[85vh] w-full"
              />
              <span className="absolute bottom-4 right-4 text-white/40 text-xs tracking-[0.25em] uppercase font-light select-none pointer-events-none">
                BY: TAVAKOLISTUDIO
              </span>
              <span className="absolute bottom-4 left-4 text-white/30 text-xs font-light select-none pointer-events-none">
                {selectedIndex + 1} / {items.length}
              </span>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-2 z-10"
              aria-label="Next photo"
            >
              <ChevronRight />
            </button>

            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <CloseIcon />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
