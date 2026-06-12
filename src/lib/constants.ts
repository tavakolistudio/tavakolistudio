export const INSTAGRAM_URL = "https://www.instagram.com/tavakolistudio";
export const INSTAGRAM_HANDLE = "@tavakolistudio";
export const WHATSAPP_URL = "https://wa.me/905016967777";
export const EMAIL = "info@tavakolistudio.com";
export const PHONE = "+90 501 696 7777";

export const LOCALES = ["en", "tr", "fa"] as const;
export type Locale = (typeof LOCALES)[number];

export const PORTFOLIO_CATEGORIES = [
  "wedding",
  "couple",
  "commercial",
  "industrial",
  "brand-video",
  "social-media",
  "drone",
  "ai-visuals",
  "website-design",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export const GALLERY_PLACEHOLDER_COUNT = 9;
