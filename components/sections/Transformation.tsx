"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import RevealWrapper from "@/components/RevealWrapper";

const negatives = [
  "Começar a semana sem saber se está no caminho certo",
  "Sentir que sua vida espiritual é superficial ou inconsistente",
  "Carregar o peso de feridas que já deveriam estar curadas",
  "Confundir a voz de Deus com expectativas suas — ou dos outros",
  "Ter fé sem saber o que fazer com ela na prática",
  "Chegar ao fim do dia com aquela sensação de que algo está faltando",
];

function XIcon() {
  return (
    <span
      className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full"
      style={{ background: "rgba(192,57,43,0.1)" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-2.5 w-2.5"
        fill="none"
        stroke="#c0392b"
        strokeWidth={2.5}
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </span>
  );
}

function Objection() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="overflow-hidden rounded-[20px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.07)] transition-shadow duration-200 hover:shadow-[8px_8px_24px_rgba(0,0,0,0.12)]"
    >
      <button
        className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left transition-colors duration-150 hover:bg-[rgba(113,132,114,0.06)]"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="text-[15px] font-bold leading-[1.45] text-[#111111]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          "Já li muitos devocionais e não mudou nada."
        </span>
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-200"
          style={{
            background: "linear-gradient(180deg, #78AC76 0%, #588A65 100%)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            boxShadow: "0 2px 8px rgba(88,138,101,0.3)",
          }}
          aria-hidden="true"
        >
          <Plus size={12} color="#fff" strokeWidth={2.5} />
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <p className="px-8 pb-6 text-[15px] font-light leading-[1.75] text-[rgba(17,17,17,0.62)]">
          Você provavelmente leu devocionais que eram bonitos, mas não te
          levavam a lugar nenhum. O Alinhamento não é uma coletânea de textos
          inspiradores. É uma jornada com estrutura, progressão e ação — cada
          dia construído intencionalmente para produzir uma transformação
          específica ao longo das três semanas.
        </p>
      </div>
    </div>
  );
}

export default function Transformation() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[680px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div className="mb-12 text-center">
            <div
              className="mb-6 block text-center text-[11px] font-bold tracking-[0.18em] text-[#718472]"
              style={{
                fontFamily: "var(--font-montserrat)",
                textTransform: "uppercase",
              }}
            >
              Transformação
            </div>
            <h2
              className="font-bold leading-[1.2] tracking-[-0.01em] text-[#111111]"
              style={{ fontSize: "clamp(28px, 3.8vw, 44px)", fontFamily: "var(--font-silver)" }}
            >
              Com o Alinhamento,
              <br />
              você{" "}
              <span className="font-semibold italic" style={{ color: "#718472" }}>
                não vai mais:
              </span>
            </h2>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={80}>
          <div className="mb-10 rounded-[28px] bg-white p-10 shadow-[8px_8px_24px_rgba(0,0,0,0.12)] md:p-12">
            <ul className="flex flex-col gap-4" role="list">
              {negatives.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 text-[17px] leading-[1.55] text-[#111111]"
                >
                  <XIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={80}>
          <Objection />
        </RevealWrapper>
      </div>
    </section>
  );
}
