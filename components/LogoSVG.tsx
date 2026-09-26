import React from "react";

interface LogoSVGProps {
  variant?: "full" | "icon";
  monochrome?: boolean;
  className?: string;
}

export default function LogoSVG({
  variant = "full",
  monochrome = false,
  className = "h-10",
}: LogoSVGProps) {
  const primaryStroke = monochrome ? "currentColor" : "#181C19";
  const goldAccent = monochrome ? "currentColor" : "#B89758";
  const textColor = monochrome ? "currentColor" : "#181C19";
  const subtextColor = monochrome ? "currentColor" : "#B89758";

  // Standalone Icon Mark (Archway + 'A' Monogram + Pinnacle)
  const IconMark = (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-auto aspect-square flex-shrink-0"
      aria-hidden="true"
    >
      {/* Outer Boutique Hotel Arch */}
      <path
        d="M8 40V18C8 10.268 14.268 4 22 4C29.732 4 36 10.268 36 18V40"
        stroke={primaryStroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Subtle Inner Arch Framing */}
      <path
        d="M12 40V19C12 13.477 16.477 9 22 9C27.523 9 32 13.477 32 19V40"
        stroke={primaryStroke}
        strokeWidth="1"
        strokeOpacity={monochrome ? "0.4" : "0.35"}
        strokeLinecap="round"
      />
      {/* Monogram 'A' (Arena) Silhouette inside Arch */}
      <path
        d="M15 36L22 17L29 36"
        stroke={primaryStroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Elegant Brass/Gold Crossbar with Subtle Key Motif */}
      <path
        d="M17.5 28.5H26.5"
        stroke={goldAccent}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Keystone / Star Motif at apex */}
      <circle cx="22" cy="13.5" r="1.5" fill={goldAccent} />
      {/* Foundation Threshold */}
      <path
        d="M5 40H39"
        stroke={primaryStroke}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === "icon") {
    return <div className={`inline-flex items-center ${className}`}>{IconMark}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {IconMark}
      <div className="flex flex-col justify-center leading-none">
        <span
          className="font-serif text-[1.125rem] tracking-[0.16em] uppercase font-semibold"
          style={{ color: textColor }}
        >
          Banani
        </span>
        <span
          className="text-[0.625rem] tracking-[0.32em] uppercase font-sans font-medium mt-0.5"
          style={{ color: subtextColor }}
        >
          Hotel Arena
        </span>
      </div>
    </div>
  );
}
