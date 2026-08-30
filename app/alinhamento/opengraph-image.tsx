import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Alinhamento — 21 Devocionais · Hadassah Perez";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const tabletData = readFileSync(
    join(process.cwd(), "public/tablet alinhamento.png")
  );
  const tabletBase64 = `data:image/png;base64,${tabletData.toString("base64")}`;

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
        {/* Glow olive quente atrás do tablet */}
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-80px",
            width: "700px",
            height: "700px",
            borderRadius: "9999px",
            background:
              "radial-gradient(ellipse at center, rgba(104,131,57,0.35) 0%, rgba(104,131,57,0.08) 45%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Mockup do tablet — lado direito, centralizado por flex (sem transform) */}
        <div
          style={{
            position: "absolute",
            right: "0px",
            top: "0px",
            bottom: "0px",
            width: "540px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={tabletBase64}
            width={460}
            height={460}
            style={{
              width: "460px",
              height: "460px",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Conteúdo — lado esquerdo */}
        <div
          style={{
            position: "relative",
            width: "700px",
            height: "630px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 76px",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              background: "rgba(246,246,246,0.06)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "9999px",
              padding: "10px 22px",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "30px",
            }}
          >
            Devocional Digital · 21 Dias
          </div>

          {/* Headline — linhas manuais, sem auto-wrap (evita espaçamento irregular do Satori) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                fontSize: "46px",
                lineHeight: 1.22,
                letterSpacing: "-0.5px",
                color: "#f6f6f6",
                display: "flex",
              }}
            >
              Volte a sentir a presença
            </div>
            <div
              style={{
                fontSize: "46px",
                lineHeight: 1.22,
                letterSpacing: "-0.5px",
                color: "#f6f6f6",
                display: "flex",
              }}
            >
              de Deus na sua rotina
            </div>
          </div>

          {/* Subtitle — linhas manuais */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "19px",
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.6)",
                display: "flex",
              }}
            >
              Um caminho guiado de 21 dias
            </div>
            <div
              style={{
                fontSize: "19px",
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.6)",
                display: "flex",
              }}
            >
              pra retomar sua conexão com Deus.
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "48px",
            }}
          >
            <div
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "9999px",
                background: "#8ba85a",
                display: "flex",
              }}
            />
            <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", display: "flex" }}>
              hadassahperez.com.br
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
