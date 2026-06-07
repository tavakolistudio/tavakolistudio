"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import GalleryGrid from "./GalleryGrid";
import { INSTAGRAM_URL, WHATSAPP_URL, GALLERY_PLACEHOLDER_COUNT } from "@/lib/constants";
import type { PortfolioCategory } from "@/lib/constants";

type Props = {
  lang: string;
  category: PortfolioCategory;
};

function buildPlaceholders(category: string) {
  return Array.from({ length: GALLERY_PLACEHOLDER_COUNT }, (_, i) => ({
    id: i + 1,
    src: `/images/portfolio/${category}/placeholder-${i + 1}.jpg`,
    alt: `${category} ${i + 1}`,
  }));
}

export default function PortfolioCategoryPage({ lang, category }: Props) {
  const t = useTranslations("portfolio");
  const items = buildPlaceholders(category);

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted mb-12">
          <Link href={`/${lang}`} className="hover:text-white transition-colors">
            {t("cta.back").includes("Services") ? "Home" : t("cta.back")}
          </Link>
          <span className="text-muted-2">→</span>
          <Link href={`/${lang}/portfolio`} className="hover:text-white transition-colors">
            {t("label")}
          </Link>
          <span className="text-muted-2">→</span>
          <span className="text-white">{t(`categories.${category}.title` as any)}</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-6">
            {t(`categories.${category}.title` as any)}
          </h1>
          <p className="text-muted text-base max-w-xl leading-relaxed">
            {t(`categories.${category}.description` as any)}
          </p>
        </motion.div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-6">
        <GalleryGrid items={items} category={category} />
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            {t("cta.heading")}
          </h2>
          <p className="text-muted mb-10 text-sm">
            {t("cta.sub")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold text-bg text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors duration-300"
            >
              {t("cta.whatsapp")}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-gold/50 hover:text-gold transition-colors duration-300"
            >
              {t("cta.instagram")}
            </a>
            <Link
              href={`/${lang}/services`}
              className="px-8 py-4 border border-white/10 text-muted text-sm tracking-widest uppercase hover:border-white/30 hover:text-white transition-colors duration-300"
            >
              {t("cta.back")}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
