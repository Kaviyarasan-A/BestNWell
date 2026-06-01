import { ImageResponse } from "next/og";
import { company } from "@/lib/data";

export const runtime = "nodejs";
export const alt = `${company.name} — ${company.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(1200px 600px at 80% -10%, rgba(196,99,62,0.30), transparent 60%), #FBF7F2",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 22,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #5A2C1A, #7C3C24 50%, #C4633E)",
            }}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8.5 5v14" />
              <path d="M8.5 12.4 15.5 6" />
              <path d="M8.5 12.4 15.5 19" />
              <path d="M8.5 12.4C6 10.6 4.4 8.6 3.2 6" />
              <path d="M8.5 12.4C6.6 12 5.2 11.4 4 10.4" />
            </svg>
          </div>
          <div style={{ display: "flex", gap: 12, fontSize: 38, fontWeight: 700, color: "#1A1A1A" }}>
            <span style={{ color: "#7C3C24" }}>Kaagam</span>
            <span>Software Solutions</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#1A1A1A",
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Your IT &amp; Software partner — Web, Mobile, AI &amp; Cloud.
          </div>
          <div style={{ fontSize: 32, color: "#6B6B6B" }}>
            Software · Web · Mobile · E-commerce · AI · Cloud · DevOps · Support
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 26, color: "#A04F30", fontWeight: 600 }}>
          <span>{company.domain}</span>
          <span style={{ color: "#E8E2D8" }}>|</span>
          <span>{company.location}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
