import { ArrowRight } from "lucide-react";
import RevealWrapper from "@/components/RevealWrapper";

const BUY_LINK = "https://pay.kiwify.com.br/bvTaSZj";

const guarantees = [
  "Acesso imediato",
  "Produto 100% digital",
  "Garantia de 7 dias",
];

const trustBadges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-[#B8784A]" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "Garantia\n7 dias",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-none stroke-[#B8784A]" strokeWidth={1.8} aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Acesso\nimediato",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-none stroke-[#B8784A]" strokeWidth={1.8} aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    label: "Qualquer\ndispositivo",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-none stroke-[#B8784A]" strokeWidth={1.8} aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    label: "Com propósito\ne cuidado",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{ background: "#EDE3D4" }}
      className="pt-24 pb-12 md:py-32"
    >
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div
            className="relative mx-auto max-w-[680px] overflow-hidden rounded-[28px] bg-white px-6 py-20 text-center shadow-[0_8px_60px_rgba(0,0,0,0.14)] md:px-20"
          >
            {/* Top gradient bar */}
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{
                background: "linear-gradient(180deg, #C9996A 0%, #B8784A 100%)",
              }}
              aria-hidden="true"
            />

            <div
              className="mb-8 block text-center text-[11px] font-bold tracking-[0.18em] text-[#6B7558]"
              style={{
                fontFamily: "var(--font-montserrat)",
                textTransform: "uppercase",
              }}
            >
              Investimento
            </div>

            <p
              className="mx-auto mb-10 max-w-[460px] font-light leading-[1.8] text-[#5E4535]"
              style={{ fontSize: "18px" }}
            >
              Você já investiu tempo, energia e esperança tentando encontrar
              clareza. Uma jornada de 21 dias, construída por quem já trilhou
              esse caminho, custa menos do que você imagina.
            </p>

            {/* Price */}
            <div
              className="mb-3 flex items-start justify-center gap-1"
              aria-label="R$ 97"
            >
              <span
                className="mt-[18px] text-[28px] font-bold text-[#1C1410]"
                aria-hidden="true"
                style={{ fontFamily: "var(--font-silver)" }}
              >
                R$
              </span>
              <span
                className="font-extrabold leading-none tracking-[-0.04em] text-[#1C1410]"
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-silver)",
                  fontSize: "clamp(72px, 12vw, 96px)",
                }}
              >
                97
              </span>
            </div>

            <div
              className="mb-10 text-[13px] tracking-[0.08em] text-[#9A8070]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ou em até 10x de R$17,91 · acesso permanente
            </div>

            <div className="mb-8">
              <a
                href={BUY_LINK}
                className="btn-grad inline-flex items-center gap-2 rounded-full px-16 py-5 font-semibold tracking-wide text-[#f6f6f6] shadow-[0_4px_20px_rgba(107,117,88,0.40)]"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "16px",
                  letterSpacing: "0.04em",
                  background: "#6B7558",
                }}
                aria-label="Comprar Alinhamento por R$97"
              >
                Quero meu alinhamento com Deus
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
            </div>

            {/* Guarantees */}
            <div
              className="mb-8 flex flex-wrap justify-center gap-6"
              role="list"
            >
              {guarantees.map((g) => (
                <div
                  key={g}
                  className="flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.04em] text-[#5E4535]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                  role="listitem"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 fill-[#B8784A]"
                    aria-hidden="true"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  {g}
                </div>
              ))}
            </div>

            <p
              className="mx-auto max-w-[400px] font-light italic leading-[1.7] text-[#5E4535]"
              style={{ fontSize: "15px" }}
            >
              Se em 7 dias você não sentir que valeu, você solicita o reembolso.
              Sem burocracia, sem questionamento.
            </p>
          </div>
        </RevealWrapper>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-16">
          {trustBadges.map((badge, i) => (
            <RevealWrapper key={badge.label} delay={80 + i * 80}>
              <div className="flex flex-col items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ background: "rgba(184,120,74,0.10)" }}
                  aria-hidden="true"
                >
                  {badge.icon}
                </div>
                <div
                  className="whitespace-pre-line text-center text-[11px] font-bold tracking-[0.1em] text-[#5E4535]"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    textTransform: "uppercase",
                  }}
                >
                  {badge.label}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
