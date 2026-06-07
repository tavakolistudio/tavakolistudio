import { setRequestLocale, getTranslations } from "next-intl/server";
import InstagramCTA from "@/components/InstagramCTA";
import { EMAIL, PHONE, INSTAGRAM_URL, INSTAGRAM_HANDLE, WHATSAPP_URL } from "@/lib/constants";

type Props = { params: { lang: string } };

export default async function ContactPage({ params: { lang } }: Props) {
  setRequestLocale(lang);
  const t = await getTranslations("contact");

  return (
    <>
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">{t("label")}</p>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-16 leading-tight">
            {t("heading")}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-2 mb-3">WhatsApp</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold transition-colors duration-300"
                >
                  {PHONE}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-2 mb-3">Email</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white hover:text-gold transition-colors duration-300"
                >
                  {EMAIL}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-2 mb-3">Instagram</p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors duration-300"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-2 mb-3">Location</p>
                <p className="text-white">Istanbul, Turkey</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-muted leading-loose text-sm">{t("sub")}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-8 py-4 bg-gold text-bg text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors duration-300 self-start"
              >
                {t("whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <InstagramCTA />
    </>
  );
}
