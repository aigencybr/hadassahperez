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
// e escolher as linhas manualmente evita quebras órfãs (uma palavra sozinha).
function WrappedLines({
  lines,
  style,
  gap = "0.26em",
}: {
  lines: string[];
  style: React.CSSProperties;
  gap?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {lines.map((line, li) => (
        <div key={li} style={{ display: "flex", flexWrap: "wrap" }}>
          {line.split(" ").map((word, wi) => (
            <div key={wi} style={{ ...style, display: "flex", marginRight: gap }}>
              {word}
            </div>
          ))}
        </div>
      ))}
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
          background: "#F0E8DC",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Foto — cartão arredondado à direita (radius direto na img, o clip do wrapper não é confiável no Satori) */}
        <div
          style={{
            position: "absolute",
            right: "48px",
            top: "48px",
            bottom: "48px",
            width: "420px",
            display: "flex",
            boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
          }}
        >
          <img
            src={photoBase64}
            style={{
              width: "420px",
              height: "534px",
              objectFit: "cover",
              objectPosition: "center top",
              borderRadius: "28px",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "28px",
              background:
                "linear-gradient(to bottom, transparent 55%, rgba(16,10,6,0.22))",
              display: "flex",
            }}
          />
        </div>

        {/* Conteúdo — lado esquerdo */}
        <div
          style={{
            position: "relative",
            width: "660px",
            height: "630px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 76px",
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", marginBottom: "22px" }}>
            <WrappedLines
              lines={["Mentoria Caminho de Ester"]}
              gap="0.05em"
              style={{
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#B8784A",
              }}
            />
          </div>

          {/* Logo */}
          <img
            src={logoBase64}
            style={{ width: "54px", height: "54px", objectFit: "contain", marginBottom: "26px" }}
          />

          {/* Headline — quebra escolhida à mão (evita "dividida" órfã) */}
          <div style={{ display: "flex", marginBottom: "22px" }}>
            <WrappedLines
              lines={["Saia do ciclo", "de viver dividida"]}
              style={{
                fontFamily: "SilverEditorial",
                fontSize: "44px",
                lineHeight: 1.24,
                letterSpacing: "-0.5px",
                color: "#1C1410",
              }}
            />
          </div>

          {/* Subtitle */}
          <div style={{ display: "flex" }}>
            <WrappedLines
              lines={["entre quem você é hoje", "e quem Deus te chamou pra ser."]}
              style={{ fontSize: "19px", lineHeight: 1.5, color: "#5E4535" }}
            />
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "9999px",
                background: "#B8784A",
                display: "flex",
              }}
            />
            <div style={{ fontSize: "15px", color: "#5E4535", display: "flex" }}>
              hadassahperez.com.br
            </div>
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
