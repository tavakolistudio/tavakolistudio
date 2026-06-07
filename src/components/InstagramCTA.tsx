"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/constants";

export default function InstagramCTA() {
  const t = useTranslations("common");

  return (
    <div className="text-center py-8">
      <motion.a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-muted hover:text-gold transition-colors duration-300"
      >
        <span className="w-8 h-px bg-muted-2" />
        {t("follow_instagram")} {INSTAGRAM_HANDLE}
        <span className="w-8 h-px bg-muted-2" />
      </motion.a>
    </div>
  );
}
