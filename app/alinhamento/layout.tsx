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
  title: "Alinhamento — 21 Devocionais · Hadassah Perez",
  description:
    "21 dias para sair do ruído e entrar no que Deus planejou especificamente para você. Um devocional digital com estrutura progressiva, reflexão profunda e ação concreta.",
  openGraph: {
    title: "Alinhamento — 21 Devocionais · Hadassah Perez",
    description:
      "21 dias para sair do ruído e entrar no que Deus planejou especificamente para você.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function AlinhamentoLayout({
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
