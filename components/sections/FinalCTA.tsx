import { ArrowRight } from "lucide-react";
import RevealWrapper from "@/components/RevealWrapper";

const BUY_LINK = "https://pay.kiwify.com.br/bvTaSZj";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden py-24 text-center md:py-32"
      style={{ background: "#131212" }}
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="final-glow pointer-events-none absolute bottom-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full"
      />

      <div className="relative z-10 mx-auto max-w-[560px] px-5">
        <RevealWrapper delay={0}>
          <div
            className="mb-6 block text-center text-[11px] font-bold tracking-[0.18em] text-[rgba(246,246,246,0.45)]"
            style={{
              fontFamily: "var(--font-montserrat)",
              textTransform: "uppercase",
            }}
          >
            Sua jornada começa hoje
          </div>
        </RevealWrapper>

        <RevealWrapper delay={80}>
          <h2
            className="mb-5 font-extrabold leading-[1.2] tracking-[-0.02em] text-[#f6f6f6]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", fontFamily: "var(--font-silver)" }}
          >
            21 dias. Uma decisão.{" "} <br />
            <span className="font-semibold italic" style={{ color: "#6B7558" }}>
              Uma vida diferente.
            </span>
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={160}>
          <p
            className="mb-12 font-light leading-[1.7] text-[rgba(246,246,246,0.5)]"
            style={{ fontSize: "17px" }}
          >
            Você já sabe que precisa disso. O próximo passo é simples.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={240}>
          <a
            href={BUY_LINK}
            className="btn-grad inline-flex items-center gap-2 rounded-full px-16 py-5 font-semibold tracking-wide text-[#f6f6f6] shadow-[0_4px_20px_rgba(88,138,101,0.35)]"
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "16px",
              letterSpacing: "0.04em",
            }}
            aria-label="Comprar agora"
          >
            Quero começar minha jornada
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </RevealWrapper>
      </div>
    </section>
  );
}
