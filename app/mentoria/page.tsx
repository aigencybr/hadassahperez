import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import RevealWrapper from "@/components/RevealWrapper";
import NavbarMentoria from "@/components/mentoria/NavbarMentoria";
import FAQMentoria from "@/components/mentoria/FAQMentoria";

// <!-- WHATSAPP_LINK -->
const CTA_LINK = "#pricing";
const WA_APPLY_LINK = "https://wa.me/5562998791555?text=Olá+Hadassah,+quero+me+inscrever+no+Caminho+de+Ester";

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


          {/* H1 */}
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

          {/* Subtitle */}
          <p
            className="animate-reveal mb-10 max-w-[460px] font-light leading-[1.75] text-[#5E4535]"
            style={{ fontSize: "17px", animationDelay: "160ms" }}
          >
            Desperta a identidade que foi forjada no secreto e aprende a governar sua vida
            com a sabedoria e a graça de uma rainha moderna.
          </p>

          {/* CTA */}
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
          {/* Decorative rectangle */}
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
   PROBLEM IDENTIFICATION
───────────────────────────────────────────── */
function ProblemIdentification() {
  return (
    <section
      aria-label="Identificação do problema"
      style={{ background: "#F7F1E8" }}
      className="py-0"
    >
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 md:grid-cols-2">
        {/* Photo */}
        <RevealWrapper delay={0} className="h-full">
          <div className="h-full md:flex md:flex-col md:py-20 md:pr-6">
            <div
              className="relative h-[420px] overflow-hidden rounded-[24px] md:h-auto md:flex-1"
            >
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
            <h2
              className="mb-7 leading-[1.18] tracking-[-0.02em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-silver)",
                fontSize: "clamp(26px, 3vw, 38px)",
              }}
            >
              Você sente que está apenas{" "}
              <span style={{ color: "#B8784A" }}>sobrevivendo</span>{" "}
              ao peso das suas escolhas?
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={160}>
            <p
              className="mb-5 font-light leading-[1.8] text-[#5E4535]"
              style={{ fontSize: "16px" }}
            >
              O cansaço que você sente não é falta de esforço. É o peso de carregar uma
              versão de si mesma que não lhe pertence mais: você sorri, cumpre tarefas,
              cuida de todos. Mas no fundo, sente que sua existência está sendo guardada
              em uma gaveta trancada.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={220}>
            <p
              className="font-light leading-[1.8] text-[#5E4535]"
              style={{ fontSize: "16px" }}
            >
              Viver dividida drena sua energia, rouba seu brilho e afasta do
              destino que Deus desenhou para você. Falta uma base sólida. Falta
              saber, com clareza absoluta, quem você é quando se sujeita ao
              alinhamento de Deus.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={280}>
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
   PULL QUOTE + PAIN POINTS
───────────────────────────────────────────── */
const painPoints = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Sem Estrutura",
    desc: "Você tem sonhos e senso de chamado, mas não sabe como construir a identidade e o caminho que os sustenta.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
        <line x1="2" y1="2" x2="22" y2="22" />
      </svg>
    ),
    title: "Vida Turva",
    desc: "Decisões importantes ficam paralisadas porque falta clareza de quem você é e para onde Deus está te chamando.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Mente Dividida",
    desc: "Você sabe quem quer ser, mas a voz do mundo, das expectativas e do medo fala mais alto que o seu chamado.",
  },
];

function PullQuotePainPoints() {
  return (
    <section style={{ background: "white" }} className="py-20 md:py-28">
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        {/* Pull Quote */}
        <RevealWrapper delay={0}>
          <div className="mb-20 text-center">
            <p
              className="mx-auto max-w-[640px] leading-[1.3] tracking-[-0.01em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "clamp(22px, 3.5vw, 34px)",
              }}
            >
              &ldquo;O problema não é sua força de vontade, é a sua{" "}
              <span style={{ color: "#B8784A" }}>fundação.</span>&rdquo;
            </p>
            <div
              className="mx-auto mt-6 h-px w-16"
              style={{ background: "rgba(201,153,106,0.5)" }}
              aria-hidden="true"
            />
          </div>
        </RevealWrapper>

        {/* Pain Points */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {painPoints.map((p, i) => (
            <RevealWrapper key={p.title} delay={i * 80}>
              <div
                className="rounded-[16px] p-7"
                style={{
                  background: "#F9F4EF",
                  border: "1px solid rgba(94,69,53,0.10)",
                }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px]"
                  style={{
                    background: "rgba(184,120,74,0.10)",
                    color: "#B8784A",
                  }}
                  aria-hidden="true"
                >
                  {p.icon}
                </div>
                <h3
                  className="mb-2 text-[15px] font-bold text-[#1C1410]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[13px] font-light leading-[1.7] text-[#5E4535]"
                >
                  {p.desc}
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
   AS 6 ESTAÇÕES DO CAMINHO
───────────────────────────────────────────── */
const stages = [
  {
    num: "I",
    title: "Despertar",
    desc: "Reconhecer quem você é em Deus, eliminando as camadas que não fazem parte do seu chamado.",
    color: "#B8784A",
  },
  {
    num: "II",
    title: "Preparação",
    desc: "Construir a estrutura interna necessária para suportar tudo o que Deus está preparando para você.",
    color: "#B8784A",
  },
  {
    num: "III",
    title: "Posição",
    desc: "Assumir o lugar que Deus designou para você com autoridade e identidade firmada.",
    color: "#B8784A",
  },
  {
    num: "IV",
    title: "Propósito",
    desc: "Entender com clareza o que Deus quer de você — e começar a caminhar deliberadamente nessa direção.",
    color: "#B8784A",
  },
  {
    num: "V",
    title: "Coragem",
    desc: "Tomar decisões alinhadas com fé mesmo diante do desconhecido e das vozes que tentam te paralisar.",
    color: "#B8784A",
  },
  {
    num: "VI",
    title: "Legado",
    desc: "Viver de forma que a sua história impacte as gerações futuras — filhas, comunidade, nação.",
    color: "#B8784A",
  },
];

function SixStages() {
  return (
    <section
      id="o-caminho"
      style={{ background: "#EDE3D4" }}
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        {/* Header */}
        <RevealWrapper delay={0}>
          <div className="mb-16 text-center">
            <h2
              className="mb-4 leading-[1.15] tracking-[-0.02em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-silver)",
                fontSize: "clamp(28px, 3.8vw, 46px)",
              }}
            >
              As 6 Estações do Caminho
            </h2>
            <p
              className="mx-auto max-w-[520px] font-light leading-[1.7] text-[#5E4535]"
              style={{ fontSize: "16px" }}
            >
              O método cronológico para mulheres que querem governar com propósito.
            </p>
          </div>
        </RevealWrapper>

        {/* Grid */}
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
                {/* Top accent */}
                <div
                  className="mb-5 flex items-center gap-3"
                >
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-[10px] text-[13px] font-bold text-white"
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
                  className="mb-2 text-[17px] font-bold text-[#1C1410]"
                  style={{ fontFamily: "var(--font-silver)" }}
                >
                  {stage.title}
                </h3>
                <p
                  className="text-[13px] font-light leading-[1.65] text-[#5E4535]"
                >
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
   OS TRÊS PILARES
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
    title: "Identidade Espiritual",
    desc: "Reconecte com sua origem em Deus, elimine as identidades impostas e construa uma identidade firmada no que Ele diz sobre você — não no que o mundo espera.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93A10 10 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.51 5.07-1.38" />
        <path d="M22 12c0-1.85-.51-3.58-1.38-5.07" />
      </svg>
    ),
    title: "Mente e Posicionamento",
    desc: "Tome as rédeas de seus pensamentos, aprenda a se posicionar com autoridade em todas as áreas e exerça com sabedoria o papel feminino no seu propósito.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Corpo e Preparação",
    desc: "A forma como você cuida do seu tempo, corpo e vitalidade reflete diretamente o peso do propósito que você consegue sustentar. Prepare-se para carregar o seu.",
  },
];

function ThreePillars() {
  return (
    <section style={{ background: "white" }} className="py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div className="mb-16 text-center">

            <h2
              className="leading-[1.15] tracking-[-0.02em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-silver)",
                fontSize: "clamp(28px, 3.8vw, 46px)",
              }}
            >
              Os Três Pilares da Mentoria
            </h2>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <RevealWrapper key={pillar.title} delay={80 + i * 80}>
              <div className="flex flex-col">
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px]"
                  style={{
                    background: "rgba(184,120,74,0.10)",
                    color: "#B8784A",
                  }}
                  aria-hidden="true"
                >
                  {pillar.icon}
                </div>
                {/* Accent line */}
                <div
                  className="mb-5 h-[3px] w-10 rounded-full"
                  style={{ background: "linear-gradient(90deg, #C9996A, transparent)" }}
                  aria-hidden="true"
                />
                <h3
                  className="mb-3 text-[18px] font-bold text-[#1C1410]"
                  style={{ fontFamily: "var(--font-silver)" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-[14px] font-light leading-[1.75] text-[#5E4535]"
                >
                  {pillar.desc}
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
   AUTHOR / GUIDE — DARK SECTION
───────────────────────────────────────────── */
function AuthorGuide() {
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
      {/* Radial glow */}
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
              &ldquo;Eu também já me senti perdida em meu próprio palácio.&rdquo;
            </blockquote>
          </RevealWrapper>

          <RevealWrapper delay={160}>
            <p
              className="mb-6 font-light leading-[1.8] text-[#DFB98A]"
              style={{ fontSize: "16px" }}
            >
              Olá, eu sou a Hadassah. Minha missão é ajudar mulheres a
              redescobrirem sua força e seu senso. O Caminho de Ester é
              apenas um ciclo — resultado de anos de formação, cura e
              alinhamento sobre o papel feminino no Reino de Deus.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={220}>
            <p
              className="mb-10 font-light leading-[1.8] text-[#DFB98A]"
              style={{ fontSize: "16px" }}
            >
              Eu entendo que não precisamos abrir mão da nossa força para
              termos autoridade. Que a nossa maior força reside na nossa
              identidade firmada em Deus.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={280}>
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
            {/* Decorative frame */}
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
              style={{
                boxShadow: "0 8px 48px rgba(0,0,0,0.30)",
              }}
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
   O QUE VOCÊ RECEBE
───────────────────────────────────────────── */
const deliverables = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: "Encontros Ao Vivo",
    desc: "Sessões mensais ao vivo com Hadassah e o grupo — com ensinamento, prática e espaço de partilha.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Plano de Ação Individual",
    desc: "Um plano personalizado para cada estação do Caminho, adaptado à sua realidade, chamado e momento de vida.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Comunidade Exclusiva",
    desc: "Acesso a um grupo exclusivo de mulheres comprometidas com o mesmo propósito — suporte, oração e encorajamento.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "Material de Apoio Digital",
    desc: "Apostilas, guias de reflexão e recursos práticos para aprofundar cada estação da jornada.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "Carta Assinada de Crescimento",
    desc: "Uma carta pessoal de Hadassah ao fim da jornada — um marco do que você percorreu e de quem você se tornou.",
  },
];

function WhatYouReceive() {
  return (
    <section
      style={{ background: "#F9F4EF" }}
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div className="mb-16 text-center">

            <h2
              className="leading-[1.15] tracking-[-0.02em] text-[#1C1410]"
              style={{
                fontFamily: "var(--font-silver)",
                fontSize: "clamp(28px, 3.8vw, 46px)",
              }}
            >
              O Que Você Recebe
            </h2>
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
                  style={{
                    background: "rgba(184,120,74,0.10)",
                    color: "#B8784A",
                  }}
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

        {/* Bottom row — 2 centered */}
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
                  style={{
                    background: "rgba(184,120,74,0.10)",
                    color: "#B8784A",
                  }}
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
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PRICING / CTA
───────────────────────────────────────────── */
const includes = [
  "6 encontros ao vivo mensais com Hadassah",
  "Plano de ação personalizado por estação",
  "Comunidade exclusiva de mulheres",
  "Material de apoio digital completo",
  "Carta assinada de crescimento",
  "Acompanhamento entre os encontros",
];

function Pricing() {
  return (
    <section
      id="pricing"
      style={{ background: "#F5F5F5" }}
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div
            className="relative mx-auto max-w-[680px] overflow-hidden rounded-[28px] bg-white px-8 py-20 text-center shadow-[0_8px_60px_rgba(0,0,0,0.14)] md:px-20"
          >
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
              Chegou a hora de assumir seu lugar.
            </h2>

            <p
              className="mx-auto mb-10 max-w-[420px] font-light leading-[1.8] text-[#5E4535]"
              style={{ fontSize: "16px" }}
            >
              Uma jornada inteira de formação, acompanhamento e transformação —
              por um investimento que honra o chamado que você carrega.
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

            {/* CTA */}
            <div className="mb-8 flex justify-center">
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
      <div
        className="mx-auto mb-6 flex max-w-[1000px] flex-col items-center gap-4 md:flex-row md:justify-between"
      >
        <div
          className="text-[14px] font-light italic tracking-[0.2em] text-[#9A8070]"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          Caminho de Ester
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { label: "A Mentoria", href: "#a-mentoria" },
            { label: "O Caminho", href: "#o-caminho" },
            { label: "Depoimentos", href: "#depoimentos" },
            { label: "FAQ", href: "#faq" },
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
      <main>
        <Hero />
        <ProblemIdentification />
        <PullQuotePainPoints />
        <SixStages />
        <ThreePillars />
        <AuthorGuide />
        <WhatYouReceive />
        <Pricing />
      </main>
      <FooterMentoria />
    </>
  );
}
