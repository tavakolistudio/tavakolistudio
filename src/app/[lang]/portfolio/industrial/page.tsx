import { setRequestLocale } from "next-intl/server";
import PortfolioCategoryPage from "@/components/PortfolioCategoryPage";

type Props = { params: { lang: string } };

const industrialImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/portfolio/industrial/${i + 1}.png`,
  alt: `Industrial photo ${i + 1}`,
}));

export default function Page({ params: { lang } }: Props) {
  setRequestLocale(lang);
  return <PortfolioCategoryPage lang={lang} category="industrial" items={industrialImages} />;
}
