export default function Footer() {
  return (
    <footer
      className="border-t border-white/[0.04] px-5 py-10 text-center"
      style={{ background: "#16100C" }}
    >
      <div
        className="mb-2 text-[15px] font-light italic tracking-[0.25em] text-[#9A8070]"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        Hadassah Perez
      </div>
      <div
        className="text-[11px] tracking-[0.08em] text-[#5E4535]"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        © 2026 · Todos os direitos reservados
      </div>
    </footer>
  );
}
