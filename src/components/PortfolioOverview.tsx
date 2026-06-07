"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PORTFOLIO_CATEGORIES } from "@/lib/constants";

type Props = { lang: string };

export default function PortfolioOverview({ lang }: Props) {
  const t = useTranslations("portfolio");

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {PORTFOLIO_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                href={`/${lang}/portfolio/${cat}`}
                className="group block aspect-[3/4] relative overflow-hidden bg-surface"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('/images/portfolio/${cat}/cover.jpg')`, backgroundColor: "#1A1A1A" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:from-black/70 transition-all duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs tracking-widest uppercase text-gold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Work
                  </p>
                  <h3 className="font-heading text-lg text-white group-hover:text-gold transition-colors duration-300">
                    {t(`categories.${cat}.title` as any)}
                  </h3>
                  <p className="text-xs text-muted mt-2 leading-relaxed">
                    {t(`categories.${cat}.short` as any)}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
