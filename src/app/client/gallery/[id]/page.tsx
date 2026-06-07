"use client";

import { useState } from "react";

// Mock gallery data — replace with Supabase fetch
const MOCK_IMAGES = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  url: `/images/portfolio/wedding/placeholder-${(i % 9) + 1}.jpg`,
  is_favorite: false,
  note: "",
}));

export default function ClientGalleryPage({ params }: { params: { id: string } }) {
  const [images, setImages] = useState(
    MOCK_IMAGES.map((img) => ({ ...img }))
  );
  const [selectedCount, setSelectedCount] = useState(0);

  const toggleFavorite = (id: string) => {
    setImages((prev) =>
      prev.map((img) => {
        if (img.id === id) {
          const next = { ...img, is_favorite: !img.is_favorite };
          return next;
        }
        return img;
      })
    );
    setSelectedCount((prev) => {
      const img = images.find((i) => i.id === id);
      return img?.is_favorite ? prev - 1 : prev + 1;
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <div className="border-b border-white/5 px-6 py-5 flex items-center justify-between">
        <div>
          <p className="text-[10px] tracking-widest uppercase text-gold">Tavakoli Studio</p>
          <h1 className="font-heading text-xl text-white">Your Gallery</h1>
        </div>
        <div className="text-right">
          <p className="text-sm text-white">{selectedCount} selected</p>
          <p className="text-xs text-muted">Click ♡ to favorite photos</p>
        </div>
      </div>

      {/* Gallery */}
      <div
        className="max-w-7xl mx-auto px-4 py-8"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
          {images.map((img) => (
            <div key={img.id} className="relative group aspect-square bg-[#1a1a1a]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${img.url})` }}
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Favorite button */}
              <button
                onClick={() => toggleFavorite(img.id)}
                className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  img.is_favorite
                    ? "bg-gold text-bg"
                    : "bg-black/50 text-white opacity-0 group-hover:opacity-100"
                }`}
              >
                {img.is_favorite ? "♥" : "♡"}
              </button>

              {img.is_favorite && (
                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-gold text-bg text-[10px] uppercase tracking-wider">
                  Selected
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit selection */}
        {selectedCount > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-10">
            <div className="flex items-center gap-4 px-6 py-4 bg-[#0A0A0A] border border-gold/30 shadow-xl">
              <p className="text-sm text-white">{selectedCount} photos selected</p>
              <button className="px-6 py-2 bg-gold text-bg text-xs tracking-widest uppercase hover:bg-[#E8C98A] transition-colors">
                Submit Selection
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
