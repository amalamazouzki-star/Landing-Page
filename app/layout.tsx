import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "somatch — From brief to perfect match",
  description: "L’IA qui transforme un brief en casting d’influenceurs pertinent, argumenté et mesurable.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "somatch — From brief to perfect match",
    description: "L’IA qui transforme un brief en casting d’influenceurs pertinent, argumenté et mesurable.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "somatch — From brief to perfect match" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "somatch — From brief to perfect match",
    description: "L’IA qui transforme un brief en casting d’influenceurs pertinent, argumenté et mesurable.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className={geist.variable}>{children}</body></html>;
}
