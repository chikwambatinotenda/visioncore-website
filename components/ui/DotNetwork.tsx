"use client";

export default function DotNetwork({ className = "", variant = "default" }: { className?: string; variant?: "default" | "dense" }) {
  const dots =
    variant === "dense"
      ? [
          [10, 10, "navy"], [40, 25, "orange"], [70, 15, "navy"], [95, 40, "navy"],
          [20, 55, "navy"], [55, 60, "orange"], [85, 70, "navy"], [15, 90, "navy"],
          [45, 92, "navy"], [75, 95, "orange"],
        ]
      : [
          [12, 18, "navy"], [45, 8, "orange"], [78, 22, "navy"],
          [30, 50, "navy"], [65, 55, "orange"], [90, 65, "navy"],
          [15, 85, "navy"], [50, 90, "navy"],
        ];

  const lines: [number, number, number, number][] = [
    [12, 18, 45, 8],
    [45, 8, 78, 22],
    [30, 50, 65, 55],
    [65, 55, 90, 65],
    [15, 85, 50, 90],
    [30, 50, 12, 18],
  ];

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      {lines.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#092C42"
          strokeOpacity="0.12"
          strokeWidth="0.3"
        />
      ))}
      {dots.map(([cx, cy, color], i) => (
        <circle
          key={i}
          cx={cx as number}
          cy={cy as number}
          r={color === "orange" ? 1.4 : 1.1}
          fill={color === "orange" ? "#FC4C00" : "#092C42"}
          opacity={color === "orange" ? 0.55 : 0.25}
        />
      ))}
    </svg>
  );
}
