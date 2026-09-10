import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const base =
  "group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-250 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FC4C00]";

const variants: Record<string, string> = {
  primary:
    "bg-[#FC4C00] text-white hover:bg-[#e34400] shadow-[0_0_0_0_rgba(252,76,0,0)] hover:shadow-[0_8px_24px_-8px_rgba(252,76,0,0.5)]",
  secondary:
    "border border-[#092C42]/20 text-[#092C42] hover:border-[#FC4C00] hover:text-[#FC4C00]",
  ghost: "text-white/90 hover:text-white",
};

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 shrink-0 transition-transform duration-250 ease-out group-hover:translate-x-1"
    >
      <path
        d="M4 10h12M12 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CTAButton(props: ButtonProps | LinkProps) {
  const { children, variant = "primary", className = "", ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={props.href} className={classes} {...anchorRest}>
        {children}
        <Arrow />
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      <Arrow />
    </button>
  );
}
