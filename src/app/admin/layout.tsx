import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import "@/app/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Admin — Tavakoli Studio",
};

const NAV = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/leads", label: "Leads" },
  { href: "/admin/galleries", label: "Galleries" },
  { href: "/admin/locations", label: "Locations" },
  { href: "/admin/packages", label: "Packages" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0A0A0A] text-white font-body antialiased">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-56 shrink-0 border-r border-white/5 flex flex-col">
            <div className="px-6 py-6 border-b border-white/5">
              <p className="text-[10px] tracking-widest uppercase text-gold">
                Tavakoli Studio
              </p>
              <p className="text-[10px] text-muted tracking-wider">Admin Panel</p>
            </div>
            <nav className="flex-1 px-3 py-6 space-y-1">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="flex items-center gap-3 px-3 py-2.5 text-xs tracking-wider text-muted hover:text-white hover:bg-white/5 transition-colors rounded"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 py-6 border-t border-white/5">
              <Link
                href="/planner"
                className="text-[10px] text-muted hover:text-white transition-colors tracking-wider"
              >
                ← Back to App
              </Link>
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 overflow-auto p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
