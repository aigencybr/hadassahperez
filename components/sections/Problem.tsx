import RevealWrapper from "@/components/RevealWrapper";

const features = [
  "Clareza espiritual sobre os próximos passos",
  "Libertação de feridas e expectativas do passado",
  "Confiança para caminhar com fé na prática",
  "Transformação real — de dentro pra fora",
];

export default function Problem() {
  return (
    <section style={{ background: "#131212" }} className="py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div
            className="mb-6 text-[11px] font-bold tracking-[0.18em] text-[rgba(246,246,246,0.45)]"
            style={{
              fontFamily: "var(--font-montserrat)",
              textTransform: "uppercase",
            }}
          >
            O diagnóstico
          </div>
          <h2
            className="mb-8 font-extrabold leading-[1.2] tracking-[-0.02em] text-[#f6f6f6]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            O problema não é a sua fé.
            <br />É o{" "}
            <span className="font-semibold italic" style={{ color: "#8fa090" }}>
              ruído.
            </span>
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={80}>
          <p
            className="max-w-[620px] font-light leading-[1.8] text-[rgba(246,246,246,0.65)]"
            style={{ fontSize: "18px" }}
          >
            Vivemos numa era que glorifica a pressa. Todo mundo tem uma opinião
            sobre o que você deveria ser, fazer, escolher. As redes sociais te
            mostram a vida das outras. As cobranças chegam antes que você abra
            os olhos de manhã.
            <br />
            <br />
            E no meio de tudo isso, a pergunta mais importante fica sem
            resposta:
            <br />
            <em
              className="font-normal not-italic text-[rgba(246,246,246,0.9)]"
              style={{ fontSize: "22px" }}
            >
              O que Deus está dizendo para mim?
            </em>
          </p>
        </RevealWrapper>

        <RevealWrapper delay={160}>
          <div
            className="my-10 h-0.5 w-12 rounded-full"
            style={{ background: "#718472" }}
          />
        </RevealWrapper>

        <RevealWrapper delay={160}>
          <p
            className="mb-0 max-w-[620px] font-light leading-[1.8] text-[rgba(246,246,246,0.65)]"
            style={{ fontSize: "18px" }}
          >
            A maioria das mulheres cristãs não têm um problema de fé. Têm um
            problema de{" "}
            <strong style={{ color: "rgba(246,246,246,0.88)", fontWeight: 600 }}>
              alinhamento
            </strong>
            . Elas creem — mas vivem desconectadas do que Deus está falando
            especificamente para elas.
          </p>
        </RevealWrapper>

        {/* Feature tiles */}
        <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {features.map((text, i) => (
            <RevealWrapper key={text} delay={80 + i * 80}>
              <div className="feature-tile-dark flex cursor-default items-center gap-6 rounded-[20px] border p-6 transition-colors duration-200">
                <div
                  className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: "linear-gradient(145deg, #78AC76, #588A65)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px] fill-white"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <span
                  className="text-[15px] font-semibold leading-[1.4] text-[rgba(246,246,246,0.88)]"
                >
                  {text}
                </span>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
