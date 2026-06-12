import { setRequestLocale } from "next-intl/server";
import PortfolioCategoryPage from "@/components/PortfolioCategoryPage";

type Props = { params: { lang: string } };

const commercialImages = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  src: `/images/portfolio/commercial/${i + 1}.png`,
  alt: `Commercial photo ${i + 1}`,
}));

export default function Page({ params: { lang } }: Props) {
  setRequestLocale(lang);
  return <PortfolioCategoryPage lang={lang} category="commercial" items={commercialImages} />;
}
