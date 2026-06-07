import { setRequestLocale, getTranslations } from "next-intl/server";
import PortfolioOverview from "@/components/PortfolioOverview";
import ContactCTA from "@/components/ContactCTA";
import InstagramCTA from "@/components/InstagramCTA";

type Props = { params: { lang: string } };

export default async function PortfolioPage({ params: { lang } }: Props) {
  setRequestLocale(lang);
  const t = await getTranslations("portfolio");

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-4">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">{t("label")}</p>
        <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">{t("heading")}</h1>
        <p className="text-muted text-sm">{t("sub")}</p>
      </div>
      <PortfolioOverview lang={lang} />
      <ContactCTA />
      <InstagramCTA />
    </div>
  );
}
