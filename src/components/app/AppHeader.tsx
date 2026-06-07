"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { AppLocale } from "@/types";
import { INSTAGRAM_URL } from "@/lib/constants";

const LOCALES: { code: AppLocale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fa", label: "FA" },
  { code: "tr", label: "TR" },
];

export default function AppHeader() {
  const { t, locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/planner", key: "nav.planner" },
    { href: "/locations", key: "nav.locations" },
    { href: "/ai-preview", key: "nav.ai_preview" },
    { href: "/pose-coach", key: "nav.pose_coach" },
    { href: "/budget-calculator", key: "nav.budget" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
        {/* Back to main site + Logo */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/en"
            className="hidden sm:flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-muted-2 hover:text-gold transition-colors duration-300 group"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-0.5 transition-transform duration-300">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Site
          </Link>
          <span className="hidden sm:block w-px h-4 bg-white/10" />
          <Link href="/planner" className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-body">
              Tavakoli
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted font-body">
              AI Studio
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] tracking-widest uppercase text-muted hover:text-white transition-colors duration-300"
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Language */}
          <div className="flex items-center gap-2">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => setLocale(l.code)}
                className={`text-[10px] tracking-widest uppercase transition-colors duration-200 ${
                  locale === l.code ? "text-gold" : "text-muted hover:text-white"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Book CTA */}
          <Link
            href="/booking"
            className="hidden sm:block px-4 py-2 bg-gold text-bg text-[10px] tracking-widest uppercase font-medium hover:bg-gold-light transition-colors duration-300"
          >
            {t("nav.booking")}
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-muted hover:text-white transition-colors"
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-surface/95 backdrop-blur-sm border-t border-white/5">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-xs tracking-widest uppercase text-muted hover:text-white transition-colors"
              >
                {t(l.key)}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="text-xs tracking-widest uppercase text-gold"
            >
              {t("nav.booking")}
            </Link>
            <div className="pt-2 border-t border-white/5">
              <Link
                href="/en"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-xs tracking-widest uppercase text-muted-2 hover:text-gold transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 5l-7 7 7 7"/>
                </svg>
                Back to Main Site
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
