import Link from "next/link";
import { useTranslations } from "next-intl";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, WHATSAPP_URL, EMAIL, PHONE } from "@/lib/constants";

type Props = { lang: string };

export default function Footer({ lang }: Props) {
  const t = useTranslations();

  const navLinks = [
    { href: `/${lang}`, label: t("nav.home") },
    { href: `/${lang}/about`, label: t("nav.about") },
    { href: `/${lang}/services`, label: t("nav.services") },
    { href: `/${lang}/portfolio`, label: t("nav.portfolio") },
    { href: `/${lang}/contact`, label: t("nav.contact") },
  ];

  return (
    <footer className="border-t border-white/5 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href={`/${lang}`}
              className="font-heading text-lg tracking-widest uppercase text-white hover:text-gold transition-colors duration-300 block mb-4"
            >
              Tavakoli Studio
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-widest uppercase text-muted-2 mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted hover:text-white transition-colors duration-300"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-muted-2 mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm text-muted hover:text-white transition-colors duration-300"
              >
                {EMAIL}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-white transition-colors duration-300"
              >
                {PHONE}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold hover:text-gold-light transition-colors duration-300"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-2">{t("footer.copyright")}</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-gold transition-colors duration-300 tracking-wider"
          >
            {t("common.follow_instagram")}
          </a>
        </div>
      </div>
    </footer>
  );
}
