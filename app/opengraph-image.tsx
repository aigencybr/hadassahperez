import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Hadassah Perez — Coach, Mentora e Cantora Cristã";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photoData = readFileSync(
    join(process.cwd(), "public/coach life hadassa.jpeg")
  );
  const photoBase64 = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  const logoData = readFileSync(join(process.cwd(), "public/logo-olive.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

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
        {/* Foto — lado direito */}
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
          {/* Logo em container creme (fundo original do PNG) */}
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
              marginBottom: "32px",
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

          {/* Nome */}
          <div
            style={{
              fontSize: "58px",
              fontWeight: 400,
              color: "#F5EDD8",
              lineHeight: 1.05,
              marginBottom: "20px",
              letterSpacing: "-0.5px",
            }}
          >
            Hadassah Perez
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

          {/* Tagline */}
          <div
            style={{
              fontSize: "17px",
              color: "#DFB98A",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Coach · Mentora · Cantora Cristã
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
