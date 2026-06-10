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

export default function GalleryGrid({ items, category }: Props) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setSelected(null);
  }, []);

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
            onClick={() => setSelected(item)}
            aria-label={`View photo: ${item.alt}`}
            className="aspect-[4/3] relative overflow-hidden bg-surface group cursor-pointer"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              loading={i < 6 ? "eager" : "lazy"}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selected.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                width={selected.width || 1200}
                height={selected.height || 800}
                className="object-contain max-h-[85vh] w-full"
              />
            </motion.div>
            <button
              onClick={() => setSelected(null)}
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
