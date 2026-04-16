import type { Metadata } from "next";
import {
  Libre_Baskerville,
  DM_Sans,
  Playfair_Display,
  Cormorant_Garamond,
} from "next/font/google";
import localFont from "next/font/local";
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

const theSilverEditorial = localFont({
  src: "../public/TheSilverEditorial-Regular.ttf",
  variable: "--font-silver",
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
  title: {
    default: "Hadassah Perez — Coach, Mentora e Cantora Cristã",
    template: "%s · Hadassah Perez",
  },
  description:
    "Hadassah Perez é coach, mentora e cantora cristã que conecta mulheres ao chamado que Deus preparou para elas. Mentoria, devocionais e música para mulheres que querem viver com propósito.",
  metadataBase: new URL("https://www.hadassahperez.com.br"),
  manifest: "/manifest.json",
  keywords: [
    "Hadassah Perez",
    "coach cristã",
    "mentoria cristã",
    "mentoria para mulheres",
    "devocional feminino",
    "propósito de vida cristã",
    "cantora cristã brasileira",
  ],
  authors: [{ name: "Hadassah Perez", url: "https://www.hadassahperez.com.br" }],
  openGraph: {
    title: "Hadassah Perez — Coach, Mentora e Cantora Cristã",
    description:
      "Conectando mulheres ao chamado que Deus preparou. Mentoria, devocionais e música.",
    url: "https://www.hadassahperez.com.br",
    siteName: "Hadassah Perez",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hadassah Perez — Coach, Mentora e Cantora Cristã",
    description:
      "Conectando mulheres ao chamado que Deus preparou. Mentoria, devocionais e música.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${libreBaskerville.variable} ${dmSans.variable} ${playfairDisplay.variable} ${cormorantGaramond.variable} ${theSilverEditorial.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
