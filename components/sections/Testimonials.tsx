import RevealWrapper from "@/components/RevealWrapper";

const testimonials = [
  {
    initials: "AC",
    name: "Ana Carolina",
    city: "São Paulo, SP",
    text: "Comecei achando que era só mais um devocional. No terceiro ciclo, tive clareza sobre uma decisão que estava postergando há dois anos. Foi transformador.",
  },
  {
    initials: "FM",
    name: "Fernanda Martins",
    city: "Belo Horizonte, MG",
    text: "A estrutura dos 21 dias é diferente de tudo que já fiz. Cada dia constrói no anterior. No final me sentia mais conectada, mais firme — diferente de verdade.",
  },
  {
    initials: "JR",
    name: "Juliana Ramos",
    city: "Curitiba, PR",
    text: "Achei que não conseguiria manter a sequência. Mas o formato é tão suave e profundo ao mesmo tempo que eu não queria parar. Recomendo de coração.",
  },
];

export default function Testimonials() {
  return (
    <section style={{ background: "#131212" }} className="py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div className="mb-14 text-center">
            <div
              className="mb-6 block text-center text-[11px] font-bold tracking-[0.18em] text-[rgba(246,246,246,0.45)]"
              style={{
                fontFamily: "var(--font-montserrat)",
                textTransform: "uppercase",
              }}
            >
              Resultados reais
            </div>
            <h2
              className="font-bold leading-[1.2] tracking-[-0.01em] text-[#f6f6f6]"
              style={{ fontSize: "clamp(28px, 3.8vw, 44px)" }}
            >
              O que está mudando na vida de quem fez essa jornada
            </h2>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <RevealWrapper key={t.name} delay={80 + i * 80}>
              <div
                className="flex h-full flex-col rounded-[20px] p-7"
                style={{ background: "rgba(246,246,246,0.04)", border: "1px solid rgba(246,246,246,0.07)" }}
              >
                {/* Quote mark */}
                <div
                  aria-hidden="true"
                  className="mb-5 font-serif text-[48px] leading-none"
                  style={{ color: "#718472", lineHeight: 1 }}
                >
                  &ldquo;
                </div>

                <p
                  className="mb-6 flex-1 font-light leading-[1.75] text-[rgba(246,246,246,0.7)]"
                  style={{ fontSize: "16px" }}
                >
                  {t.text}
                </p>

                {/* Divider */}
                <div
                  className="mb-5 h-px"
                  style={{ background: "rgba(246,246,246,0.08)" }}
                />

                {/* Author row */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white"
                    style={{
                      background: "linear-gradient(145deg, #78AC76, #588A65)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      className="text-[14px] font-semibold text-[rgba(246,246,246,0.88)]"
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-[11px] tracking-[0.06em] text-[rgba(246,246,246,0.3)]"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {t.city}
                    </div>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
