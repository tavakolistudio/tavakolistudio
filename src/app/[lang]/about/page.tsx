import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import ContactCTA from "@/components/ContactCTA";
import InstagramCTA from "@/components/InstagramCTA";
import { EMAIL, PHONE, INSTAGRAM_URL, INSTAGRAM_HANDLE, WHATSAPP_URL } from "@/lib/constants";

type Props = { params: { lang: string } };

export default async function AboutPage({ params: { lang } }: Props) {
  setRequestLocale(lang);
  const t = await getTranslations("about");

  return (
    <>
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">{t("label")}</p>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-12 leading-tight">
            {t("heading")}
          </h1>
          <div className="aspect-video bg-surface-2 mb-16 overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/about-full.jpg')" }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <p className="text-muted leading-loose text-base">{t("body")}</p>
            <div>
              <p className="text-muted leading-loose text-base mb-6">
                We work with weddings, brands, and creative projects that deserve to be told beautifully.
                Our studio is built on craft, attention to detail, and a deep love for light.
              </p>
              <p className="text-muted leading-loose text-base">
                Based in Istanbul — one of the world&apos;s most cinematic cities — we bring a unique
                visual language to every project we take on.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactCTA />
      <InstagramCTA />
    </>
  );
}
