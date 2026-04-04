import type { Metadata } from "next";
import {
  Libre_Baskerville,
  DM_Sans,
  Playfair_Display,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hadassah Perez",
  description: "Coach · Mentora · Cantora Cristã",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${libreBaskerville.variable} ${dmSans.variable} ${playfairDisplay.variable} ${cormorantGaramond.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
