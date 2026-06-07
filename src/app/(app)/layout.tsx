import type { Metadata } from "next";
import { Playfair_Display, Inter, Vazirmatn } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import AppHeader from "@/components/app/AppHeader";
import "@/app/globals.css";

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

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tavakoli AI Studio — Plan Your Istanbul Photoshoot",
  description:
    "Plan and book premium photography, wedding film, and visual content sessions in Istanbul with Tavakoli Studio.",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${playfair.variable} ${inter.variable} ${vazirmatn.variable}`}>
      <body className="bg-bg text-white font-body antialiased">
        <LanguageProvider>
          <AppHeader />
          <main className="pt-16">{children}</main>

          {/* Minimal footer */}
          <footer className="border-t border-white/5 py-10 px-6 text-center">
            <p className="text-xs text-muted-2 tracking-widest uppercase">
              © 2024 Tavakoli Studio · Istanbul
            </p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
