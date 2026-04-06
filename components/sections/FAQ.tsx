"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import RevealWrapper from "@/components/RevealWrapper";

const faqs = [
  {
    q: "Como funciona o acesso?",
    a: "Após a compra, você recebe acesso imediato ao produto digital pela plataforma. Você pode acessar de qualquer dispositivo, no seu ritmo.",
  },
  {
    q: "Preciso fazer os 21 dias seguidos?",
    a: "O devocional foi desenhado para ser feito em sequência — cada ciclo constrói sobre o anterior. O ideal é um dia por vez. Mas se você precisar pausar, não há problema: o acesso é permanente.",
  },
  {
    q: "Para quem é esse devocional?",
    a: "Para mulheres cristãs que querem mais do que inspiração passageira — que querem clareza espiritual real, profundidade na relação com Deus e passos concretos para caminhar no Seu propósito.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Se não for o que você esperava, solicita o reembolso e ele é feito. Sem perguntas.",
  },
  {
    q: "Já fiz outros devocionais e não funcionou. Por que esse seria diferente?",
    a: "Porque a maioria dos devocionais entrega inspiração. O Alinhamento entrega estrutura — três ciclos progressivos com ensinamento, reflexão e ação concreta. A diferença está em onde você chega ao fim dos 21 dias, não apenas em como você se sentiu durante.",
  },
];

function FaqItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);

  return (
    <RevealWrapper delay={delay}>
      <div
        className="overflow-hidden rounded-[20px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.07)] transition-shadow duration-200 hover:shadow-[8px_8px_24px_rgba(0,0,0,0.12)]"
        role="listitem"
      >
        <button
          className="flex w-full items-center justify-between gap-8 px-8 py-6 text-left transition-colors duration-150 hover:bg-[rgba(113,132,114,0.05)]"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span
            className="text-[16px] font-bold leading-[1.45] text-[#111111]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {q}
          </span>
          <span
            className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full transition-transform duration-200"
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
          <p className="px-8 pb-8 text-[16px] font-light leading-[1.8] text-[rgba(17,17,17,0.62)]">
            {a}
          </p>
        </div>
      </div>
    </RevealWrapper>
  );
}

export default function FAQ() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[680px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div className="mb-16 text-center">
            <div
              className="mb-6 block text-center text-[11px] font-bold tracking-[0.18em] text-[#718472]"
              style={{
                fontFamily: "var(--font-montserrat)",
                textTransform: "uppercase",
              }}
            >
              Perguntas frequentes
            </div>
            <h2
              className="font-bold leading-[1.2] tracking-[-0.01em] text-[#111111]"
              style={{ fontSize: "clamp(28px, 3.8vw, 44px)" }}
            >
              Ainda tem dúvidas?
            </h2>
          </div>
        </RevealWrapper>

        <div className="flex flex-col gap-3" role="list">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              delay={80 + i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
