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
      "border-white/50 bg-white/20 shadow-[0_28px_80px_rgba(84,62,42,0.14)]",
    warm:
      "border-[#E6D3BF]/80 bg-[#F2E8DD]/40 shadow-[0_28px_80px_rgba(120,88,56,0.16)]",
    highlight:
      "border-[#D7B893]/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(231,216,199,0.25))] shadow-[0_32px_90px_rgba(140,102,66,0.18)]",
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