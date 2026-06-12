"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";

type Website = {
  id: number;
  title: string;
  description: string;
  url: string;
  cover: string;
};

const websites: Website[] = [
  {
    id: 1,
    title: "Tavakoli Studio",
    description: "Premium Visual Studio — Istanbul",
    url: "https://tavakolistudio.vercel.app/en",
    cover: "/images/portfolio/website-design/tavakolistudio.jpg",
  },
  {
    id: 2,
    title: "SaksiMaksi",
    description: "Beton Saksı Modelleri — Yalova",
    url: "https://saksi-maksi.vercel.app/",
    cover: "/images/portfolio/website-design/saksimaksi.jpg",
  },
  {
    id: 3,
    title: "Caffe Gallery",
    description: "Cafe & Gallery",
    url: "https://caffegallery.vercel.app/",
    cover: "/images/portfolio/website-design/caffegallery.jpg",
  },
  {
    id: 4,
    title: "Nurio Plex",
    description: "Brand Website",
    url: "https://nurio-plex.vercel.app/",
    cover: "/images/portfolio/website-design/nurioplex.jpg",
  },
  {
    id: 5,
    title: "NurioPet",
    description: "Pet Brand Website",
    url: "https://nuriopet.vercel.app/",
    cover: "/images/portfolio/website-design/nuriopet.jpg",
  },
];

const ExternalLinkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

function WebsiteCard({ site, index }: { site: Website; index: number }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <a
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative overflow-hidden bg-surface"
        aria-label={`Visit ${site.title}`}
      >
        {/* Cover image */}
        <div className="aspect-[16/10] relative overflow-hidden bg-[#111]">
          {!imgFailed ? (
            <Image
              src={site.cover}
              alt={site.title}
              fill
              loading={index < 4 ? "eager" : "lazy"}
              onError={() => setImgFailed(true)}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center">
              <span className="font-heading text-2xl text-white/20 tracking-widest">
                {site.title}
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />

          {/* Hover visit button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="flex items-center gap-2 px-5 py-3 bg-gold text-bg text-xs tracking-widest uppercase font-medium">
              Visit Website <ExternalLinkIcon />
            </span>
          </div>
        </div>

        {/* Card footer */}
        <div className="px-5 py-4 bg-surface border-t border-white/5 group-hover:border-gold/20 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white text-sm font-medium group-hover:text-gold transition-colors duration-300">
                {site.title}
              </h3>
              <p className="text-muted text-xs mt-0.5">{site.description}</p>
            </div>
            <span className="text-muted group-hover:text-gold transition-colors duration-300">
              <ExternalLinkIcon />
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

type Props = { lang: string };

export default function WebsiteDesignPortfolio({ lang }: Props) {
  const t = useTranslations("portfolio");
  const tc = useTranslations("common");

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <nav className="flex items-center gap-2 text-xs text-muted mb-12">
          <Link href={`/${lang}`} className="hover:text-white transition-colors">
            {tc("breadcrumb_home")}
          </Link>
          <span className="text-muted-2">→</span>
          <Link href={`/${lang}/portfolio`} className="hover:text-white transition-colors">
            {t("label")}
          </Link>
          <span className="text-muted-2">→</span>
          <span className="text-white">{t("categories.website-design.title")}</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-6">
            {t("categories.website-design.title")}
          </h1>
          <p className="text-muted text-base max-w-xl leading-relaxed">
            {t("categories.website-design.description")}
          </p>
        </motion.div>
      </div>

      {/* Website Cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {websites.map((site, i) => (
            <WebsiteCard key={site.id} site={site} index={i} />
          ))}
        </div>
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
          <p className="text-muted mb-10 text-sm">{t("cta.sub")}</p>

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
