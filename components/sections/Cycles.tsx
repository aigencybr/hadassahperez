import RevealWrapper from "@/components/RevealWrapper";

const cycles = [
  {
    num: "01",
    name: "Alinhamento",
    lead: "Antes de saber para onde ir, você precisa saber quem você é.",
    desc: "Reconexão com Deus, com sua identidade em Cristo. Você vai soltar o que prende — feridas, expectativas falsas, vozes que não são de Deus.",
    barClass: "cycle-bar-1",
  },
  {
    num: "02",
    name: "Direção",
    lead: "Com o coração alinhado, a voz de Deus fica mais clara.",
    desc: "Discernimento: aprender a reconhecer como Deus fala com você especificamente. Clareza espiritual para os próximos passos.",
    barClass: "cycle-bar-2",
  },
  {
    num: "03",
    name: "Ação com Fé",
    lead: "Fé sem movimento não transforma nada.",
    desc: "Transformar clareza em ação concreta. Sair da contemplação e caminhar — com fé ativa e confiança renovada.",
    barClass: "cycle-bar-3",
  },
];

const dailyItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-[#B8784A]" fill="none" strokeWidth={1.8} aria-hidden="true">
        <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="12" y2="14" />
      </svg>
    ),
    title: "Versículo principal",
    desc: "A âncora bíblica do dia — a Palavra que fundamenta tudo o que vem a seguir",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-[#B8784A]" fill="none" strokeWidth={1.8} aria-hidden="true">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Ensinamento profundo",
    desc: "Não motivação — revelação. Uma reflexão que vai ao fundo do que a Palavra tem a dizer",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-[#B8784A]" fill="none" strokeWidth={1.8} aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="10" r="3" />
        <path d="M7 20.662V19a2 2 0 012-2h6a2 2 0 012 2v1.662" />
      </svg>
    ),
    title: "Momento de reflexão",
    desc: "Uma pergunta poderosa que te faz perceber algo novo sobre si mesma e sobre Deus",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-[#B8784A]" fill="none" strokeWidth={1.8} aria-hidden="true">
        <path d="M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Oração focada",
    desc: "Uma oração direcionada ao tema do dia — para se conectar com Deus com intenção",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-[#B8784A]" fill="none" strokeWidth={1.8} aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Ação prática",
    desc: "Algo concreto para fazer. Porque fé sem ação não transforma nada",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-[#B8784A]" fill="none" strokeWidth={1.8} aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
    title: "Versículos de apoio",
    desc: "Outros textos que confirmam e aprofundam a revelação do dia",
  },
];

export default function Cycles() {
  return (
    <section style={{ background: "#F7F1E8" }} className="py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        {/* Header */}
        <RevealWrapper delay={0}>
          <div className="mb-24 text-center">
            <div
              className="mb-6 block text-center text-[11px] font-bold tracking-[0.18em] text-[#6B7558]"
              style={{
                fontFamily: "var(--font-montserrat)",
                textTransform: "uppercase",
              }}
            >
              A jornada
            </div>
            <h2
              className="mb-6 font-bold leading-[1.35] tracking-[-0.01em] text-[#1C1410]"
              style={{ fontSize: "clamp(28px, 3.8vw, 44px)", fontFamily: "var(--font-silver)" }}
            >
              Três semanas.{" "} <br />
              <span className="font-semibold italic" style={{ color: "#C9996A" }}>
                Uma transformação.
              </span>
            </h2>
            <p
              className="mx-auto max-w-[540px] font-light leading-[1.75] text-[#5E4535]"
              style={{ fontSize: "18px" }}
            >
              A jornada foi construída para te levar de dentro pra fora —
              começando pela raiz, não pelos sintomas.
            </p>
          </div>
        </RevealWrapper>

        {/* Cycle cards */}
        <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cycles.map((c, i) => (
            <RevealWrapper key={c.num} delay={80 + i * 80}>
              <div
                className="relative cursor-default overflow-hidden rounded-[28px] bg-white px-8 pb-8 pt-7 shadow-[0_2px_10px_rgba(0,0,0,0.07)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_24px_rgba(0,0,0,0.12)]"
              >
                {/* Top color bar */}
                <div className={`absolute inset-x-0 top-0 h-[3px] ${c.barClass}`} />

                <div
                  className="-mb-1 font-extrabold leading-[0.85] tracking-[-0.05em] text-[rgba(2,2,2,0.04)]"
                  style={{ fontSize: "88px" }}
                  aria-hidden="true"
                >
                  {c.num}
                </div>

                <div
                  className="mb-3 text-[10px] font-bold tracking-[0.18em] text-[#6B7558]"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    textTransform: "uppercase",
                  }}
                >
                  Semana {c.num}
                </div>
                <div className="mb-2 text-[22px] font-extrabold text-[#1C1410]">
                  {c.name}
                </div>
                <div className="mb-2 text-sm font-bold leading-[1.4] text-[#1C1410]">
                  {c.lead}
                </div>
                <div className="text-sm font-light leading-[1.65] text-[#5E4535]">
                  {c.desc}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Daily structure */}
        <RevealWrapper delay={0}>
          <div className="mb-8 text-center">
            <div
              className="text-[11px] font-bold tracking-[0.18em] text-[#6B7558]"
              style={{
                fontFamily: "var(--font-montserrat)",
                textTransform: "uppercase",
              }}
            >
              O que você recebe em cada dia
            </div>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {dailyItems.map((item, i) => (
            <RevealWrapper key={item.title} delay={80 + (i % 4) * 80}>
              <div className="flex items-start gap-6 rounded-[20px] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.07)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_24px_rgba(0,0,0,0.12)]">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "rgba(184,120,74,0.10)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="mb-1 text-[15px] font-bold text-[#1C1410]">
                    {item.title}
                  </div>
                  <div className="text-[13px] font-light leading-[1.6] text-[#5E4535]">
                    {item.desc}
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
