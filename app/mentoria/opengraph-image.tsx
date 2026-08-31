import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Caminho de Ester — Mentoria Individual · Hadassah Perez";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Palavra por palavra, em linhas escolhidas à mão: registrar uma fonte
// customizada faz o Satori (next/og) usá-la como padrão pra QUALQUER texto do
// card (mesmo sem fontFamily explícito) — e texto multi-palavra nessa fonte
// sai com espaçamento irregular. Cada palavra como item de flex evita o bug,
// e escolher as linhas manualmente evita quebras órfãs.
function WrappedLines({
  lines,
  style,
  gap = "0.26em",
  lineGaps,
}: {
  lines: string[];
  style: React.CSSProperties;
  gap?: string;
  // Por linha, gap sob medida por espaço entre palavras (index = posição do
  // espaço). Necessário porque o bearing do glifo final de cada palavra varia
  // nessa fonte (ex: "o" deixa mais respiro visual que "e"), então um gap
  // uniforme em em produz espaçamento com aparência irregular.
  lineGaps?: (string[] | undefined)[];
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {lines.map((line, li) => {
        const words = line.split(" ");
        const gaps = lineGaps?.[li];
        return (
          <div key={li} style={{ display: "flex", flexWrap: "wrap" }}>
            {words.map((word, wi) => (
              <div
                key={wi}
                style={{
                  ...style,
                  display: "flex",
                  marginRight: wi < words.length - 1 ? gaps?.[wi] ?? gap : 0,
                }}
              >
                {word}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default async function Image() {
  const photoData = readFileSync(
    join(process.cwd(), "public/RCF-2345-oriented.jpeg")
  );
  const photoBase64 = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  const logoData = readFileSync(join(process.cwd(), "public/logo-olive.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  const fontData = readFileSync(
    join(process.cwd(), "public/TheSilverEditorial-Regular.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "#16100C",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Foto — lado direito (mesmo tratamento da home) */}
        <img
          src={photoBase64}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "540px",
            height: "630px",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />

        {/* Gradiente de transição foto → texto */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "540px",
            height: "630px",
            background:
              "linear-gradient(to right, #16100C 0%, rgba(22,16,12,0.6) 45%, transparent 100%)",
            display: "flex",
          }}
        />

        {/* Conteúdo — lado esquerdo */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "700px",
            height: "630px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 80px",
          }}
        >
          {/* Logo em container creme (mesmo da home) */}
          <div
            style={{
              background: "#F7F1E8",
              borderRadius: "14px",
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              marginBottom: "28px",
            }}
          >
            <img
              src={logoBase64}
              style={{
                width: "44px",
                height: "44px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Título — nome do produto */}
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <WrappedLines
              lines={["Mentoria", "Caminho de Ester"]}
              lineGaps={[undefined, ["0.14em", "0.36em"]]}
              style={{
                fontFamily: "SilverEditorial",
                fontSize: "50px",
                lineHeight: 1.1,
                letterSpacing: "-0.5px",
                color: "#F5EDD8",
              }}
            />
          </div>

          {/* Linha decorativa */}
          <div
            style={{
              width: "48px",
              height: "1px",
              background: "#C9996A",
              marginBottom: "20px",
              display: "flex",
            }}
          />

          {/* Caption */}
          <div style={{ display: "flex" }}>
            <WrappedLines
              lines={["Mentoria Individual"]}
              gap="0.15em"
              style={{
                fontSize: "15px",
                color: "#DFB98A",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "SilverEditorial", data: fontData, style: "normal" }],
    }
  );
}
