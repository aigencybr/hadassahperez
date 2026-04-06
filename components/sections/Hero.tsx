import Image from "next/image";
import { ArrowRight } from "lucide-react";

const BUY_LINK = "https://pay.kiwify.com.br/bvTaSZj";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-28 text-center"
      style={{ background: "#1e1d1d" }}
    >
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        style={{ opacity: 0.35 }}
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
          Devocional Digital · 21 Dias · Hadassah Perez
        </div>

        {/* H1 */}
        <h1
          className="animate-reveal mb-6 font-extrabold leading-[1.18] tracking-[-0.02em] text-[#f6f6f6]"
          style={{
            fontSize: "clamp(30px, 5vw, 52px)",
            animationDelay: "80ms",
          }}
        >
          Você ora, você crê, você tenta — e ainda assim{" "}
          <span
            className="font-semibold italic"
            style={{ color: "#8fa090" }}
          >
            não sabe para onde ir.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="animate-reveal mx-auto mb-10 max-w-[500px] font-light leading-[1.75] text-white/60"
          style={{
            fontSize: "18px",
            animationDelay: "160ms",
          }}
        >
          21 dias para sair do ruído e entrar no que Deus planejou
          especificamente para você.
        </p>

        {/* CTA */}
        <div
          className="animate-reveal flex flex-col items-center gap-4"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href={BUY_LINK}
            aria-label="Comprar agora"
            className="btn-grad inline-flex items-center gap-2 rounded-full px-[52px] py-[18px] font-semibold tracking-wide text-[#f6f6f6] shadow-[0_4px_20px_rgba(88,138,101,0.35)]"
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "15px",
              letterSpacing: "0.04em",
            }}
          >
            Quero começar minha jornada
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>

          {/* Trust microcopy */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 text-white/30"
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "12px",
              letterSpacing: "0.06em",
            }}
          >
            {["Acesso imediato", "100% digital", "Garantia de 7 dias"].map(
              (item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span style={{ color: "#8fa090", fontWeight: 700 }}>✓</span>
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden="true"
        className="absolute bottom-9 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        style={{
          fontFamily: "var(--font-montserrat)",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(246,246,246,0.2)",
        }}
      >
        <div
          className="animate-scroll-pulse h-9 w-px"
          style={{
            background:
              "linear-gradient(to bottom, rgba(246,246,246,0.2), transparent)",
          }}
        />
        <span>continuar</span>
      </div>
    </section>
  );
}
