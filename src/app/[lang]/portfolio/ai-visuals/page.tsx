import { setRequestLocale } from "next-intl/server";
import PortfolioCategoryPage from "@/components/PortfolioCategoryPage";
type Props = { params: { lang: string } };
export default function Page({ params: { lang } }: Props) {
  setRequestLocale(lang);
  return <PortfolioCategoryPage lang={lang} category="ai-visuals" />;
}
