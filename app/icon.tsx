import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#181C19",
          borderRadius: "6px",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 40V18C8 10.268 14.268 4 22 4C29.732 4 36 10.268 36 18V40"
            stroke="#FAF8F5"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M15 36L22 17L29 36"
            stroke="#FAF8F5"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 28.5H26.5"
            stroke="#B89758"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <circle cx="22" cy="13.5" r="2.2" fill="#B89758" />
          <path
            d="M5 40H39"
            stroke="#FAF8F5"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
