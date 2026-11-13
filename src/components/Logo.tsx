import Link from "next/link";

type LogoProps = { light?: boolean; className?: string };

export function Logo({ light = false, className = "text-xl" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Luma home"
      className={`font-display font-extrabold ${light ? "text-white" : "text-ink"} ${className}`}
    >
      luma<span className={light ? "text-white" : "text-brand"}>.</span>
    </Link>
  );
}