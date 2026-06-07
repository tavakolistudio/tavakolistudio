"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { INSTAGRAM_URL, WHATSAPP_URL, EMAIL } from "@/lib/constants";

export default function ContactCTA() {
  const t = useTranslations("contact");

  return (
    <section className="py-32 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
            {t("label")}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
            {t("heading")}
          </h2>
          <p className="text-muted mb-12 leading-relaxed">
            {t("sub")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold text-bg text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors duration-300"
            >
              {t("whatsapp")}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-gold/50 hover:text-gold transition-colors duration-300"
            >
              {t("instagram")}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="px-8 py-4 border border-white/10 text-muted text-sm tracking-widest uppercase hover:border-white/30 hover:text-white transition-colors duration-300"
            >
              {t("email_label")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
