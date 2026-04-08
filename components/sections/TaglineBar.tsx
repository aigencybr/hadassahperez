export default function TaglineBar() {
  return (
    <div
      aria-hidden="true"
      className="border-t border-white/[0.04] py-5 text-center"
      style={{ background: "#16100C" }}
    >
      <p
        className="text-[11px] font-semibold tracking-[0.16em] text-white/40"
        style={{
          fontFamily: "var(--font-montserrat)",
          textTransform: "uppercase",
        }}
      >
        ACESSO IMEDIATO &nbsp;·&nbsp; PRODUTO 100% DIGITAL &nbsp;·&nbsp;
        GARANTIA INCONDICIONAL DE 7 DIAS
      </p>
    </div>
  );
}
