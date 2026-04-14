import Image from "next/image";
import { Check } from "lucide-react";
import RevealWrapper from "@/components/RevealWrapper";
import { ButaoMCE } from "@/components/mentoria/BotaoMCE";

// <!-- WHATSAPP_LINK -->
const CTA_LINK = "#pricing";

/* Thin golden separator line between sections */
function GoldLine() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto h-px w-full max-w-[1160px]"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(201,153,106,0.4) 20%, rgba(201,153,106,0.4) 80%, transparent 100%)",
      }}
    />
  );
}
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
      className="relative overflow-hidden pt-12 pb-0 md:pt-0"
      style={{ background: "#F0E8DC", minHeight: "90vh" }}
    >
      <div className="mx-auto grid max-w-[1160px] min-h-[90vh] grid-cols-1 items-center px-5 md:grid-cols-[55%_45%] md:px-10">
        {/* Left — text */}
        <div className="py-16 md:py-28 md:pr-12">
          {/* Badge */}
          <p
            className="animate-reveal mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#B8784A]"
            style={{ fontFamily: "var(--font-montserrat)", animationDelay: "0ms" }}
          >
            Mentoria Caminho de Ester
          </p>

          {/* Logo */}
          <div
            className="animate-reveal mb-7 flex justify-start"
            style={{ animationDelay: "40ms" }}
          >
            <Image
              src="/logo-olive.png"
              alt="Hadassah Perez"
              width={220}
              height={68}
              className="h-[68px] w-auto"
              priority
            />
          </div>

          <h1
            className="animate-reveal mb-7 max-w-[500px] leading-[1.08] tracking-[-0.03em] text-[#1C1410]"
            style={{
              fontFamily: "var(--font-silver)",
              fontSize: "clamp(36px, 4.8vw, 58px)",
              animationDelay: "80ms",
            }}
          >
            Saia do ciclo de viver dividida
            entre quem você é hoje e quem Deus te chamou pra ser.
          </h1>

          <p
            className="animate-reveal mb-10 max-w-[460px] font-light leading-[1.45] text-[#5E4535]"
            style={{ fontSize: "clamp(16px, 2vw, 20px)", animationDelay: "160ms" }}
          >
            Se você sente que existe uma versão sua que sabe do seu propósito, mas na
            prática ainda trava, se cala ou recua — essa mentoria te guia a reconstruir
            sua identidade em Deus, alinhar seu chamado e se posicionar com segurança,
            <span className="text-black font-semibold"> sem continuar voltando pro mesmo lugar.</span>
          </p>

          <div
            className="animate-reveal flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "240ms" }}
          >
            <ButaoMCE text={"ENTRAR PARA MCE"} link={CTA_LINK} />
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
              src="/RCF-2345.jpeg"
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
                src="/coroa.jpeg"
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
          <RevealWrapper delay={120}>
            <h2
              className="mb-5 leading-[1.18] tracking-[-0.02em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-silver)",
                fontSize: "clamp(22px, 2.8vw, 34px)",
              }}
            >
              Tem dias que você sente que está pronta. Que agora vai.
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={150}>
            <div
              className="mb-6 h-px w-12"
              style={{ background: "#C9996A" }}
              aria-hidden="true"
            />
          </RevealWrapper>

          <RevealWrapper delay={170}>
            <p
              className="mb-4 text-[#1C1410]"
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(18px, 2vw, 22px)",
              }}
            >
              Mas...
            </p>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <ul className="mb-7 flex flex-col gap-3" role="list">
              {[
                "Trava na hora de se posicionar",
                "Se cala quando deveria falar",
                "Avança por um tempo e volta pro mesmo lugar",
                "Sente que não é suficiente pra sustentar o que Deus te mostrou",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3" role="listitem">
                  <span>
                    ❌
                  </span>
                  <span className="text-[15px] font-light leading-[1.6] text-[#5E4535]">{item}</span>
                </li>
              ))}
            </ul>
          </RevealWrapper>

          <RevealWrapper delay={250}>
            <p
              className="mb-4 font-light leading-[1.8] text-[#5E4535]"
              style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
            >
              Você finalmente entendeu quem você é e o que Deus já te mostrou
              sobre você...
            </p>
          </RevealWrapper>

          <RevealWrapper delay={290}>
            <p
              className="mb-6 font-light leading-[1.8] text-[#5E4535]"
              style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
            >
              É como se existissem duas versões suas: uma que sabe quem é, e outra que
              sempre te puxa de volta pra onde você sempre esteve.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={330}>
            <blockquote
              className="mb-6 border-l-[3px] pl-5"
              style={{ borderColor: "#688339" }}
            >
              <p
                className="leading-[1.6] text-[#5E4535]"
                style={{
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "clamp(15px, 1.8vw, 17px)",
                }}
              >
                &ldquo;E o mais cansativo é perceber que você até avança por um momento,
                mas nunca consegue sustentar.&rdquo;
              </p>
            </blockquote>
          </RevealWrapper>

          <RevealWrapper delay={370}>
            <p
              className="font-light leading-[1.8] text-[#5E4535]"
              style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
            >
              Não é fraqueza. Não é falta de fé. É algo muito mais profundo — e é
              exatamente isso que a Mentoria Caminho de Ester foi criada pra transformar.
            </p>
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
        <RevealWrapper delay={0}>
          <h2
            className="mb-8 leading-[1.12] tracking-[-0.025em] text-[#1C1410]"
            style={{
              fontFamily: "var(--font-silver)",
              fontSize: "clamp(32px, 5vw, 48px)",
            }}
          >
            Você não está travada por falta de fé, nem por falta de vontade de mudar
            — porque se fosse isso, você já teria conseguido.
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={140}>
          <p className="mb-5 font-light leading-[1.85]  text-[#5E4535]" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
            Você tenta, se aproxima de Deus, decide fazer diferente… mas, depois de um
            tempo, tudo volta pro mesmo lugar.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={190}>

          <p
            className="mb-5 border-l-[3px] border-[#688339] pl-3 py-2 font-semibold leading-[1.5] text-[#1C1410]"
            style={{ fontSize: "clamp(15px, 1.8vw, 18px)" }}
          >
            Não é falta de esforço. É falta de base.
          </p>

        </RevealWrapper>

        <RevealWrapper delay={230}>
          <p className="mb-8 font-light leading-[1.85] text-[#5E4535]" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
            Quando a sua identidade não está firmada, qualquer tentativa de se
            posicionar vira esforço — e não sustenta.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={290}>
          <blockquote
            className="rounded-[14px] border-l-[3px] p-6"
            style={{ borderColor: "#C9996A", background: "#F9F4EF" }}
          >
            <p
              className="leading-[1.65] text-[#5E4535]"
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(14px, 1.7vw, 16px)",
              }}
            >
              &ldquo;Não porque você quer, mas porque ainda não existe dentro de você uma
              estrutura que sustente quem você sabe que é. E é exatamente isso que precisa
              ser construído.&rdquo;
            </p>
          </blockquote>
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
    num: "1",
    title: "Despertar da Identidade",
    desc: "Você entende quem tem sido até aqui e reconstrói quem Deus te chamou pra ser.",
  },
  {
    num: "2",
    title: "Preparação",
    desc: "Cria base e alinhamento na sua rotina, na sua vida espiritual e na forma como você se sustenta.",
  },
  {
    num: "3",
    title: "Posição",
    desc: "Desenvolve clareza e segurança para se posicionar sem se anular.",
  },
  {
    num: "4",
    title: "Propósito",
    desc: "Enxerga com mais direção como sua história se conecta com o que você foi chamada pra viver.",
  },
  {
    num: "5",
    title: "Coragem",
    desc: "Toma decisões com firmeza, \n sem voltar atrás.",
  },
  {
    num: "6",
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
              className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#B8784A]"
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
              style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
            >
              Um caminho guiado e estruturado em etapas — do despertar à constância.
            </p>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {stages.map((stage, i) => (
            <RevealWrapper key={stage.title} delay={80 + i * 60} className="h-full">
              <div
                className="relative h-full overflow-hidden rounded-[18px] p-7 transition-shadow duration-200 hover:shadow-[0_8px_32px_rgba(107,77,55,0.12)]"
                style={{
                  background: "white",
                  border: "1px solid rgba(94,69,53,0.08)",
                }}
              >
                <span
                  className="pointer-events-none absolute right-4 top-1 select-none font-bold leading-none"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "96px",
                    color: "rgba(104, 131, 57, 0.08)",
                  }}
                  aria-hidden="true"
                >
                  {stage.num}
                </span>
                <h3
                  className="relative mb-2 mt-10 text-[16px] font-bold text-[#1C1410]"
                  style={{ fontFamily: "var(--font-silver)" }}
                >
                  {stage.title}
                </h3>
                <p className="relative text-[14px] font-light leading-[1.65] text-[#5E4535]" style={{ whiteSpace: "pre-line" }}>
                  {stage.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PILARES DO MÉTODO
───────────────────────────────────────────── */
const pillars = [
  {
    emoji: "👑",
    title: "Identidade Espiritual",
    sub: "Quem você é em Deus",
    desc: "Aqui você reconstrói sua identidade a partir da verdade — não do que você sente, não do que viveu, mas do que Deus já estabeleceu sobre você. É isso que tira você da confusão e te dá direção.",
  },
  {
    emoji: "🧠",
    title: "Mente e Posicionamento",
    sub: "Como você se sustenta",
    desc: "Não adianta saber quem é e continuar se anulando na prática. Aqui você desenvolve clareza emocional, segurança e posicionamento, aprendendo a se sustentar na mulher que está se tornando.",
  },
  {
    emoji: "🌱",
    title: "Corpo e Preparação",
    sub: "A base que sustenta tudo",
    desc: "Sem estrutura, nada se mantém. Aqui você aprende a alinhar sua rotina, seus hábitos e sua vida com aquilo que você quer viver, criando consistência e presença. Porque posicionamento não é só decisão — é sustentação.",
  },
];

function ThreePillars() {
  return (
    <section style={{ background: "white" }} className="py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div className="mb-16 text-center">
            <p
              className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#B8784A]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Pilares do Método
            </p>
            <h2
              className="leading-[1.15] tracking-[-0.02em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-silver)",
                fontSize: "clamp(28px, 3.8vw, 46px)",
              }}
            >
              O que você encontra na mentoria?
            </h2>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <RevealWrapper key={pillar.title} delay={80 + i * 80}>
              <div className="flex flex-col items-center px-4 text-center">
                <span
                  className="mb-5 leading-none"
                  style={{ fontSize: "36px" }}
                  aria-hidden="true"
                >
                  {pillar.emoji}
                </span>
                <h3
                  className="mb-1 leading-[1.2] text-[#1C1410]"
                  style={{
                    fontFamily: "var(--font-silver)",
                    fontStyle: "italic",
                    fontSize: "clamp(18px, 2.2vw, 22px)",
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8784A]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {pillar.sub}
                </p>
                <p className="text-[14px] font-light leading-[1.75] text-[#5E4535]">
                  {pillar.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper delay={340}>
          <p
            className="mt-16 text-center font-light leading-[1.7] text-[#5E4535]"
            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(15px, 1.8vw, 17px)" }}
          >
            Quando esses três pilares se alinham, você para de viver em tentativa e
            <br /> começa a viver com clareza, firmeza e constância.
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
      <div className="relative mx-auto max-w-[860px] px-5 md:px-10">
        <RevealWrapper delay={0}>

          <h2
            className="mb-8 leading-[1.1] tracking-[-0.025em] text-[#F5EDD8] "
            style={{
              fontFamily: "var(--font-silver)",
              fontSize: "clamp(36px, 5vw, 52px)",
            }}
          >
            E então, você fica se perguntando...
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={50}>
          <h3 className="text-[#F5EDD8] text-center mb-8"
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "clamp(18px, 2vw, 20px)",
            }}
          >
            "Será que vai ser mais um curso que não vou terminar?"
          </h3>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <p
            className="mb-6 font-light leading-[1.85] text-[#DFB98A]"
            style={{ fontSize: "clamp(15px, 1.8vw, 18px)" }}
          >
            A Mentoria Caminho de Ester foi criada para te transformar de um jeito que
            você consiga sustentar. Aqui, você não recebe apenas direcionamento espiritual
            ou ferramentas práticas isoladas. Você aprende a alinhar os dois, porque não
            adianta entender quem você é em Deus e continuar vivendo da mesma forma.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={170}>
          <p
            className="mb-10 font-light leading-[1.85] text-[#DFB98A]"
            style={{ fontSize: "clamp(15px, 1.8vw, 17px)" }}
          >
            E se hoje você sente que já tentou mudar antes e não conseguiu, o problema não
            é você. É que, até agora, faltou um caminho que realmente te sustentasse.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={240} className="text-center">
          <ButaoMCE text={"QUERO MINHA TRANSFORMAÇÃO"} link={CTA_LINK} />
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
      className="relative py-24 md:py-32"
      style={{ background: "#2a1a0f" }}
    >
      <div className="relative mx-auto grid max-w-[1160px] grid-cols-1 items-start gap-16 px-5 md:grid-cols-[1fr_420px] md:px-10">
        {/* Text */}
        <div>
          <RevealWrapper delay={60}>
            <h2
              className="mb-10 leading-[1.05] tracking-[-0.02em] text-[#F5EDD8]"
              style={{
                fontFamily: "var(--font-silver)",
                fontSize: "clamp(48px, 6.5vw, 76px)",
              }}
            >
              Hadassah Perez
            </h2>
          </RevealWrapper>

          <div className="md:hidden block mb-16">
            <div
              className="relative overflow-hidden rounded-[24px]"
              style={{
                aspectRatio: "3/4",
                boxShadow: "0 8px 48px rgba(0,0,0,0.40)",
              }}
            >
              <Image
                src="/foto (prova pessoal).JPG"
                alt="Hadassah Perez"
                fill
                className="object-cover object-top"
                sizes="400px"
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

          <RevealWrapper delay={100}>
            <p
              className="mb-5 font-light leading-[1.55] text-[#DFB98A]"
              style={{
                fontSize: "clamp(15px, 1.8vw, 18px)",
              }}
            >
              Por muito tempo, eu também <span className="font-semibold italic">me senti assim</span> — dividida entre a mulher
              que mostrava ao mundo e a versão que ninguém via. No fundo, sempre parecia que algo não encaixava. Eu fazia tudo certo, mas havia
              uma distância entre o que eu sabia e o que eu vivia.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={190}>
            <p
              className="mb-5 font-light leading-[1.8] text-[#DFB98A]"
              style={{ fontSize: "clamp(15px, 1.7vw, 18px)" }}
            >
              Eu sabia que carregava um chamado, sabia que Deus já tinha me mostrado muita
              coisa. Mas na prática, eu continuava voltando pro mesmo lugar — como se tivesse
              um teto invisível que eu não conseguia ultrapassar.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={230}>
            <p
              className="mb-5 font-light leading-[1.8] text-[#DFB98A]"
              style={{ fontSize: "clamp(15px, 1.7vw, 18px)" }}
            >
              Até perceber que o problema não era falta de fé, mas falta de identidade firmada.
              Quando eu entendi isso, tudo começou a mudar de verdade.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={260}>
            <p
              className="mb-8 font-light leading-[1.8] text-[#DFB98A]"
              style={{ fontSize: "clamp(15px, 1.7vw, 18px)" }}
            >
              E foi a partir disso que nasceu a Mentoria Caminho de Ester — não de teoria, mas
              de um processo real de construção de identidade.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={300}>
            <div
              className="mb-8 rounded-[14px] p-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,153,106,0.15)",
              }}
            >
              <p
                className="leading-[1.6] text-[#DFB98A] text-center md:text-left"
                style={{
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "clamp(14px, 1.7vw, 16px)",
                }}
              >
                &ldquo;Porque, no final, não é se tornar alguém diferente, mas
                sustentar quem você já foi chamada pra ser.&rdquo;
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={340}>
            <ul className="flex flex-col gap-2" role="list">
              {credentials.map((cred) => (
                <li
                  key={cred}
                  className="flex items-center gap-3 text-[13px] font-light leading-[1.5] text-[#9A8070]"
                  role="listitem"
                >
                  <span aria-hidden="true" className="shrink-0 text-[#C9996A]">•</span>
                  {cred}
                </li>
              ))}
            </ul>
          </RevealWrapper>
        </div>

        {/* Photo — sticky */}
        <div className="hidden md:block md:sticky md:top-[96px] md:self-start">
          <div
            className="relative overflow-hidden rounded-[24px]"
            style={{
              aspectRatio: "3/4",
              boxShadow: "0 8px 48px rgba(0,0,0,0.40)",
            }}
          >
            <Image
              src="/foto (prova pessoal).JPG"
              alt="Hadassah Perez"
              fill
              className="object-cover object-top"
              sizes="400px"
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
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROVA SOCIAL
───────────────────────────────────────────── */
function SocialProof() {
  return (
    <section style={{ background: "#F7F1E8" }} className="py-24 md:py-32">
      <div className="mx-auto max-w-[860px] px-5 text-center md:px-10">
        <RevealWrapper delay={0}>
          <h2
            className="mb-10 leading-[1.12] tracking-[-0.03em] text-[#1C1410]"
            style={{
              fontFamily: "var(--font-silver)",
              fontSize: "clamp(38px, 5.5vw, 52px)",
            }}
          >
            Se você chegou até aqui, é porque em algum momento você se reconheceu em tudo isso.
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <p
            className="mb-5 font-light leading-[1.85] text-[#5E4535]"
            style={{ fontSize: "clamp(15px, 1.8vw, 18px)" }}
          >
            Não só na dor de se sentir dividida, mas na sensação de saber que existe algo
            maior <br /> em você que ainda não está sendo vivido como deveria.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={160}>
          <p
            className="mb-10 font-light leading-[1.85] text-[#5E4535]"
            style={{ fontSize: "clamp(15px, 1.8vw, 18px)" }}
          >
            A Mentoria Caminho de Ester não foi construída a partir de teoria ou de
            promessas  <br /> vazias, mas de um processo real, que toca exatamente no ponto que
            <br /> precisa ser transformado: a base que sustenta quem você é.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={220}>
          <div
            className="rounded-[18px] px-10 py-7"
            style={{
              background: "rgba(255,255,255,0.70)",
              border: "1px solid rgba(184,120,74,0.18)",
            }}
          >
            <p
              className="leading-[1.55] text-[#5E4535]"
              style={{
                fontStyle: "italic",
                fontSize: "clamp(16px, 2vw, 20px)",
              }}
            >
              Quando é o caminho certo, você não precisa ser <br /> convencida, {" "}
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
    icon: "📄",
    title: "Plano de Ação – O Meu Legado",
    desc: "Um direcionamento prático para organizar seus próximos passos com clareza, alinhando identidade, propósito e posicionamento em uma visão concreta de vida.",
  },
  {
    icon: "🎥",
    title: "Jornada guiada em 6 encontros",
    desc: "Um caminho estruturado que te conduz, etapa por etapa, da confusão interna até um posicionamento firme e consciente.",
  },
  {
    icon: "⏳",
    title: "Momentos de direcionamento",
    desc: "Espaços para ajustar sua rota, tirar dúvidas e continuar avançando com clareza, sem se perder no meio do caminho.",
  },
  {
    icon: "📖",
    title: "Diário de uma Rainha",
    desc: "Um espaço de construção interna, onde você registra, organiza e aprofunda tudo o que está sendo revelado ao longo da mentoria.",
  },
  {
    icon: "👑",
    title: "Kit Identidade Escolhida",
    desc: "Um conjunto de elementos simbólicos que acompanham a sua jornada e reforçam a identidade que você está construindo ao longo do processo.",
  },
];

function WhatYouReceive() {
  return (
    <section style={{ background: "#F9F4EF" }} className="py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div className="mb-16 text-center">
            <h3
              className="leading-[1.12] tracking-[-0.03em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-silver)",
                fontSize: "clamp(36px, 5vw, 48px)",
              }}
            >
              O que você acessa quando entra para
            </h3>
            <h2
              className="leading-[1.12] tracking-[-0.03em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-silver)",
                fontSize: "clamp(36px, 5vw, 48px)",
              }}
            >
              o caminho de Ester:
            </h2>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {deliverables.slice(0, 3).map((item, i) => (
            <RevealWrapper key={item.title} delay={80 + i * 80} className="h-full">
              <div
                className="flex h-full flex-col rounded-[18px] p-7 transition-shadow duration-200 hover:shadow-[0_6px_24px_rgba(107,77,55,0.10)]"
                style={{
                  background: "white",
                  border: "1px solid rgba(94,69,53,0.08)",
                }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px]"
                  style={{ background: "rgba(107,117,88,0.08)", color: "#6B7558" }}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <h3
                  className="mb-2 leading-[1.3]"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(15px, 1.8vw, 17px)",
                    color: "#5E4535",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-[13px] font-light leading-[1.7] text-[#9A8070]">
                  {item.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mx-auto md:max-w-[680px]">
          {deliverables.slice(3).map((item, i) => (
            <RevealWrapper key={item.title} delay={320 + i * 80} className="h-full">
              <div
                className="flex h-full flex-col rounded-[18px] p-7 transition-shadow duration-200 hover:shadow-[0_6px_24px_rgba(107,77,55,0.10)]"
                style={{
                  background: "white",
                  border: "1px solid rgba(94,69,53,0.08)",
                }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px]"
                  style={{ background: "rgba(107,117,88,0.08)", color: "#6B7558" }}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <h3
                  className="mb-2 leading-[1.3]"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(15px, 1.8vw, 17px)",
                    color: "#5E4535",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-[13px] font-light leading-[1.7] text-[#9A8070]">
                  {item.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper delay={500}>
          <p
            className="mt-12 text-center font-light leading-[1.7] text-[#5E4535]"
            style={{ fontSize: "clamp(15px, 1.8vw, 17px)" }}
          >
            Aqui, você não recebe apenas conteúdo — você recebe <i>estrutura</i> para viver o que aprende.
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
    <section id="pricing" style={{ background: "#F7F1E8" }} className="py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        {/* Quanto custa */}
        <RevealWrapper delay={0}>
          <div className="mb-16 text-center">
            <h2
              className="mb-10 leading-[1.1] tracking-[-0.03em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-silver)",
                fontSize: "clamp(36px, 5vw, 54px)",
              }}
            >
              Quanto custa continuar vivendo assim?
            </h2>
            <div className="mx-auto mb-8 flex max-w-[480px] flex-col gap-4 text-center">
              {costItems.map((item, i) => (
                <div key={i} className="flex items-start justify-center gap-3">
                  <span
                    className="mt-[3px] shrink-0 font-light text-[#B8784A]"
                    style={{ fontSize: "14px" }}
                    aria-hidden="true"
                  >
                    ❌
                  </span>
                  <p
                    className="font-light leading-[1.7] text-[#5E4535]"
                    style={{ fontSize: "14px" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="mx-auto max-w-[520px] font-light leading-[1.85] text-[#5E4535]"
              style={{ fontSize: "clamp(15px, 1.8vw, 17px)" }}
            >
              A MCE encurta esse caminho. Ela te entrega direção,
              estrutura e acompanhamento para que você <b>saia da tentativa </b>e <br /> comece, de
              fato, a construir.
            </p>
          </div>
        </RevealWrapper>

        {/* Pricing card */}
        <RevealWrapper delay={100}>
          <div className="relative mx-auto max-w-[580px]">
            <div
              className="relative overflow-hidden rounded-[24px] bg-white px-8 pb-14 pt-16 text-center md:px-16"
              style={{
                border: "1.5px solid rgba(201,153,106,0.30)",
                boxShadow: "0 8px 48px rgba(0,0,0,0.10)",
              }}
            >
              {/* Top gradient bar */}
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{
                  background: "linear-gradient(90deg, #C9996A 0%, #B8784A 100%)",
                }}
                aria-hidden="true"
              />
              {/* 
            <h2
              className="mb-4 leading-[1.2] tracking-[-0.025em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-silver)",
                fontStyle: "italic",
                fontSize: "clamp(22px, 3vw, 30px)",
              }}
            >
              A decisão que muda tudo.
            </h2> */}

              <p
                className="mx-auto mb-10 max-w-[380px] font-light leading-[1.8] text-[#5E4535]"
                style={{ fontSize: "clamp(14px, 1.7vw, 16px)" }}
              >
                Você já sabe o que precisa mudar. Sabe o que não dá mais pra sustentar. E
                sabe que não é falta de capacidade — é falta de estrutura.
              </p>

              {/* Includes list */}
              <div className="mb-10 mx-auto flex w-fit flex-col gap-3 text-left">
                {includes.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "#6B7558" }}
                      aria-hidden="true"
                    >
                      <Check size={10} color="#fff" strokeWidth={3} />
                    </span>
                    <span
                      className="text-[14px] font-light leading-[1.6] text-[#B8784A]"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <span >O seu investimento será de:</span>
              </div>

              {/* Price */}
              <div className="mb-8 text-center" aria-label="R$ 997 à vista ou parcelado">
                <p
                  className="leading-none tracking-[-0.03em] font-bold"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "clamp(36px, 9vw, 56px)",
                    color: "#1C1410",
                  }}
                >
                  10x de R$ 99,70
                </p>
                <p
                  className="mt-2 text-[16px] tracking-[0.04em] text-[#9A8070]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  ou R$ 997 à vista
                </p>
              </div>

            </div>

            {/* CTA — corta a borda inferior do card */}
            <div className="relative z-10 flex justify-center mt-[-24px] md:mt-[-30px]">
              <ButaoMCE text={"QUERO ENTRAR PARA MCE"} link={WA_APPLY_LINK} />
            </div>
          </div>
        </RevealWrapper>

        {/* Bottom quote */}
        <RevealWrapper delay={280}>
          <p
            className="mt-10 text-center font-light leading-[1.7] text-[#9A8070]"
            style={{ fontSize: "16px" }}
          >
            A decisão de sair desse ciclo ainda é sua.<br /> E talvez essa seja a decisão que muda tudo.
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   GARANTIA
───────────────────────────────────────────── */
function Guarantee() {
  return (
    <section style={{ background: "#1C1410" }} className="py-20 md:py-28">
      <div className="mx-auto max-w-[860px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div
            className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16"
          >
            {/* Ícone */}
            <div className="shrink-0 flex flex-col items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#688339" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              <p
                className="text-center font-light"
                style={{ color: "rgba(247,241,232,0.45)", fontFamily: "var(--font-montserrat)", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase" }}
              >
                Garantia incondicional
              </p>
            </div>

            {/* Texto */}
            <div>
              <h2
                className="mb-5 leading-[1.1] tracking-[-0.03em]"
                style={{ color: "#F7F1E8", fontFamily: "var(--font-silver)", fontSize: "clamp(32px, 5vw, 48px)" }}
              >
                Garantia de 7 dias
              </h2>
              <p
                className="mb-4 font-light leading-[1.85]"
                style={{ color: "rgba(247,241,232,0.75)", fontFamily: "var(--font-montserrat)", fontSize: "clamp(14px, 1.7vw, 16px)" }}
              >
                A MCE é onde entrego o meu absoluto melhor — e espero que tudo o que você leu aqui tenha te mostrado isso. Mas eu sei que é muito mais fácil decidir com clareza depois de vivenciar por dentro.
              </p>
              <p
                className="font-light leading-[1.85]"
                style={{ color: "rgba(247,241,232,0.75)", fontFamily: "var(--font-montserrat)", fontSize: "clamp(14px, 1.7vw, 16px)" }}
              >
                Por isso, se nos primeiros 7 dias você sentir que não é para você,{" "}
                <span style={{ color: "#8ab54e", fontWeight: 500 }}>devolvemos 100% do seu investimento</span>
                {" "}— sem burocracia, sem perguntas.
              </p>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DÚVIDAS
───────────────────────────────────────────── */
function Doubts() {
  return (
    <section style={{ background: "#2a1a0f" }} className="pt-16 md:pt-20">
      <div className="mx-auto max-w-[640px] px-5 text-center">
        <RevealWrapper delay={0}>
          <h2
            className="mb-4 leading-[1.2] tracking-[-0.02em]"
            style={{ color: "#F7F1E8", fontFamily: "var(--font-silver)", fontSize: "clamp(26px, 4vw, 34px)" }}
          >
            Ficou com alguma dúvida?
          </h2>
          <p
            className="mb-8 font-light leading-[1.8]"
            style={{ color: "rgba(247,241,232,0.7)", fontFamily: "var(--font-montserrat)", fontSize: "clamp(14px, 1.7vw, 16px)" }}
          >
            Manda uma mensagem que te ajudo
          </p>
          <a
            href={WA_APPLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-[13px] font-medium text-white no-underline transition-all duration-200 hover:-translate-y-[1px]"
            style={{
              background: "linear-gradient(135deg, #688339 0%, #2f3d18 100%)",
              boxShadow: "0 4px 20px rgba(60,75,35,0.35)",
              fontFamily: "var(--font-montserrat)",
              letterSpacing: "0.02em",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Fala comigo no WhatsApp
          </a>
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
      className="border-white/[0.04] px-5 py-12 text-center"
      style={{ background: "#2a1a0f" }}
    >
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
      <main>
        <Hero />
        <GoldLine />
        <MentalActivation />
        <GoldLine />
        <LogicProof />
        <GoldLine />
        <SixStages />
        <GoldLine />
        <ThreePillars />
        <Differentials />
        <GoldLine />
        <PersonalProof />
        <GoldLine />
        <SocialProof />
        <GoldLine />
        <WhatYouReceive />
        <Pricing />
        <Guarantee />
        <Doubts />
      </main>
      <FooterMentoria />
    </>
  );
}
