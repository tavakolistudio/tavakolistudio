import { setRequestLocale, getTranslations } from "next-intl/server";
import { ServicesHero } from "@/components/ServicesHero";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";
import InstagramCTA from "@/components/InstagramCTA";

type Props = { params: { lang: string } };

export default async function ServicesPage({ params: { lang } }: Props) {
  setRequestLocale(lang);
  const t = await getTranslations("services");

  return (
    <>
      <div className="pt-20">
        <ServicesHero
          label={t("label")}
          heading={t("heading")}
          description={t("hero_description")}
        />
      </div>
      <Services lang={lang} showHeading={false} />
      <ContactCTA />
      <InstagramCTA />
    </>
  );
}
