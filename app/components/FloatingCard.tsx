"use client";

import { LucideIcon } from "lucide-react";
import clsx from "clsx";

type Variant = "default" | "portal";

interface Props {
  icon?: LucideIcon;
  label?: string;
  rotation?: number;
  color?: "blue" | "orange" | "dark";
  variant?: Variant;
  className?: string;
}

export default function FloatingCard({
  icon: Icon,
  label,
  rotation = 0,
  color = "blue",
  variant = "default",
  className,
}: Props) {
  const base =
    "absolute rounded-full shadow-xl transition-all duration-300";

  const colors = {
    blue: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white",
    orange: "bg-orange-500 text-white",
    dark: "bg-[#2D2342] text-white",
  };

  if (variant === "portal") {
  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={clsx(
        "absolute w-[460px] px-6 py-3 rounded-[270px] bg-[#9AA3D8] shadow-[0_30px_60px_rgba(0,0,0,0.18)]",
        className
      )}
    >
      <div className="flex items-center gap-4 relative">

        {/* Left Accent Line */}
        <div className="w-[4px] h-12 bg-orange-500 rounded-full" />

        {/* Avatar */}
        <div className="w-11 h-11 rounded-full overflow-hidden shadow-md bg-[#d6bed2] ">
          <img
            src="/avatar.png"  // put your avatar image in public folder
            alt="John"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <div className="font-semibold text-[15px] text-[#2F3355]">
            John Doe – Portal
          </div>

          <p className="text-[13px] text-[#2F3355]/70  leading-snug max-w-[600px]">
            Hey! Could you please review a document for me?
          </p>

          <span className="text-[12px] text-[#2F3355]/50 mt-1">
            MAT-2233 · 2h ago
          </span>
        </div>
      </div>
    </div>
  );
}
  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={clsx(
        base,
        "flex items-center gap-3 px-22 py-5",
        colors[color],
        className
      )}
    >
      {Icon && <Icon size={30} />}
      <span className="font-semibold text-lg">{label}</span>
    </div>
  );
}
