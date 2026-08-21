import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.davianalyst.com"),
  title: { default: "Davi Almeida | Data Analyst, Data Engineer & Applied AI", template: "%s | Davi Almeida" },
  description: "Portfolio of dashboards, SQL data systems, Python automation and applied AI projects built by Davi Almeida.",
  keywords: ["Davi Almeida", "Data Analyst", "Data Engineer", "AI Engineer", "Power BI", "SQL", "Python", "PostgreSQL", "portfolio"],
  authors: [{ name: "Davi Almeida", url: "https://github.com/davicanada" }],
  creator: "Davi Almeida",
  openGraph: { type: "website", locale: "en_CA", siteName: "Davi Almeida", title: "Davi Almeida | Data products built for real work", description: "Dashboards, data models, automation and AI projects built around practical problems." },
  twitter: { card: "summary_large_image", title: "Davi Almeida | Data products built for real work", description: "Dashboards, data models, automation and AI projects built around practical problems." },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0b1522" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={manrope.variable + " " + spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}
