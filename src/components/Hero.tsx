"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { AntiGravityCanvas } from "@/components/ui/particle-effect-for-hero";

type Props = { lang: string };

export default function Hero({ lang }: Props) {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black cursor-crosshair">
      {/* Particle canvas background */}
      <AntiGravityCanvas />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-bg/80 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs tracking-[0.3em] uppercase text-gold mb-8"
        >
          Istanbul
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
        >
          Tavakoli Studio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl font-heading italic text-white/70 mb-4"
        >
          {t("tagline")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-sm text-muted max-w-xl mx-auto mb-12 leading-relaxed"
        >
          {t("sub")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
        >
          <Link
            href={`/${lang}/contact`}
            className="px-8 py-4 bg-gold text-bg text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors duration-300"
          >
            {t("cta_primary")}
          </Link>
          <Link
            href={`/${lang}/portfolio`}
            className="px-8 py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-white/50 transition-colors duration-300"
          >
            {t("cta_secondary")}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-8 pointer-events-auto"
        >
          <Link
            href="/planner"
            className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-gold/70 hover:text-gold transition-colors duration-300 group"
          >
            <span className="w-8 h-px bg-gold/40 group-hover:bg-gold transition-colors duration-300" />
            Plan Your Shoot with AI Studio
            <span className="w-8 h-px bg-gold/40 group-hover:bg-gold transition-colors duration-300" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-widest uppercase text-muted">Scroll</span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gold/40 origin-top"
        />
      </motion.div>
    </section>
  );
}
