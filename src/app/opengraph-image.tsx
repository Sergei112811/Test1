import { ImageResponse } from "next/og";

export const alt = "Аренда автомобилей для грузоперевозок";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        color: "#181612",
        background: "#f5f2eb",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ color: "#9f3817", fontSize: 28, letterSpacing: 3 }}>МОСКВА И ОБЛАСТЬ</div>
      <div style={{ maxWidth: 960, fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
        Автомобили для грузоперевозок
      </div>
    </div>,
    size,
  );
}
