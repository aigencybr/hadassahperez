import Image from "next/image";
import { ArrowRight } from "lucide-react";

const BUY_LINK = "https://pay.kiwify.com.br/bvTaSZj";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-28 text-center"
      style={{ background: "#16100C" }}
    >
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover "
        style={{ objectPosition: "center top", opacity: 0.35 }}
      />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-[55%] rounded-full"
      />

      <div className="relative z-10 max-w-[680px]">
        {/* Badge */}
        <div
          className="animate-reveal mb-10 inline-block rounded-full border border-white/25 px-6 py-2.5 text-[11px] font-bold tracking-[0.18em] text-white/80 backdrop-blur-sm"
          style={{
            fontFamily: "var(--font-montserrat)",
            textTransform: "uppercase",
            background: "rgba(246,246,246,0.06)",
            animationDelay: "0ms",
          }}
        >
          Devocional Digital · 21 Dias ·<br /> Hadassah Perez
        </div>

        {/* H1 */}
        <h1
          className="animate-reveal mb-12 md:mt-0 mt-6 leading-[1.18] tracking-[-0.02em] text-[#f6f6f6]"
          style={{
            fontFamily: "var(--font-silver)",
            fontSize: "clamp(30px, 5vw, 52px)",
            animationDelay: "80ms",
          }}
        >
          Volte a sentir a presença de Deus na sua rotina, mesmo que hoje você esteja distante
        </h1>

        {/* Subheadline */}
        <p
          className="animate-reveal mx-auto max-w-[500px] font-light leading-[1.2] text-white/60"
          style={{
            fontSize: "18px",
            animationDelay: "160ms",
          }}
        >
          Em 21 dias, você percorre um caminho guiado que te ajuda a retomar sua conexão com Deus, entender o que Ele quer para sua vida e transformar sua fé em atitudes reais.
        </p>

        {/* CTA */}
        <div
          className="animate-reveal flex flex-col items-center gap-4 mt-15"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href={'#pricing'}
            aria-label="Comprar agora"
            className="btn-grad inline-flex items-center text-xs md:text-md gap-2 rounded-full px-[52px] py-[18px] font-semibold tracking-wide text-[#f6f6f6] shadow-[0_4px_20px_rgba(60,75,35,0.45)]"
            style={{
              fontFamily: "var(--font-montserrat)",
              letterSpacing: "0.04em",
              background: "linear-gradient(135deg, #688339ff 0%, #2f3d18 100%)",
            }}
          >
            Quero começar minha jornada
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
