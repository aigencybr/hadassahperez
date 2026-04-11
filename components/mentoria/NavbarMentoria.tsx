"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

// <!-- WHATSAPP_LINK -->
const CTA_LINK = "#pricing";

const navLinks = [
  { label: "A Mentoria", href: "#a-mentoria" },
  { label: "O Caminho", href: "#o-caminho" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export default function NavbarMentoria() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        aria-label="Navegação principal"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled || mobileOpen ? "#F7F1E8" : "transparent",
          borderBottom:
            scrolled || mobileOpen ? "1px solid rgba(94,69,53,0.12)" : "none",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div className="mx-auto flex max-w-[1160px] items-center justify-between px-5 py-4 md:px-10">
          {/* Logo */}
          <a href="/mentoria" className="flex items-center gap-2 no-underline">
            <Image
              src="/logo-olive.png"
              alt="Hadassah Perez"
              width={130}
              height={36}
              className="h-7 w-auto"
              style={{ objectFit: "contain" }}
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium tracking-[0.01em] transition-colors duration-150 hover:text-[#B8784A]"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  color: "#5E4535",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={CTA_LINK}
              className="hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-[12px] font-semibold tracking-wide text-white md:inline-flex"
              style={{
                fontFamily: "var(--font-montserrat)",
                background: "linear-gradient(135deg, #688339 0%, #2f3d18 100%)",
                letterSpacing: "0.04em",
                boxShadow: "0 2px 12px rgba(60,75,35,0.30)",
              }}
            >
              Inscrever-se agora
              <ArrowRight size={13} strokeWidth={2.5} />
            </a>

            {/* Mobile hamburger */}
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              style={{ color: "#5E4535" }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div
            className="border-t px-5 pb-6 pt-4 md:hidden"
            style={{ borderColor: "rgba(94,69,53,0.12)", background: "#F7F1E8" }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[14px] font-medium text-[#5E4535] no-underline transition-colors duration-150 hover:text-[#B8784A]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={CTA_LINK}
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-[13px] font-semibold tracking-wide text-white"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  background: "linear-gradient(135deg, #688339 0%, #2f3d18 100%)",
                }}
              >
                Inscrever-se agora
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
