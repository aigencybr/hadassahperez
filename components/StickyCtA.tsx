"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const BUY_LINK = "https://pay.kiwify.com.br/bvTaSZj";

export default function StickyCtA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const finalCta = document.getElementById("final-cta");
    if (!hero) return;

    let heroGone = false;
    let finalCtaVisible = false;

    const update = () => setVisible(heroGone && !finalCtaVisible);

    const heroObserver = new IntersectionObserver(
      ([entry]) => { heroGone = !entry.isIntersecting; update(); },
      { threshold: 0.1 }
    );
    heroObserver.observe(hero);

    let finalObserver: IntersectionObserver | null = null;
    if (finalCta) {
      finalObserver = new IntersectionObserver(
        ([entry]) => { finalCtaVisible = entry.isIntersecting; update(); },
        { threshold: 0.1 }
      );
      finalObserver.observe(finalCta);
    }

    return () => {
      heroObserver.disconnect();
      finalObserver?.disconnect();
    };
  }, []);

  return (
    <a
      href={BUY_LINK}
      aria-label="Comprar Alinhamento agora"
      style={{
        position: "fixed",
        bottom: 28,
        left: "50%",
        zIndex: 1000,
        whiteSpace: "nowrap",
        pointerEvents: visible ? "auto" : "none",
        transform: `translateX(-50%) translateY(${visible ? "0" : "100px"})`,
        opacity: visible ? 1 : 0,
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.35s",
        fontFamily: "var(--font-montserrat)",
        letterSpacing: "0.04em",
      }}
      className="btn-grad inline-flex items-center gap-2 rounded-full px-10 py-4 text-sm font-semibold text-[#f6f6f6] shadow-[0_8px_32px_rgba(88,138,101,0.45)]"
    >
      Quero começar minha jornada
      <ArrowRight size={15} strokeWidth={2.5} />
    </a>
  );
}
