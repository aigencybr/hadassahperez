import { ArrowRight } from "lucide-react";
import RevealWrapper from "@/components/RevealWrapper";

const BUY_LINK = "https://pay.kiwify.com.br/bvTaSZj";

export default function Discipline() {
  return (
    <section style={{ background: "#131212" }} className="py-24 md:py-32">
      <div className="mx-auto max-w-[680px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div className="text-center">
            <div
              className="mb-6 block text-center text-[11px] font-bold tracking-[0.18em] text-[rgba(246,246,246,0.45)]"
              style={{
                fontFamily: "var(--font-montserrat)",
                textTransform: "uppercase",
              }}
            >
              Sobre a jornada
            </div>

            <h2
              className="mb-8 font-bold leading-[1.2] tracking-[-0.02em] text-[#f6f6f6]"
              style={{ fontSize: "clamp(28px, 3.8vw, 44px)" }}
            >
              "Não sei se tenho disciplina para 21 dias."
            </h2>

            <p
              className="mx-auto mb-10 max-w-[580px] font-light leading-[1.85] text-[rgba(246,246,246,0.65)]"
              style={{ fontSize: "19px" }}
            >
              Cada dia tem tudo que você precisa — versículo, ensinamento,
              reflexão, oração e ação — em um formato que não exige horas. O que
              exige é intenção. E se você chegou até aqui nessa página, você já
              tem isso.
            </p>

            <a
              href={BUY_LINK}
              className="inline-flex items-center gap-2 rounded-full border px-8 py-3.5 text-sm font-semibold transition-colors duration-200 hover:bg-[#718472] hover:text-white"
              style={{
                fontFamily: "var(--font-montserrat)",
                borderColor: "rgba(143,160,144,0.5)",
                color: "#8fa090",
              }}
              aria-label="Comprar agora"
            >
              Quero começar minha jornada
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
