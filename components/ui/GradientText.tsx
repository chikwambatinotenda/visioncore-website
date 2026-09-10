import { ElementType, ReactNode } from "react";

export default function GradientText({
  children,
  as: Component = "span",
  animated = false,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  animated?: boolean;
  className?: string;
}) {
  return (
    <Component
      className={`vc-gradient-text ${animated ? "vc-gradient-text-animated" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
