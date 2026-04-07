import Image from "next/image";
import RevealWrapper from "@/components/RevealWrapper";

const credentials = [
  "Hillsong Leadership College · Sydney, Austrália",
  "Dallas Baptist University · EUA",
  "Coaching Integral Sistêmico Certificado",
  "Análise Comportamental Certificada",
];

export default function Author() {
  return (
    <section style={{ background: "#ebebeb" }} className="py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-[380px_1fr]">
          {/* Author photo */}
          <RevealWrapper delay={0}>
            <div
              className="relative aspect-[3/4] overflow-hidden rounded-[28px] shadow-[0_4px_40px_rgba(0,0,0,0.16)]"
              aria-label="Foto de Hadassah Perez"
            >
              <Image
                src="/creator.jpeg"
                alt="Hadassah Perez"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 380px"
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3))",
                }}
              />
            </div>
          </RevealWrapper>

          {/* Bio */}
          <div>
            <RevealWrapper delay={0}>
              <div
                className="mb-4 text-[11px] font-bold tracking-[0.18em] text-[#718472]"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  textTransform: "uppercase",
                }}
              >
                Quem criou este devocional
              </div>
            </RevealWrapper>

            <RevealWrapper delay={80}>
              <div
                className="mb-1 font-extrabold leading-[1.1] tracking-[-0.02em] text-[#111111]"
                style={{ fontSize: "clamp(30px, 3.5vw, 44px)", fontFamily: "var(--font-silver)" }}
              >
                Hadassah
                <br />
                Perez
              </div>
            </RevealWrapper>

            <RevealWrapper delay={80}>
              <div
                className="mb-8 text-[12px] font-semibold tracking-[0.14em] text-[#718472]"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  textTransform: "uppercase",
                }}
              >
                Cantora · Coach · Mentora Espiritual · 88K seguidores
              </div>
            </RevealWrapper>

            <RevealWrapper delay={160}>
              <p
                className="mb-8 font-light leading-[1.85] text-[rgba(17,17,17,0.62)]"
                style={{ fontSize: "17px" }}
              >
                Deixei o Brasil, atravessei oceanos e passei anos aprendendo —
                em Sydney, na Austrália; em Dallas, nos Estados Unidos. Não como
                turista. Como alguém que foi em busca de profundidade.
                <br />
                <br />
                Mas o que me levou a criar o Alinhamento não foi o currículo.
                <br />
                <br />
                Foi o que eu vivi. As perguntas que eu mesma fiz a Deus. As
                noites em que a clareza não chegava. E o processo — lento, real,
                profundo — de aprender a ouvir a voz de Deus no meio de tudo.
                <br />
                <br />
                <em className="font-normal text-[#111111]">
                  Este devocional é o que eu desejo que você tenha.
                </em>
              </p>
            </RevealWrapper>

            <RevealWrapper delay={240}>
              <div className="flex flex-col gap-3" role="list">
                {credentials.map((cred) => (
                  <div
                    key={cred}
                    className="flex items-center gap-3 text-sm leading-[1.4] text-[rgba(17,17,17,0.62)]"
                    role="listitem"
                  >
                    <div
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "#718472" }}
                    />
                    {cred}
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
