"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ============================================================
   ÍCONES — SVG Lucide, stroke 1.5px, 16×16
   Todos com aria-hidden="true" pois são decorativos
   (o texto ao lado provê o contexto semântico)
============================================================ */


function IconUsers() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconChevronDown() {
  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

function IconSpotify() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 13.5a9 9 0 0 1 8 0" />
      <path d="M6.5 10.5a13 13 0 0 1 11 0" />
      <path d="M9.5 16.5a5 5 0 0 1 5 0" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

/* ============================================================
   ORNAMENTO SEPARADOR — 3 diamantes
============================================================ */

function OrnamentDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-7">
      <div
        className="h-px w-16"
        style={{ background: "linear-gradient(to right, transparent, #C9996A)" }}
      />
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <div className="w-[5px] h-[5px] rotate-45 opacity-30" style={{ background: "#C9996A" }} />
        <div className="w-[6px] h-[6px] rotate-45 opacity-55" style={{ background: "#C9996A" }} />
        <div className="w-[5px] h-[5px] rotate-45 opacity-30" style={{ background: "#C9996A" }} />
      </div>
      <div
        className="h-px w-16"
        style={{ background: "linear-gradient(to left, transparent, #C9996A)" }}
      />
    </div>
  );
}

/* ============================================================
   CARD EM DESTAQUE (fundo escuro)
============================================================ */

interface FeaturedCardProps {
  icon?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  subtitle: string;
  href: string;
  delay?: number;
}

function FeaturedCard({ icon, imageSrc, imageAlt = "", title, subtitle, href, delay = 0 }: FeaturedCardProps) {
  return (
    <a
      href={href}
      className="reveal-scale block relative rounded-[14px] overflow-hidden touch-manipulation
                 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9996A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F1E8]"
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    >
      {/* Linha decorativa topo */}
      <div
        className="absolute top-0 inset-x-0 h-px opacity-55 z-10"
        style={{ background: "linear-gradient(90deg, transparent, #C9996A, transparent)" }}
      />

      <div
        className="flex items-center gap-4 p-5"
        style={{
          background: "#362214ff",
          border: "1px solid rgba(201, 153, 106, 0.25)",
          borderRadius: "14px",
        }}
      >
        {/* Ícone ou imagem do produto */}
        <div
          aria-hidden="true"
          className="flex-shrink-0 w-24 h-24 rounded-[10px] flex items-center justify-center overflow-hidden"
          style={{ background: imageSrc ? "transparent" : "rgba(255,255,255,0.07)", color: "#DFB98A" }}
        >
          {imageSrc ? (
            <Image src={imageSrc} alt={imageAlt} width={96} height={96} className="w-full h-full object-contain" />
          ) : icon}
        </div>

        <div className="flex-1 min-w-0">
          <p
            className="text-base font-medium leading-snug"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#F5EDD8" }}
          >
            {title}
          </p>
          <p className="text-sm mt-1 leading-snug" style={{ color: "#9A8070" }}>
            {subtitle}
          </p>
        </div>

        <div aria-hidden="true" className="flex-shrink-0" style={{ color: "#C9996A" }}>
          <IconArrowRight />
        </div>
      </div>
    </a>
  );
}

/* ============================================================
   CARD PADRÃO (glassmorphism)
   — sem boolean props: use ComingSoonCard para variante "em breve"
============================================================ */

interface StandardCardProps {
  icon?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  subtitle: string;
  href: string;
  delay?: number;
}

function StandardCard({ icon, imageSrc, imageAlt = "", title, subtitle, href, delay = 0 }: StandardCardProps) {
  return (
    <a
      href={href}
      className="reveal-scale group block rounded-[12px] touch-manipulation
                 transition-[transform,box-shadow] duration-200 ease-out
                 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(107,77,55,0.10)]
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9996A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F1E8]"
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    >
      <div
        className="flex items-center gap-4 p-5 rounded-[12px] relative overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(94,69,53,0.13)",
        }}
      >
        {/* Borda esquerda caramel no hover */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: "#B8784A" }}
        />

        <div
          aria-hidden="true"
          className="flex-shrink-0 w-24 h-24 rounded-[10px] flex items-center justify-center overflow-hidden"
          style={{ background: imageSrc ? "rgba(184, 120, 74, 0.05)" : "rgba(184, 120, 74, 0.08)", color: "#B8784A" }}
        >
          {imageSrc ? (
            <Image src={imageSrc} alt={imageAlt} width={96} height={96} className="w-full h-full object-contain" />
          ) : icon}
        </div>

        <div className="flex-1 min-w-0">
          <p
            className="text-base font-medium leading-snug"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#1C1410" }}
          >
            {title}
          </p>
          <p className="text-sm mt-1 leading-snug" style={{ color: "#9A8070" }}>
            {subtitle}
          </p>
        </div>

        <div aria-hidden="true" className="flex-shrink-0" style={{ color: "#C9996A" }}>
          <IconArrowRight />
        </div>
      </div>
    </a>
  );
}

/* ============================================================
   CARD EM BREVE — variante explícita (sem boolean prop)
   Composition pattern: explicit variant > boolean prop
============================================================ */

interface ComingSoonCardProps {
  icon?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  subtitle: string;
  delay?: number;
}

function ComingSoonCard({ icon, imageSrc, imageAlt = "", title, subtitle, delay = 0 }: ComingSoonCardProps) {
  return (
    <div
      className="reveal-scale flex items-center gap-4 p-5 rounded-[12px] relative overflow-hidden"
      style={{
        "--delay": `${delay}ms`,
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(94,69,53,0.13)",
        opacity: 0.6,
      } as React.CSSProperties}
    >
      <div
        aria-hidden="true"
        className="flex-shrink-0 w-24 h-24 rounded-[10px] flex items-center justify-center overflow-hidden"
        style={{ background: imageSrc ? "rgba(184, 120, 74, 0.05)" : "rgba(184, 120, 74, 0.08)", color: "#B8784A" }}
      >
        {imageSrc ? (
          <Image src={imageSrc} alt={imageAlt} width={96} height={96} className="w-full h-full object-contain" />
        ) : icon}
      </div>

      <div className="flex-1 min-w-0">
        <div
          className="text-base font-medium leading-snug"
          style={{ fontFamily: "var(--font-dm-sans)", color: "#1C1410" }}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="whitespace-nowrap">{title}</span>
            <span
              className="text-[10px] font-semibold tracking-[0.08em] uppercase px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
              style={{ background: "rgba(107,117,88,0.15)", color: "#6B7558" }}
            >
              Em breve
            </span>
          </div>
        </div>
        <p className="text-sm mt-1 leading-snug" style={{ color: "#9A8070" }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   PÁGINA PRINCIPAL
============================================================ */

export default function LinksPage() {
  const heroBgRef = useRef<HTMLDivElement>(null);
  const [logoError, setLogoError] = useState(false);

  // Parallax no hero — desativado em mobile e se usuário prefere movimento reduzido
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReduced || isMobile) return;

    function onScroll() {
      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver para reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll(".reveal, .reveal-scale, .reveal-line")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ background: "#F7F1E8" }}>

      {/* ==========================================================
          SEÇÃO 1 — HERO (100dvh)
      ========================================================== */}
      <section className="relative overflow-hidden" style={{ height: "100dvh" }}>

        {/* Background com parallax */}
        <div ref={heroBgRef} className="absolute inset-0 md:scale-110">
          {/* Mobile */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              backgroundImage: "url('/hero-mobile.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 15%",
              backgroundColor: "#2A1C12",
            }}
          />
          {/* Desktop */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              backgroundImage: "url('/hadassah-desktop.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center 15%",
              backgroundColor: "#2A1C12",
            }}
          />
        </div>

        {/* Overlay gradiente */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,10,6,0.25) 0%, rgba(16,10,6,0.15) 35%, rgba(16,10,6,0.55) 70%, rgba(16,10,6,0.88) 100%)",
            zIndex: 1,
          }}
        />

        {/* Conteúdo — alinhado ao fundo */}
        <div
          className="absolute bottom-0 inset-x-0 flex flex-col items-center text-center"
          style={{ padding: "40px 24px", zIndex: 2 }}
        >
          {/* Linha dourada decorativa */}
          <div
            aria-hidden="true"
            className="mb-4"
            style={{ width: "32px", height: "1px", background: "#DFB98A" }}
          />

          {/* Nome — Libre Baskerville (única vez na página) */}
          <h1
            className="hero-fade-up"
            style={{
              fontFamily: 'var(--font-baskerville), "Libre Baskerville", serif',
              fontSize: "clamp(36px, 10vw, 44px)",
              fontWeight: 400,
              color: "#F5EDD8",
              lineHeight: 1.15,
              animationDelay: "0ms",
              textWrap: "balance",
            } as React.CSSProperties}
          >
            Hadassah Perez
          </h1>

          {/* Cargo com mini-ornamento */}
          <div
            className="hero-fade-up flex items-center gap-3 mt-3"
            style={{ animationDelay: "80ms" }}
            aria-hidden="true"
          >
            <div className="flex items-center gap-1">
              <div className="w-[4px] h-[4px] rotate-45 opacity-30" style={{ background: "#DFB98A" }} />
              <div className="w-[5px] h-[5px] rotate-45 opacity-55" style={{ background: "#DFB98A" }} />
              <div className="w-[4px] h-[4px] rotate-45 opacity-30" style={{ background: "#DFB98A" }} />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#DFB98A",
              }}
            >
              Coach · Mentora · Cantora Cristã
            </p>
            <div className="flex items-center gap-1">
              <div className="w-[4px] h-[4px] rotate-45 opacity-30" style={{ background: "#DFB98A" }} />
              <div className="w-[5px] h-[5px] rotate-45 opacity-55" style={{ background: "#DFB98A" }} />
              <div className="w-[4px] h-[4px] rotate-45 opacity-30" style={{ background: "#DFB98A" }} />
            </div>
          </div>

          {/* Seta de scroll com bounce */}
          <a
            href="#links"
            className="hero-scroll-arrow mt-8 touch-manipulation
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9996A] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:rounded"
            style={{ color: "#DFB98A" }}
            aria-label="Ver links"
          >
            <IconChevronDown />
          </a>
        </div>
      </section>

      {/* ==========================================================
          SEÇÃO 2 — LINKS
      ========================================================== */}
      <section id="links" style={{ background: "#F7F1E8", padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: "420px", margin: "0 auto" }} className="gap-3">

          {/* Logo */}
          <div
            className="reveal flex justify-center gap-5"
            style={{ "--delay": "0ms" } as React.CSSProperties}
          >
            {!logoError ? (
              <Image
                src="/logo-olive.png"
                alt="Hadassah Perez"
                width={160}
                height={160}
                className="h-36 w-auto"
                loading="eager"
                onError={() => setLogoError(true)}
              />
            ) : (
              <p
                className="text-base font-medium tracking-widest uppercase"
                style={{
                  fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                  color: "#5E4535",
                  letterSpacing: "0.18em",
                }}
              >
                Hadassah Perez
              </p>
            )}
          </div>

          {/* Ornamento separador */}
          <div
            style={{ "--delay": "120ms" } as React.CSSProperties}
            className="reveal-line my-10"
          >
            <OrnamentDivider />
          </div>

          {/* ---- CARDS ---- */}
          <div className="flex flex-col gap-3.5">

            {/* 1. Devocional Alinhamento — DESTAQUE */}
            <FeaturedCard
              imageSrc="/tablet alinhamento.png"
              imageAlt="Devocional Alinhamento"
              title="Devocional Alinhamento"
              subtitle="21 dias para conectar seu coração aos planos de Deus"
              href="/alinhamento"
              delay={180}
            />

            {/* 2. Mentoria O Caminho de Ester */}
            <StandardCard
              imageSrc="/mentoria o caminho de ester.png"
              imageAlt="Mentoria O Caminho de Ester"
              title='Mentoria "O Caminho de Ester"'
              subtitle="Identidade, propósito e posicionamento"
              href="/mentoria"
              delay={260}
            />

            {/* 3. Coach Life */}
            <StandardCard
              imageAlt="Coach Life"
              imageSrc="/coach life hadassa.jpeg"
              title="Coach Life"
              subtitle="Individual · Grupos"
              href="#" /* TODO: COACH_LIFE_LINK */
              delay={320}
            />

            {/* 5. Comunidade de Mulheres */}
            <StandardCard
              imageAlt="Comunidade de Mulheres"
              imageSrc="/tablet alinhamento copy.png"
              title="Comunidade de Mulheres"
              subtitle="Grupo no WhatsApp — entre para a comunidade"
              href="https://wa.link/ul6ufy" /* TODO: WHATSAPP_COMUNIDADE_LINK */
              delay={410}
            />

            {/* 6. Parcerias */}
            <StandardCard
              imageSrc="/parceria.png"
              imageAlt="Parcerias"
              title="Parcerias"
              subtitle="Fale comigo sobre colaborações"
              href="https://wa.link/ul6ufy" /* TODO: EMAIL */
              delay={440}
            />

            {/* 7. Devocional Esperança — EM BREVE (variante explícita) */}
            <ComingSoonCard
              imageSrc="/livro devocional esperança.png"
              imageAlt="Devocional Esperança"
              title="Devocional Esperança"
              subtitle="Novo lançamento em breve"
              delay={470}
            />

          </div>

          {/* ---- SPOTIFY PLAYERS ---- */}
          <div id="musica" className="mt-12">
            <p
              className="reveal text-center text-[11px] uppercase tracking-[0.12em] mb-4"
              style={{
                "--delay": "480ms",
                color: "#9A8070",
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
              } as React.CSSProperties}
            >
              Ouça agora
            </p>
            <div
              className="reveal-scale flex flex-col gap-3"
              style={{ "--delay": "500ms" } as React.CSSProperties}
            >
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/artist/0xGcz3etCHBOf6ZmZB6YAb?utm_source=generator&theme=0"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Hadassah Perez no Spotify"
              />
            </div>
          </div>

          {/* ---- YOUTUBE VIDEO ---- */}
          <div
            className="reveal-scale mt-6"
            style={{ "--delay": "520ms" } as React.CSSProperties}
          >
            <div style={{ borderRadius: "12px", overflow: "hidden", aspectRatio: "16/9" }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yivEki4ArPg"
                title="Hadassah Perez no YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                style={{ display: "block", border: "none" }}
              />
            </div>
          </div>

          {/* ---- ÍCONES SOCIAIS ---- */}
          <div
            className="reveal flex items-center justify-center gap-7 mt-10"
            style={{ "--delay": "520ms" } as React.CSSProperties}
          >
            {(
              [
                { href: "https://www.instagram.com/hadassahperez/", icon: <IconInstagram />, label: "Instagram" },
                { href: "https://www.youtube.com/@HadassahPerez", icon: <IconYouTube />, label: "YouTube" },
                {
                  href: "https://open.spotify.com/intl-pt/artist/0xGcz3etCHBOf6ZmZB6YAb",
                  icon: <IconSpotify />,
                  label: "Spotify",
                },
                { href: "https://www.tiktok.com/@hadassahperezoficial", icon: <IconTikTok />, label: "TikTok" },
                { href: "https://wa.link/ul6ufy", icon: <IconWhatsApp />, label: "WhatsApp" },
              ] as { href: string; icon: React.ReactNode; label: string }[]
            ).map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-[#9A8070] hover:text-[#B8784A] transition-colors duration-150 touch-manipulation
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9996A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F1E8] focus-visible:rounded"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* ---- RODAPÉ ---- */}
          <footer
            className="reveal mt-10 text-center"
            style={{ "--delay": "560ms" } as React.CSSProperties}
          >
            {/* Linha separadora */}
            <div
              aria-hidden="true"
              className="mx-auto mb-6"
              style={{
                width: "48px",
                height: "1px",
                background: "linear-gradient(to right, transparent, rgba(184,120,74,0.35), transparent)",
              }}
            />

            <p
              style={{
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                fontSize: "11px",
                color: "#9A8070",
                letterSpacing: "0.04em",
              }}
            >
              Hadassah Perez
            </p>

            <p
              className="mt-2"
              style={{
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                fontSize: "10px",
                color: "#B8A898",
                letterSpacing: "0.02em",
              }}
            >
              © {new Date().getFullYear()} · Todos os direitos reservados
            </p>

            <p className="mt-3">
              <span
                style={{
                  fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                  fontSize: "10px",
                  color: "#B8A898",
                  letterSpacing: "0.02em",
                }}
              >
                Site por{" "}
              </span>
              <a
                href="https://www.instagram.com/aigencybr"
                target="_blank"
                rel="noopener noreferrer"
                className="aigency-link focus-visible:outline-none focus-visible:rounded"
                style={{
                  fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                  fontSize: "10px",
                  letterSpacing: "0.04em",
                }}
              >
                Aigency
              </a>
            </p>

            <div aria-hidden="true" className="mt-6 mb-2">
              <div className="flex items-center justify-center gap-1.5">
                <div className="w-[3px] h-[3px] rotate-45 opacity-20" style={{ background: "#C9996A" }} />
                <div className="w-[4px] h-[4px] rotate-45 opacity-30" style={{ background: "#C9996A" }} />
                <div className="w-[3px] h-[3px] rotate-45 opacity-20" style={{ background: "#C9996A" }} />
              </div>
            </div>
          </footer>

        </div>
      </section>
    </main>
  );
}