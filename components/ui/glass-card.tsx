import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "warm" | "highlight" | "teal";
  interactive?: boolean;
};

export default function GlassCard({
  children,
  className = "",
  variant = "default",
  interactive = false,
}: GlassCardProps) {
  const variantStyles = {
    default:
      "border-white/50 bg-white/20 shadow-[0_28px_80px_rgba(90,40,30,0.12)]",
    warm:
      "border-[#EECCC4]/75 bg-[#F9E0DB]/35 shadow-[0_28px_80px_rgba(90,40,30,0.14)]",
    highlight:
      "border-[#C9A84C]/65 bg-[linear-gradient(160deg,rgba(255,255,255,0.28),rgba(240,210,200,0.22))] shadow-[0_32px_90px_rgba(90,40,30,0.16)]",
    teal:
      "border-[rgba(27,107,98,0.38)] bg-[rgba(27,107,98,0.10)] shadow-[0_28px_80px_rgba(27,107,98,0.10)]",
  };

  const interactiveStyles = interactive
    ? "transition-all duration-300 hover:scale-[1.012] hover:shadow-[0_36px_100px_rgba(27,107,98,0.20)] cursor-pointer"
    : "";

  return (
    <div
      className={`relative overflow-hidden rounded-[30px] border backdrop-blur-[26px] ${variantStyles[variant]} ${interactiveStyles} ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/55" />
      <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
      {children}
    </div>
  );
}
