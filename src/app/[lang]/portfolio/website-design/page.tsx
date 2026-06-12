import { setRequestLocale } from "next-intl/server";
import WebsiteDesignPortfolio from "@/components/WebsiteDesignPortfolio";

type Props = { params: { lang: string } };

export default function Page({ params: { lang } }: Props) {
  setRequestLocale(lang);
  return <WebsiteDesignPortfolio lang={lang} />;
}
