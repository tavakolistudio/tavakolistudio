"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type Props = {
  lang: string;
  category: string;
  index: number;
};

export default function ServiceCard({ lang, category, index }: Props) {
  const t = useTranslations("services");
  const portfolioT = useTranslations("portfolio");

  const title = t(`items.${category}.title` as any);
  const description = t(`items.${category}.description` as any);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group border border-white/5 bg-surface/30 p-8 hover:border-gold/20 transition-colors duration-500 flex flex-col"
    >
      <p className="text-xs tracking-widest text-muted-2 uppercase mb-4">
        0{index + 1}
      </p>
      <h3 className="font-heading text-xl text-white mb-4 group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-muted leading-relaxed flex-1 mb-8">
        {description}
      </p>
      <Link
        href={`/${lang}/portfolio/${category}`}
        className="text-xs tracking-widest uppercase text-gold hover:text-gold-light transition-colors duration-300 border-b border-gold/20 pb-1 self-start"
      >
        {t("view_samples")} →
      </Link>
    </motion.div>
  );
}
