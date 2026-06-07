import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tavakoli Studio — Premium Visual Studio Istanbul",
  description:
    "Cinematic wedding photography, brand video production, and premium visual content in Istanbul.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
