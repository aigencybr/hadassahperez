"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import RevealWrapper from "@/components/RevealWrapper";

const faqs = [
  {
    q: "Para quem é o Caminho de Ester?",
    a: "Para mulheres cristãs que sentem que vivem divididas — entre quem são hoje e quem Deus as chamou pra ser. Mulheres que querem clareza, propósito e uma fundação sólida para tomar decisões com fé.",
  },
  {
    q: "Como funciona a mentoria?",
    a: "A jornada é conduzida em grupos exclusivos com encontros ao vivo, acompanhamento direto com Hadassah, materiais de apoio digital e uma comunidade de mulheres comprometidas com o mesmo propósito.",
  },
  {
    q: "Qual é a duração do programa?",
    a: "O Caminho de Ester é estruturado em 6 estações de formação progressiva. A duração completa é de aproximadamente 6 meses, com um encontro ao vivo por mês e acompanhamento contínuo entre os encontros.",
  },
  {
    q: "Preciso ter experiência prévia em coaching ou autoconhecimento?",
    a: "Não. O Caminho de Ester é para qualquer mulher que sente o chamado de Deus e quer clareza para caminhar nele — independente de onde ela está hoje. A metodologia foi construída para te encontrar onde você está.",
  },
  {
    q: "Como é feita a seleção para as vagas?",
    a: "As vagas são limitadas e a seleção é feita por alinhamento de propósito. Após preencher o formulário de interesse, você receberá um contato para uma conversa breve de alinhamento antes da confirmação da vaga.",
  },
  {
    q: "Tenho acesso ao conteúdo após o término da mentoria?",
    a: "Sim. Todo o material de apoio digital fica disponível para você de forma permanente. A comunidade exclusiva também permanece ativa para as participantes de todos os ciclos.",
  },
];

function FaqItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);

  return (
    <RevealWrapper delay={delay}>
      <div
        className="overflow-hidden rounded-[20px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.07)] transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)]"
        role="listitem"
      >
        <button
          className="flex w-full items-center justify-between gap-8 px-8 py-6 text-left transition-colors duration-150 hover:bg-[rgba(184,120,74,0.05)]"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span
            className="text-[15px] font-bold leading-[1.45] text-[#1C1410]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {q}
          </span>
          <span
            className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full transition-transform duration-200"
            style={{
              background: "#B8784A",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
              boxShadow: "0 2px 8px rgba(184,120,74,0.3)",
            }}
            aria-hidden="true"
          >
            <Plus size={12} color="#fff" strokeWidth={2.5} />
          </span>
        </button>
        <div
          style={{
            maxHeight: open ? "320px" : "0",
            overflow: "hidden",
            transition: "max-height 0.35s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <p className="px-8 pb-8 text-[15px] font-light leading-[1.8] text-[#5E4535]">
            {a}
          </p>
        </div>
      </div>
    </RevealWrapper>
  );
}

export default function FAQMentoria() {
  return (
    <section
      id="faq"
      className="py-24 md:py-32"
      style={{ background: "#F7F1E8" }}
    >
      <div className="mx-auto max-w-[720px] px-5 md:px-10">
        <RevealWrapper delay={0}>
          <div className="mb-16 text-center">
            <div
              className="mb-6 block text-[11px] font-bold tracking-[0.18em] text-[#6B7558]"
              style={{
                fontFamily: "var(--font-montserrat)",
                textTransform: "uppercase",
              }}
            >
              Perguntas frequentes
            </div>
            <h2
              className="font-bold leading-[1.2] tracking-[-0.01em] text-[#1C1410]"
              style={{
                fontSize: "clamp(28px, 3.8vw, 44px)",
                fontFamily: "var(--font-silver)",
              }}
            >
              Ainda tem dúvidas?
            </h2>
          </div>
        </RevealWrapper>

        <div className="flex flex-col gap-3" role="list">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} delay={80 + i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
