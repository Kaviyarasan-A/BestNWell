import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #5A2C1A, #7C3C24 50%, #C4633E)",
        }}
      >
        <svg
          width="112"
          height="112"
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
    ),
    { ...size }
  );
}
