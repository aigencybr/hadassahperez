import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import RevealWrapper from "@/components/RevealWrapper";
import NavbarMentoria from "@/components/mentoria/NavbarMentoria";

// <!-- WHATSAPP_LINK -->
const CTA_LINK = "#pricing";
const WA_APPLY_LINK =
  "https://wa.me/5562998791555?text=Olá+Hadassah,+quero+me+inscrever+no+Caminho+de+Ester";

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Hero() {
  return (
    <section
      id="a-mentoria"
      aria-label="Hero — Caminho de Ester"
      className="relative overflow-hidden pt-24 pb-0 md:pt-0"
      style={{ background: "#F0E8DC", minHeight: "90vh" }}
    >
      <div className="mx-auto grid max-w-[1160px] min-h-[90vh] grid-cols-1 items-center px-5 md:grid-cols-[55%_45%] md:px-10">
        {/* Left — text */}
        <div className="py-20 md:py-32 md:pr-12">
          <h1
            className="animate-reveal mb-7 leading-[1.12] tracking-[-0.025em] text-[#1C1410]"
            style={{
              fontFamily: "var(--font-silver)",
              fontSize: "clamp(32px, 4.5vw, 56px)",
              animationDelay: "80ms",
            }}
          >
            Saia do ciclo de viver{" "}
            <span style={{ color: "#B8784A" }}>dividida</span>{" "}
            entre quem você é hoje e quem Deus te chamou pra ser.
          </h1>

          <p
            className="animate-reveal mb-10 max-w-[460px] font-light leading-[1.75] text-[#5E4535]"
            style={{ fontSize: "17px", animationDelay: "160ms" }}
          >
            Se você sente que existe uma versão sua que sabe do seu propósito, mas na
            prática ainda trava, se cala ou recua — essa mentoria te guia a reconstruir
            sua identidade em Deus, alinhar seu chamado e se posicionar com segurança,
            sem continuar voltando pro mesmo lugar.
          </p>

          <div
            className="animate-reveal flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={CTA_LINK}
              className="btn-grad inline-flex items-center gap-2 rounded-full px-[44px] py-[17px] text-[13px] font-semibold tracking-wide text-white"
              style={{
                fontFamily: "var(--font-montserrat)",
                letterSpacing: "0.04em",
                background: "linear-gradient(135deg, #688339 0%, #2f3d18 100%)",
                boxShadow: "0 4px 20px rgba(60,75,35,0.35)",
              }}
            >
              Iniciar Minha Transformação
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="relative hidden self-stretch md:flex md:flex-col md:py-32">
          <div
            aria-hidden="true"
            className="absolute rounded-[28px]"
            style={{
              background: "rgba(184,120,74,0.12)",
              top: "calc(128px + 16px)",
              bottom: "calc(128px + 16px)",
              right: "0",
              left: "24px",
            }}
          />
          <div
            className="relative ml-8 flex-1 overflow-hidden rounded-[28px]"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
          >
            <Image
              src="/IMG_5582.JPG"
              alt="Hadassah Perez"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 55%, rgba(16,10,6,0.25))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ATIVAÇÃO DO ESTADO MENTAL
───────────────────────────────────────────── */
function MentalActivation() {
  return (
    <section
      aria-label="Ativação do Estado Mental"
      style={{ background: "#F7F1E8" }}
      className="py-0"
    >
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 md:grid-cols-2">
        {/* Photo */}
        <RevealWrapper delay={0} className="h-full">
          <div className="h-full md:flex md:flex-col md:py-20 md:pr-6">
            <div className="relative h-[420px] overflow-hidden rounded-[24px] md:h-auto md:flex-1">
              <Image
                src="/IMG_5536.JPG"
                alt="Hadassah Perez"
                fill
                className="object-cover"
                style={{ objectPosition: "center 15%" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, transparent 60%, rgba(247,241,232,0.4))",
                }}
              />
            </div>
          </div>
        </RevealWrapper>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 py-16 md:px-14 md:py-20">
          <RevealWrapper delay={80}>
            <p
              className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#6B7558]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Você reconhece isso?
            </p>
          </RevealWrapper>

          <RevealWrapper delay={120}>
            <h2
              className="mb-7 leading-[1.18] tracking-[-0.02em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-silver)",
                fontSize: "clamp(22px, 2.8vw, 34px)",
              }}
            >
              Tem dias que você sente que está pronta. Que agora vai.
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={170}>
            <p
              className="mb-5 font-light leading-[1.8] text-[#5E4535]"
              style={{ fontSize: "16px" }}
            >
              Que você finalmente entendeu quem você é e o que Deus já te mostrou sobre
              você. Mas quando chega a hora de se posicionar de verdade, algo em você
              trava. Você se cala, volta atrás, se questiona… e no final, parece que nada
              mudou.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={220}>
            <p
              className="mb-7 font-light leading-[1.8] text-[#5E4535]"
              style={{ fontSize: "16px" }}
            >
              É como se existissem duas versões suas: uma que sabe quem é, e outra que
              sempre te puxa de volta pro mesmo lugar.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={270}>
            <p
              className="leading-[1.55] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "clamp(19px, 2vw, 23px)",
              }}
            >
              &ldquo;E o mais cansativo é perceber que você até avança por um momento,
              mas nunca consegue sustentar.&rdquo;
            </p>
          </RevealWrapper>

          <RevealWrapper delay={310}>
            <div
              className="mt-8 h-px w-16"
              style={{ background: "#C9996A", opacity: 0.55 }}
              aria-hidden="true"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROVA LÓGICA
───────────────────────────────────────────── */
function LogicProof() {
  return (
    <section style={{ background: "white" }} className="py-20 md:py-28">
      <div className="mx-auto max-w-[760px] px-5 md:px-10">
        {/* Pull Quote */}
        <RevealWrapper delay={0}>
          <div className="mb-14 text-center">
            <p
              className="mx-auto max-w-[620px] leading-[1.3] tracking-[-0.01em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "clamp(24px, 3.5vw, 36px)",
              }}
            >
              &ldquo;Você não está travada por falta de fé,{" "}
              <span style={{ color: "#B8784A" }}>nem por falta de vontade</span> de
              mudar — porque se fosse isso, você já teria conseguido.&rdquo;
            </p>
            <div
              className="mx-auto mt-6 h-px w-16"
              style={{ background: "rgba(201,153,106,0.5)" }}
              aria-hidden="true"
            />
          </div>
        </RevealWrapper>

        <div className="space-y-5">
          <RevealWrapper delay={80}>
            <p className="font-light leading-[1.85] text-[#5E4535]" style={{ fontSize: "16px" }}>
              Você tenta, se aproxima de Deus, decide fazer diferente… mas, depois de um
              tempo, tudo volta pro mesmo lugar.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={130}>
            <p
              className="text-[18px] font-semibold leading-[1.5] text-[#1C1410]"
              style={{ fontFamily: "var(--font-silver)" }}
            >
              Não é falta de esforço. É falta de base.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={180}>
            <p className="font-light leading-[1.85] text-[#5E4535]" style={{ fontSize: "16px" }}>
              Quando a sua identidade não está firmada, qualquer tentativa de se
              posicionar vira esforço — e não sustenta. Você até tem momentos de clareza,
              força e direção, mas logo se vê se questionando, se calando e se escondendo
              de novo.
            </p>
          </RevealWrapper>
        </div>

        <RevealWrapper delay={260}>
          <div
            className="mt-10 rounded-[20px] p-8"
            style={{
              background: "#F9F4EF",
              border: "1px solid rgba(184,120,74,0.18)",
            }}
          >
            <p
              className="leading-[1.65] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "clamp(18px, 2.2vw, 22px)",
              }}
            >
              &ldquo;Não porque você quer, mas porque ainda não existe dentro de você uma
              estrutura que sustente quem você sabe que é.{" "}
              <span style={{ color: "#B8784A" }}>
                E é exatamente isso que precisa ser construído.
              </span>
              &rdquo;
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROVA TÉCNICA — AS 6 ESTAÇÕES
───────────────────────────────────────────── */
const stages = [
  {
    num: "I",
    title: "Despertar da Identidade",
    desc: "Você entende quem tem sido até aqui e reconstrói quem Deus te chamou pra ser.",
  },
  {
    num: "II",
    title: "Preparação",
    desc: "Cria base e alinhamento na sua rotina, na sua vida espiritual e na forma como você se sustenta.",
  },
  {
    num: "III",
    title: "Posição",
    desc: "Desenvolve clareza e segurança para se posicionar sem se anular.",
  },
  {
    num: "IV",
    title: "Propósito",
    desc: "Enxerga com mais direção como sua história se conecta com o que você foi chamada pra viver.",
  },
  {
    num: "V",
    title: "Coragem",
    desc: "Toma decisões com firmeza, sem voltar atrás.",
  },
  {
    num: "VI",
    title: "Legado",
    desc: "Transforma tudo isso em uma vida alinhada, consistente e com direção. Sem voltar pro mesmo ciclo.",
  },
];

function SixStages() {
  return (
    <section id="o-caminho" style={{ background: "#EDE3D4" }} className="py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div className="mb-4 text-center">
            <p
              className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#6B7558]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              O Método
            </p>
            <h2
              className="mb-4 leading-[1.15] tracking-[-0.02em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-silver)",
                fontSize: "clamp(28px, 3.8vw, 46px)",
              }}
            >
              A Jornada Caminho de Ester
            </h2>
            <p
              className="mx-auto max-w-[520px] font-light leading-[1.7] text-[#5E4535]"
              style={{ fontSize: "16px" }}
            >
              Um caminho guiado e estruturado em etapas — do despertar à constância.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={80}>
          <div
            className="mx-auto mb-12 max-w-[680px] rounded-[16px] p-6 text-center"
            style={{
              background: "rgba(184,120,74,0.08)",
              border: "1px solid rgba(184,120,74,0.15)",
            }}
          >
            <p className="font-light leading-[1.8] text-[#5E4535]" style={{ fontSize: "15px" }}>
              Não é sobre tentar mais uma vez. É sobre sair da confusão interna e
              finalmente se tornar a mulher que Deus te chamou pra ser.
            </p>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {stages.map((stage, i) => (
            <RevealWrapper key={stage.title} delay={80 + i * 60}>
              <div
                className="group relative overflow-hidden rounded-[18px] p-7 transition-shadow duration-200 hover:shadow-[0_8px_32px_rgba(107,77,55,0.12)]"
                style={{
                  background: "white",
                  border: "1px solid rgba(94,69,53,0.08)",
                }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #C9996A 0%, #B8784A 100%)",
                      fontFamily: "var(--font-cormorant)",
                      fontStyle: "italic",
                      fontSize: "15px",
                    }}
                    aria-hidden="true"
                  >
                    {stage.num}
                  </div>
                  <div
                    className="h-px flex-1 opacity-30"
                    style={{ background: "#C9996A" }}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="mb-2 text-[16px] font-bold text-[#1C1410]"
                  style={{ fontFamily: "var(--font-silver)" }}
                >
                  {stage.title}
                </h3>
                <p className="text-[13px] font-light leading-[1.65] text-[#5E4535]">
                  {stage.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper delay={460}>
          <p
            className="mt-10 text-center font-light italic leading-[1.7] text-[#5E4535]"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(17px, 2vw, 20px)" }}
          >
            Porque no final, não é só sobre entender quem você é — é sobre conseguir viver isso com constância.
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PILARES DO MÉTODO
───────────────────────────────────────────── */
const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    label: "Identidade Espiritual",
    sub: "Quem você é em Deus",
    desc: "Enquanto você não tem clareza de quem é, tudo vira dúvida. Aqui você reconstrói sua identidade a partir da verdade — não do que você sente, não do que viveu, mas do que Deus já estabeleceu sobre você. É isso que tira você da confusão e te dá direção.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    label: "Mente e Posicionamento",
    sub: "Como você se sustenta",
    desc: "Não adianta saber quem é e continuar se anulando na prática. Aqui você desenvolve clareza emocional, segurança e posicionamento, aprendendo a se sustentar na mulher que está se tornando.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    label: "Corpo e Preparação",
    sub: "A base que sustenta tudo",
    desc: "Sem estrutura, nada se mantém. Aqui você aprende a alinhar sua rotina, seus hábitos e sua vida com aquilo que você quer viver, criando consistência e presença. Porque posicionamento não é só decisão — é sustentação.",
  },
];

function ThreePillars() {
  return (
    <section style={{ background: "white" }} className="py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div className="mb-4 text-center">
            <p
              className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#6B7558]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Pilares do Método
            </p>
            <h2
              className="mb-4 leading-[1.15] tracking-[-0.02em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-silver)",
                fontSize: "clamp(28px, 3.8vw, 46px)",
              }}
            >
              Três pilares, uma mudança real
            </h2>
            <p
              className="mx-auto mb-16 max-w-[540px] font-light leading-[1.7] text-[#5E4535]"
              style={{ fontSize: "16px" }}
            >
              Essa mentoria não trabalha só motivação ou teoria. Ela é construída sobre
              três pilares que sustentam uma mudança real — de dentro pra fora.
            </p>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <RevealWrapper key={pillar.label} delay={80 + i * 80}>
              <div
                className="flex flex-col rounded-[20px] p-8"
                style={{
                  background: "#F9F4EF",
                  border: "1px solid rgba(94,69,53,0.08)",
                }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px]"
                  style={{ background: "rgba(184,120,74,0.10)", color: "#B8784A" }}
                  aria-hidden="true"
                >
                  {pillar.icon}
                </div>
                <p
                  className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B7558]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {pillar.label}
                </p>
                <div
                  className="mb-4 h-[3px] w-10 rounded-full"
                  style={{ background: "linear-gradient(90deg, #C9996A, transparent)" }}
                  aria-hidden="true"
                />
                <h3
                  className="mb-3 text-[18px] font-bold text-[#1C1410]"
                  style={{ fontFamily: "var(--font-silver)" }}
                >
                  {pillar.sub}
                </h3>
                <p className="text-[14px] font-light leading-[1.75] text-[#5E4535]">
                  {pillar.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper delay={340}>
          <p
            className="mt-12 text-center font-light italic leading-[1.7] text-[#5E4535]"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(17px, 2vw, 20px)" }}
          >
            Quando esses três pilares se alinham, você para de viver em tentativa e começa
            a viver com clareza, firmeza e constância.
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DIFERENCIAIS
───────────────────────────────────────────── */
function Differentials() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "#1C1410" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184,120,74,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[720px] px-5 text-center md:px-10">
        <RevealWrapper delay={0}>
          <p
            className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#6B7558]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Por que é diferente
          </p>
          <h2
            className="mb-8 leading-[1.2] tracking-[-0.02em] text-[#F5EDD8]"
            style={{
              fontFamily: "var(--font-silver)",
              fontSize: "clamp(26px, 3.5vw, 42px)",
            }}
          >
            Não foi criada para te motivar por alguns dias
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <p
            className="mb-6 font-light leading-[1.85] text-[#DFB98A]"
            style={{ fontSize: "16px" }}
          >
            A Mentoria Caminho de Ester foi criada para te transformar de um jeito que
            você consiga sustentar. Aqui, você não recebe apenas direcionamento espiritual
            ou ferramentas práticas isoladas. Você aprende a alinhar os dois, porque não
            adianta entender quem você é em Deus e continuar vivendo da mesma forma.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={170}>
          <p
            className="mb-12 font-light leading-[1.85] text-[#DFB98A]"
            style={{ fontSize: "16px" }}
          >
            E se hoje você sente que já tentou mudar antes e não conseguiu, o problema não
            é você. É que, até agora, faltou um caminho que realmente te sustentasse.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={240}>
          <div
            className="rounded-[20px] px-8 py-7"
            style={{
              background: "rgba(201,153,106,0.10)",
              border: "1px solid rgba(201,153,106,0.22)",
            }}
          >
            <p
              className="leading-[1.5] text-[#F5EDD8]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.5vw, 28px)",
              }}
            >
              Aqui, a transformação não vem de intensidade,{" "}
              <span style={{ color: "#DFB98A" }}>mas de estrutura.</span>
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROVA PESSOAL — HADASSAH
───────────────────────────────────────────── */
function PersonalProof() {
  const credentials = [
    "Hillsong Leadership College · Sydney, Austrália",
    "Dallas Baptist University · EUA",
    "Coaching Integral Sistêmico Certificado",
    "Análise Comportamental Certificada",
  ];

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "#2a1a0f" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184,120,74,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1000px] grid-cols-1 items-center gap-16 px-5 md:grid-cols-[1fr_360px] md:px-10">
        {/* Text */}
        <div>
          <RevealWrapper delay={0}>
            <p
              className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#6B7558]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Quem criou esse caminho
            </p>
          </RevealWrapper>

          <RevealWrapper delay={80}>
            <blockquote
              className="mb-10 leading-[1.25] tracking-[-0.01em]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "clamp(26px, 3.5vw, 40px)",
                color: "#F5EDD8",
              }}
            >
              &ldquo;Por muito tempo, eu também me senti assim — dividida entre a mulher
              que mostrava ao mundo e a versão que ninguém via.&rdquo;
            </blockquote>
          </RevealWrapper>

          <RevealWrapper delay={160}>
            <p
              className="mb-5 font-light leading-[1.8] text-[#DFB98A]"
              style={{ fontSize: "16px" }}
            >
              No fundo, sempre parecia que algo não encaixava. Eu sabia que carregava um
              chamado, sabia que Deus já tinha me mostrado muita coisa… mas, na prática,
              não conseguia sustentar. Me posicionava por um tempo e depois recuava. Me
              sentia segura em alguns momentos, mas logo me perdia de novo.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={220}>
            <p
              className="mb-10 font-light leading-[1.8] text-[#DFB98A]"
              style={{ fontSize: "16px" }}
            >
              Até perceber que o problema não era falta de fé, mas falta de identidade
              firmada. Foi nesse processo que eu deixei de viver dividida e comecei, de
              fato, a me tornar a mulher que Deus me chamou pra ser. E foi a partir disso
              que nasceu a Mentoria Caminho de Ester — não como teoria, mas como um
              caminho vivido.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={270}>
            <div
              className="mb-10 rounded-[16px] p-5"
              style={{
                background: "rgba(201,153,106,0.08)",
                border: "1px solid rgba(201,153,106,0.18)",
              }}
            >
              <p
                className="leading-[1.6] text-[#F5EDD8]"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: "clamp(17px, 2vw, 20px)",
                }}
              >
                Porque, no final, não é sobre se tornar alguém diferente, mas sobre
                sustentar quem você já foi chamada pra ser.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={320}>
            <div className="flex flex-col gap-3" role="list">
              {credentials.map((cred) => (
                <div
                  key={cred}
                  className="flex items-center gap-3 text-[13px] leading-[1.4] text-[#9A8070]"
                  role="listitem"
                >
                  <div
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "#C9996A" }}
                  />
                  {cred}
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>

        {/* Photo */}
        <RevealWrapper delay={0}>
          <div className="relative mx-auto w-full max-w-[360px]">
            <div
              aria-hidden="true"
              className="absolute rounded-[28px]"
              style={{
                inset: 0,
                transform: "translate(14px, 14px)",
                background: "rgba(201,153,106,0.15)",
                borderRadius: "28px",
              }}
            />
            <div
              className="relative aspect-[3/4] overflow-hidden rounded-[28px]"
              style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.30)" }}
            >
              <Image
                src="/RCF-2345.jpeg"
                alt="Hadassah Perez"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, 360px"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.30))",
                }}
              />
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROVA SOCIAL
───────────────────────────────────────────── */
function SocialProof() {
  return (
    <section style={{ background: "#F7F1E8" }} className="py-20 md:py-28">
      <div className="mx-auto max-w-[720px] px-5 text-center md:px-10">
        <RevealWrapper delay={0}>
          <p
            className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#6B7558]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Algo ressoa em você?
          </p>
          <h2
            className="mb-8 leading-[1.2] tracking-[-0.02em] text-[#1C1410]"
            style={{
              fontFamily: "var(--font-silver)",
              fontSize: "clamp(24px, 3.2vw, 38px)",
            }}
          >
            Se você chegou até aqui, é porque em algum nível você se reconheceu em tudo
            isso.
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <p
            className="mb-6 font-light leading-[1.85] text-[#5E4535]"
            style={{ fontSize: "16px" }}
          >
            Não só na dor de se sentir dividida, mas na sensação de saber que existe algo
            maior em você que ainda não está sendo vivido como deveria.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={160}>
          <p
            className="mb-8 font-light leading-[1.85] text-[#5E4535]"
            style={{ fontSize: "16px" }}
          >
            A Mentoria Caminho de Ester não foi construída a partir de teoria ou de
            promessas vazias, mas de um processo real, que toca exatamente no ponto que
            precisa ser transformado: a base que sustenta quem você é.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={220}>
          <div
            className="rounded-[20px] p-8"
            style={{
              background: "rgba(184,120,74,0.08)",
              border: "1px solid rgba(184,120,74,0.15)",
            }}
          >
            <p
              className="leading-[1.5] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.5vw, 26px)",
              }}
            >
              Porque quando é o caminho certo, você não precisa ser convencida —{" "}
              <span style={{ color: "#B8784A" }}>você reconhece.</span>
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ENTREGÁVEIS
───────────────────────────────────────────── */
const deliverables = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Plano de Ação – O Meu Legado",
    desc: "Um direcionamento prático para organizar seus próximos passos com clareza, alinhando identidade, propósito e posicionamento em uma visão concreta de vida.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: "Jornada guiada em 6 encontros",
    desc: "Um caminho estruturado que te conduz, etapa por etapa, da confusão interna até um posicionamento firme e consciente.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Momentos de direcionamento",
    desc: "Espaços para ajustar sua rota, tirar dúvidas e continuar avançando com clareza, sem se perder no meio do caminho.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "Diário de uma Rainha",
    desc: "Um espaço de construção interna, onde você registra, organiza e aprofunda tudo o que está sendo revelado ao longo da mentoria.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "Kit Identidade Escolhida",
    desc: "Um conjunto de elementos simbólicos que acompanham a sua jornada e reforçam a identidade que você está construindo ao longo do processo.",
  },
];

function WhatYouReceive() {
  return (
    <section style={{ background: "#F9F4EF" }} className="py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div className="mb-4 text-center">
            <p
              className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#6B7558]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              O que você recebe
            </p>
            <h2
              className="mb-4 leading-[1.15] tracking-[-0.02em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-silver)",
                fontSize: "clamp(28px, 3.8vw, 46px)",
              }}
            >
              Estrutura completa para sustentar sua transformação
            </h2>
            <p
              className="mx-auto mb-16 max-w-[520px] font-light leading-[1.7] text-[#5E4535]"
              style={{ fontSize: "16px" }}
            >
              Não só durante os encontros, mas principalmente na forma como você passa a
              viver depois deles.
            </p>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {deliverables.slice(0, 3).map((item, i) => (
            <RevealWrapper key={item.title} delay={80 + i * 80}>
              <div
                className="flex flex-col rounded-[18px] p-7 transition-shadow duration-200 hover:shadow-[0_6px_24px_rgba(107,77,55,0.10)]"
                style={{
                  background: "white",
                  border: "1px solid rgba(94,69,53,0.08)",
                }}
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-[12px]"
                  style={{ background: "rgba(184,120,74,0.10)", color: "#B8784A" }}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <h3
                  className="mb-2 text-[15px] font-bold text-[#1C1410]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[13px] font-light leading-[1.7] text-[#5E4535]">
                  {item.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mx-auto md:max-w-[680px]">
          {deliverables.slice(3).map((item, i) => (
            <RevealWrapper key={item.title} delay={320 + i * 80}>
              <div
                className="flex flex-col rounded-[18px] p-7 transition-shadow duration-200 hover:shadow-[0_6px_24px_rgba(107,77,55,0.10)]"
                style={{
                  background: "white",
                  border: "1px solid rgba(94,69,53,0.08)",
                }}
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-[12px]"
                  style={{ background: "rgba(184,120,74,0.10)", color: "#B8784A" }}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <h3
                  className="mb-2 text-[15px] font-bold text-[#1C1410]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[13px] font-light leading-[1.7] text-[#5E4535]">
                  {item.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper delay={500}>
          <p
            className="mt-12 text-center font-light italic leading-[1.7] text-[#5E4535]"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(17px, 2vw, 20px)" }}
          >
            Aqui, você não recebe apenas conteúdo — você recebe estrutura para viver o que
            aprende.
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PRICING
───────────────────────────────────────────── */
const includes = [
  "Plano de Ação – O Meu Legado",
  "Jornada guiada em 6 encontros ao vivo",
  "Momentos de direcionamento e alinhamento",
  "Diário de uma Rainha",
  "Kit Identidade Escolhida",
];

const costItems = [
  "Adiar decisões que você sabe que precisa tomar.",
  "Se calar quando deveria se posicionar.",
  "Avançar por um tempo… e depois voltar exatamente pro mesmo lugar.",
];

function Pricing() {
  return (
    <section id="pricing" style={{ background: "#F5F5F5" }} className="py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        {/* Quanto custa */}
        <RevealWrapper delay={0}>
          <div className="mb-16 text-center">
            <p
              className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#6B7558]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Investimento
            </p>
            <h2
              className="mb-8 leading-[1.2] tracking-[-0.02em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-silver)",
                fontSize: "clamp(26px, 3.5vw, 40px)",
              }}
            >
              Quanto custa continuar vivendo assim?
            </h2>
            <div className="mx-auto mb-8 flex max-w-[540px] flex-col gap-4 text-left">
              {costItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "#B8784A" }}
                    aria-hidden="true"
                  />
                  <p
                    className="font-light leading-[1.7] text-[#5E4535]"
                    style={{ fontSize: "15px" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="mx-auto max-w-[520px] font-light leading-[1.85] text-[#5E4535]"
              style={{ fontSize: "16px" }}
            >
              A Mentoria Caminho de Ester encurta esse caminho. Ela te entrega direção,
              estrutura e acompanhamento para que você saia da tentativa e comece, de
              fato, a construir.
            </p>
          </div>
        </RevealWrapper>

        {/* Pricing card */}
        <RevealWrapper delay={100}>
          <div className="relative mx-auto max-w-[680px] overflow-hidden rounded-[28px] bg-white px-8 py-20 text-center shadow-[0_8px_60px_rgba(0,0,0,0.14)] md:px-20">
            {/* Top gradient bar */}
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{
                background: "linear-gradient(90deg, #C9996A 0%, #B8784A 100%)",
              }}
              aria-hidden="true"
            />

            <h2
              className="mb-4 leading-[1.2] tracking-[-0.025em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-silver)",
                fontSize: "clamp(22px, 3vw, 30px)",
              }}
            >
              A decisão que muda tudo.
            </h2>

            <p
              className="mx-auto mb-10 max-w-[420px] font-light leading-[1.8] text-[#5E4535]"
              style={{ fontSize: "16px" }}
            >
              Você já sabe o que precisa mudar. Sabe o que não dá mais pra sustentar. E
              sabe que não é falta de capacidade — é falta de estrutura.
            </p>

            {/* Includes list */}
            <div className="mb-10 mx-auto flex w-fit flex-col gap-3 text-left">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span
                    className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "#B8784A" }}
                    aria-hidden="true"
                  >
                    <Check size={10} color="#fff" strokeWidth={3} />
                  </span>
                  <span
                    className="text-[14px] font-light leading-[1.6] text-[#5E4535]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div
              className="mb-3 flex items-start justify-center gap-1"
              aria-label="R$ 997"
            >
              <span
                className="mt-[20px] text-[26px] font-bold text-[#1C1410]"
                aria-hidden="true"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                R$
              </span>
              <span
                className="font-extrabold leading-none tracking-[-0.04em] text-[#1C1410]"
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "clamp(72px, 12vw, 96px)",
                }}
              >
                997
              </span>
            </div>

            <p
              className="mb-8 text-[13px] tracking-[0.05em] text-[#9A8070]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              à vista ou parcelado
            </p>

            {/* CTA */}
            <div className="mb-6 flex justify-center">
              <a
                href={WA_APPLY_LINK}
                className="btn-grad flex w-full items-center justify-center gap-2 rounded-full px-8 py-[16px] text-[12px] font-semibold text-white shadow-[0_4px_20px_rgba(60,75,35,0.35)] whitespace-nowrap md:w-auto md:px-[52px] md:py-[18px] md:text-[13px]"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  letterSpacing: "0.04em",
                  background: "linear-gradient(135deg, #688339 0%, #2f3d18 100%)",
                }}
                aria-label="Quero minha identidade firmada"
              >
                Quero minha identidade firmada
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
            </div>

            <p
              className="mx-auto max-w-[380px] font-light italic leading-[1.7] text-[#9A8070]"
              style={{ fontSize: "13px" }}
            >
              A decisão de sair desse ciclo ainda é sua. E talvez essa seja a decisão que
              muda tudo.
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function FooterMentoria() {
  return (
    <footer
      className="border-t border-white/[0.04] px-5 py-12 text-center"
      style={{ background: "#2a1a0f" }}
    >
      <div className="mx-auto mb-6 flex max-w-[1000px] flex-col items-center gap-4 md:flex-row md:justify-between">
        <div
          className="text-[14px] font-light italic tracking-[0.2em] text-[#9A8070]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Caminho de Ester
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { label: "A Mentoria", href: "#a-mentoria" },
            { label: "O Caminho", href: "#o-caminho" },
            { label: "Investimento", href: "#pricing" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] text-[#5E4535] no-underline transition-colors duration-150 hover:text-[#9A8070]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div
        className="border-t pt-6 text-[11px] tracking-[0.08em] text-[#5E4535]"
        style={{
          fontFamily: "var(--font-montserrat)",
          borderColor: "rgba(255,255,255,0.04)",
        }}
      >
        © 2026 Hadassah Perez · Todos os direitos reservados
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function MentoriaPage() {
  return (
    <>
      <NavbarMentoria />
      <main>
        <Hero />
        <MentalActivation />
        <LogicProof />
        <SixStages />
        <ThreePillars />
        <Differentials />
        <PersonalProof />
        <SocialProof />
        <WhatYouReceive />
        <Pricing />
      </main>
      <FooterMentoria />
    </>
  );
}
