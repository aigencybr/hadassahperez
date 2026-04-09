import { ArrowRight } from "lucide-react";
import RevealWrapper from "@/components/RevealWrapper";

const BUY_LINK = "https://pay.kiwify.com.br/bvTaSZj";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden py-24 text-center md:py-32"
      style={{ background: "#2a1a0f" }}
    >
      {/* Radial glow */}
      {/* <div
        aria-hidden="true"
        className="final-glow pointer-events-none absolute bottom-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full"
      /> */}

      <div className="relative z-10 mx-auto max-w-[560px] px-5">
        <RevealWrapper delay={0}>
          <div
            className="mb-6 block text-center text-[11px] font-bold tracking-[0.18em] text-[#9A8070]"
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
            className="mb-5 font-extrabold leading-[1.2] tracking-[-0.02em] text-[#F5EDD8]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", fontFamily: "var(--font-silver)" }}
          >
            21 dias. Uma decisão.{" "} <br />
            <span className="font-semibold italic" style={{ color: "#C9996A" }}>
              Uma vida diferente.
            </span>
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={160}>
          <p
            className="mb-12 font-light leading-[1.7] text-[#DFB98A]"
            style={{ fontSize: "17px" }}
          >
            Você já sabe que precisa disso. O próximo passo é simples.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={240}>
          <a
            href={BUY_LINK}
            className="btn-grad inline-flex items-center gap-2 rounded-full px-16 py-5 font-semibold tracking-wide text-[#f6f6f6] shadow-[0_4px_20px_rgba(107,117,88,0.40)]"
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "16px",
              letterSpacing: "0.04em",
              background: "linear-gradient(135deg, #688339 0%, #2f3d18 100%)",
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
