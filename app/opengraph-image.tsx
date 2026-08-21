import { ImageResponse } from "next/og";

export const alt = "Davi Almeida | Data products built for real work";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0b1522",
          color: "#f5f3ea",
          padding: "68px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-100px",
            top: "-180px",
            width: "620px",
            height: "620px",
            borderRadius: "50%",
            border: "2px solid rgba(215,255,70,.28)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "110px",
            bottom: "-220px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background: "rgba(114,212,255,.12)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "66px",
                height: "66px",
                borderRadius: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#d7ff46",
                color: "#0b1522",
                fontSize: "25px",
                fontWeight: 800,
              }}
            >
              DA
            </div>
            <div style={{ display: "flex", fontSize: "28px", fontWeight: 700 }}>
              Davi Almeida
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: "900px" }}>
            <div
              style={{
                color: "#d7ff46",
                fontSize: "22px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "22px",
                display: "flex",
              }}
            >
              Data Analyst · Data Engineer · Applied AI
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "72px",
                lineHeight: 1.02,
                fontWeight: 800,
                letterSpacing: "-3px",
              }}
            >
              Data products
              <span style={{ color: "#d7ff46" }}>built for real work</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", fontSize: "20px" }}>
            {["SQL", "Python", "Power BI", "PostgreSQL", "LLMs"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  padding: "10px 18px",
                  border: "1px solid rgba(245,243,234,.25)",
                  borderRadius: "999px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
