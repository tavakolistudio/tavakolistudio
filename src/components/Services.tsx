"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ServiceCard from "./ServiceCard";
import { PORTFOLIO_CATEGORIES } from "@/lib/constants";

type Props = { lang: string; showHeading?: boolean };

export default function Services({ lang, showHeading = true }: Props) {
  const t = useTranslations("services");

  return (
    <section className="py-32 px-6 bg-surface/10">
      <div className="max-w-7xl mx-auto">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              {t("label")}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-white">
              {t("heading")}
            </h2>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {PORTFOLIO_CATEGORIES.map((category, i) => (
            <ServiceCard key={category} lang={lang} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
