import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "warm" | "highlight";
};

export default function GlassCard({
  children,
  className = "",
  variant = "default",
}: GlassCardProps) {
  const variantStyles = {
    default:
      "border-white/45 bg-white/16 shadow-[0_24px_70px_rgba(84,62,42,0.10)]",
    warm:
      "border-[#E6D3BF]/70 bg-[#F2E8DD]/35 shadow-[0_24px_70px_rgba(120,88,56,0.12)]",
    highlight:
      "border-[#D7B893]/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(231,216,199,0.22))] shadow-[0_26px_80px_rgba(140,102,66,0.14)]",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[30px] border backdrop-blur-[26px] ${variantStyles[variant]} ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/55" />
      <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 rounded-full bg-white/12 blur-2xl" />
      {children}
    </div>
  );
}