import RevealWrapper from "@/components/RevealWrapper";

const diffs = [
  {
    num: "01 — Profundidade",
    title: "Não é uma frase bonita para os stories",
    text: "É um ensinamento que vai ao fundo — construído sobre a Palavra, aprofundado com anos de estudo em liderança, teologia e coaching. Você vai terminar o dia sabendo algo que não sabia antes.",
  },
  {
    num: "02 — Reflexão real",
    title: "Uma pergunta que te faz parar de verdade",
    text: "Não uma pergunta retórica — uma que te faz parar, pensar e perceber algo sobre si mesma e sobre Deus que talvez nunca tenha visto com clareza.",
  },
  {
    num: "03 — Ação concreta",
    title: "Fé abstrata não muda vida",
    text: "Ao fim de cada dia, você vai ter algo concreto para fazer. Um passo pequeno, mas real. Porque é nos pequenos passos que a transformação acontece.",
  },
  {
    num: "04 — Estrutura progressiva",
    title: "Cada ciclo constrói sobre o anterior",
    text: "Os 21 dias não são aleatórios. Você não termina onde começou — você chega num lugar diferente porque a jornada foi desenhada para isso.",
  },
];

export default function Differentials() {
  return (
    <section style={{ background: "#ebebeb" }} className="py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div
            className="mb-6 text-[11px] font-bold tracking-[0.18em] text-[#718472]"
            style={{
              fontFamily: "var(--font-montserrat)",
              textTransform: "uppercase",
            }}
          >
            Por que é diferente
          </div>
          <h2
            className="mb-12 font-bold leading-[1.2] tracking-[-0.01em] text-[#111111]"
            style={{ fontSize: "clamp(28px, 3.8vw, 44px)" }}
          >
            Por que este devocional é diferente de tudo que você já leu
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {diffs.map((d, i) => (
            <RevealWrapper key={d.num} delay={80 + i * 80}>
              <div className="rounded-[28px] bg-white p-8 shadow-[0_2px_10px_rgba(0,0,0,0.07)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_24px_rgba(0,0,0,0.12)]">
                <div
                  className="mb-3 text-[10px] font-bold tracking-[0.18em] text-[#718472]"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    textTransform: "uppercase",
                  }}
                >
                  {d.num}
                </div>
                <div className="mb-3 text-[19px] font-extrabold leading-[1.3] text-[#111111]">
                  {d.title}
                </div>
                <div className="text-[15px] font-light leading-[1.75] text-[rgba(17,17,17,0.62)]">
                  {d.text}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
