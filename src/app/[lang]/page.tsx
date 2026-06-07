import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";
import InstagramCTA from "@/components/InstagramCTA";

type Props = { params: { lang: string } };

export default function HomePage({ params: { lang } }: Props) {
  setRequestLocale(lang);
  return (
    <>
      <Hero lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
      <ContactCTA />
      <InstagramCTA />
    </>
  );
}
