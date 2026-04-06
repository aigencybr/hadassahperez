"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const slides = [
  {
    src: "/clareza-espiritual.jpg",
    alt: "Mulher com clareza e alegria",
    caption: "Clareza espiritual",
  },
  {
    src: "/paz-interior.jpg",
    alt: "Mulher em momento de paz e reflexão",
    caption: "Paz interior",
  },
  {
    src: "/proposito.jpg",
    alt: "Mulher confiante e com propósito",
    caption: "Propósito revelado",
  },
  {
    src: "/liberdade-real.jpg",
    alt: "Mulher livre e renovada",
    caption: "Liberdade real",
  },
];

const INTERVAL = 3800;
const FADE_DURATION = 700;

export default function IdentificationCarousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === current || transitioning) return;
      setTransitioning(true);
      setCurrent(index);
      setTimeout(() => setTransitioning(false), FADE_DURATION);
    },
    [current, transitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-[28px] shadow-[0_4px_40px_rgba(0,0,0,0.16)]">
      {/* Crossfade images */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== current}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: `opacity ${FADE_DURATION}ms ease`,
            zIndex: i === current ? 2 : 1,
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 380px"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 35%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {/* Caption + dots */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-6 pt-10 text-center">
        <div
          className="mb-4 text-[11px] font-bold tracking-[0.22em] text-white/90"
          style={{
            fontFamily: "var(--font-montserrat)",
            textTransform: "uppercase",
            transition: `opacity ${FADE_DURATION}ms ease`,
          }}
        >
          {slides[current].caption}
        </div>

        {/* Dot indicators */}
        <div
          className="flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Navegação do carrossel"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${i + 1}: ${slides[i].caption}`}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                height: "5px",
                width: i === current ? "22px" : "6px",
                background:
                  i === current
                    ? "rgba(246,246,246,0.9)"
                    : "rgba(246,246,246,0.35)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
