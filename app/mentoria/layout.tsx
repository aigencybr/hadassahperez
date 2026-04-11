import type { Metadata } from "next";
import { Nunito, Montserrat } from "next/font/google";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caminho de Ester — Mentoria Individual · Hadassah Perez",
  description:
    "Uma jornada de mulheres a propósito. Saia do ciclo de viver dividida e descubra quem Deus te chamou pra ser.",
  openGraph: {
    title: "Caminho de Ester — Mentoria Individual · Hadassah Perez",
    description:
      "Uma jornada de mulheres a propósito. Saia do ciclo de viver dividida e descubra quem Deus te chamou pra ser.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function MentoriaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${nunito.variable} ${montserrat.variable}`}>
      {children}
    </div>
  );
}
