export default function Footer() {
  return (
    <footer
      className="border-t border-white/[0.04] px-5 py-10 text-center"
      style={{ background: "#0d0d0d" }}
    >
      <div
        className="mb-2 text-[15px] font-light italic tracking-[0.25em] text-[rgba(246,246,246,0.25)]"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        Hadassah Perez
      </div>
      <div
        className="text-[11px] tracking-[0.08em] text-[rgba(246,246,246,0.15)]"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        © 2026 · Todos os direitos reservados
      </div>
    </footer>
  );
}
