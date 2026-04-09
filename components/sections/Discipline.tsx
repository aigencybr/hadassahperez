import { ArrowRight } from "lucide-react";
import RevealWrapper from "@/components/RevealWrapper";

const BUY_LINK = "https://pay.kiwify.com.br/bvTaSZj";

export default function Discipline() {
  return (
    <section style={{ background: "#F7F1E8" }} className="py-24 md:py-32">
      <div className="mx-auto max-w-[680px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div className="text-center">
            <div
              className="mb-6 block text-center text-[11px] font-bold tracking-[0.18em] text-[#6B7558]"
              style={{
                fontFamily: "var(--font-montserrat)",
                textTransform: "uppercase",
              }}
            >
              Sobre a jornada
            </div>

            <h2
              className="mb-8 font-bold leading-[1.2] tracking-[-0.02em] text-[#1C1410]"
              style={{ fontSize: "clamp(28px, 3.8vw, 44px)", fontFamily: "var(--font-silver)" }}
            >
              "Não sei se tenho disciplina para 21 dias."
            </h2>

            <p
              className="mx-auto mb-10 max-w-[580px] font-light leading-[1.85] text-[#5E4535]"
              style={{ fontSize: "19px" }}
            >
              Cada dia tem tudo que você precisa — versículo, ensinamento,
              reflexão, oração e ação — em um formato que não exige horas. O que
              exige é intenção. E se você chegou até aqui nessa página, você já
              tem isso.
            </p>

            {/* <a
              href={"#pricing"}
              className="inline-flex items-center gap-2 rounded-full border px-8 py-3.5 text-[#5E4535] text-sm font-semibold transition-colors duration-200 hover:bg-[#6B7558] hover:text-white hover:border-[#6B7558]"
              style={{
                fontFamily: "var(--font-montserrat)",
                borderColor: "rgba(94,69,53,0.35)"
              }}
              aria-label="Comprar agora"
            >
              Quero começar minha jornada
              <ArrowRight size={15} strokeWidth={2.5} />
            </a> */}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
