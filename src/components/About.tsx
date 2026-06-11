"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type Props = { lang: string };

export default function About({ lang }: Props) {
  const t = useTranslations("about");

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] bg-surface-2 relative overflow-hidden"
          >
            <Image
              src="/images/about-placeholder.png"
              alt="Tavakoli Studio — behind the lens"
              fill
              quality={90}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 360px"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
              {t("label")}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-8 leading-snug">
              {t("heading")}
            </h2>
            <p className="text-muted text-base leading-loose mb-10 max-w-md">
              {t("body")}
            </p>
            <Link
              href={`/${lang}/about`}
              className="text-sm tracking-widest uppercase text-gold hover:text-gold-light transition-colors duration-300 border-b border-gold/30 pb-1"
            >
              {t("cta")} →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
