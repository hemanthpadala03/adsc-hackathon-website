import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} · ${siteConfig.motto}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#07243d",
        color: "white",
      }}
    >
      <div style={{ fontSize: 28, color: "#c7ebe6" }}>
        {`${siteConfig.organiser} · ${siteConfig.university}`}
      </div>
      <div style={{ fontSize: 96, marginTop: 24 }}>{siteConfig.name}</div>
      <div style={{ fontSize: 44, marginTop: 24, color: "#8dceab" }}>
        {siteConfig.motto}
      </div>
      <div
        style={{
          marginTop: 48,
          height: 8,
          width: 240,
          borderRadius: 4,
          background: "linear-gradient(90deg, #00549f, #1fb5b0, #4caf6e)",
        }}
      />
    </div>,
    size,
  );
}
