import { ArrowRight } from "lucide-react";
import RevealWrapper from "@/components/RevealWrapper";
import IdentificationCarousel from "@/components/IdentificationCarousel";

const painPoints = [
  "Está ocupada, produtiva, ativa — e ainda assim com a sensação de que está parada",
  "Tem fé, mas não sabe se está indo na direção certa",
  "Tenta ter um tempo com Deus, mas o dia a dia engole tudo antes de chegar lá",
  "Carrega algo do passado — uma ferida, uma expectativa — que ainda pesa mais do que devia",
  "Sabe que há mais para a sua vida, que há um chamado — mas a clareza não vem",
];

export default function Identification() {
  return (
    <section style={{ background: "#F7F1E8" }} className="py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-[1fr_1.5fr]">
          {/* Carousel — aparece abaixo do texto no mobile, à esquerda no desktop */}
          <RevealWrapper delay={0} className="order-2 md:order-1">
            <IdentificationCarousel />
          </RevealWrapper>

          {/* Pain card — aparece primeiro no mobile */}
          <RevealWrapper delay={160} className="order-1 md:order-2">
            <div className="rounded-[28px] bg-white p-10 shadow-[8px_8px_24px_rgba(0,0,0,0.12)] md:p-12">
              <div
                className="mb-6 block text-[11px] font-bold tracking-[0.18em] text-[#6B7558]"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  textTransform: "uppercase",
                }}
              >
                Para quem é este devocional
              </div>

              <h2
                className="mb-6 font-extrabold leading-[1.2] tracking-[-0.01em] text-[#1C1410]"
                style={{ fontSize: "clamp(24px, 3vw, 36px)", fontFamily: "var(--font-silver)" }}
              >
                "Para onde Deus quer <br /> que eu vá?"
              </h2>

              <p
                className="mb-6 font-light leading-[1.75] text-[#5E4535]"
                style={{ fontSize: "17px" }}
              >
                Você já se fez essa pergunta — e não encontrou resposta. Não
                porque Deus está calado. Mas porque o barulho ao redor está alto
                demais para você escutar.
              </p>

              <p
                className="mb-5 text-[12px] font-bold tracking-[0.12em] text-[#9A8070]"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  textTransform: "uppercase",
                }}
              >
                Você já sentiu alguma dessas?
              </p>

              <ul className="mb-8 flex flex-col gap-3.5" role="list">
                {painPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3.5 text-[17px] leading-[1.55] text-[#1C1410]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full"
                      style={{ background: "rgba(184,120,74,0.10)" }}
                    >
                      <ArrowRight
                        size={10}
                        style={{ color: "#B8784A" }}
                        strokeWidth={0}
                        className="fill-[#B8784A]"
                      />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div
                className="rounded-2xl px-6 py-5 text-center text-[18px] font-extrabold leading-[1.4] text-[#1C1410]"
                style={{ background: "rgba(184,120,74,0.08)" }}
              >
                Se você se reconheceu em alguma dessas,
                <br />
                você está no lugar certo.
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
