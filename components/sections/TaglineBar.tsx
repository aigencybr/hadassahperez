export default function TaglineBar() {
  return (
    <div
      aria-hidden="true"
      className="py-5 text-center"
      style={{ background: "linear-gradient(to right, #c8a97e, #e8cc9a, #c8a97e)" }}
    >
      <p
        className="text-[11px] font-semibold tracking-[0.16em] text-[#2C1A0A]"
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
