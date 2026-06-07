"use client";

import { usePathname, useRouter } from "next/navigation";
import { LOCALES } from "@/lib/constants";

type Props = { lang: string };

const LABELS: Record<string, string> = {
  en: "EN",
  tr: "TR",
  fa: "FA",
};

export default function LanguageSwitcher({ lang }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center gap-2">
      {LOCALES.map((locale) => (
        <button
          key={locale}
          onClick={() => switchTo(locale)}
          className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
            lang === locale
              ? "text-gold"
              : "text-muted hover:text-white"
          }`}
        >
          {LABELS[locale]}
        </button>
      ))}
    </div>
  );
}
