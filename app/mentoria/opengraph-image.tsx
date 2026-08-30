import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Caminho de Ester — Mentoria Individual · Hadassah Perez";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
        {/* Foto — cartão arredondado à direita */}
        <div
          style={{
            position: "absolute",
            right: "48px",
            top: "48px",
            bottom: "48px",
            width: "420px",
            borderRadius: "28px",
            overflow: "hidden",
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
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
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
          <div
            style={{
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#B8784A",
              marginBottom: "22px",
              display: "flex",
            }}
          >
            Mentoria Caminho de Ester
          </div>

          {/* Logo */}
          <img
            src={logoBase64}
            style={{ width: "54px", height: "54px", objectFit: "contain", marginBottom: "26px" }}
          />

          {/* Headline */}
          <div
            style={{
              fontFamily: "SilverEditorial",
              fontSize: "44px",
              lineHeight: 1.18,
              letterSpacing: "-0.5px",
              color: "#1C1410",
              marginBottom: "22px",
              maxWidth: "480px",
              display: "flex",
            }}
          >
            Saia do ciclo de viver dividida
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "19px",
              lineHeight: 1.5,
              color: "#5E4535",
              maxWidth: "460px",
              display: "flex",
            }}
          >
            entre quem você é hoje e quem Deus te chamou pra ser.
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
