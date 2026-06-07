import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LOCALES } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: { lang: string };
};

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  return {
    title: "Tavakoli Studio — Premium Visual Studio Istanbul",
    description:
      "Cinematic wedding photography, brand video production, and premium visual content in Istanbul.",
  };
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = params;

  if (!LOCALES.includes(lang as (typeof LOCALES)[number])) {
    notFound();
  }

  setRequestLocale(lang);
  const messages = await getMessages();
  const dir = lang === "fa" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-bg text-white font-body">
        <NextIntlClientProvider messages={messages}>
          <Header lang={lang} />
          <main>{children}</main>
          <Footer lang={lang} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
