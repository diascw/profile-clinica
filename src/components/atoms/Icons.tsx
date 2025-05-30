"use client";

import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

interface IconsProps {
  Icon: LucideIcon | IconType;
  size: number;
  isBrand?: boolean;
}

export function Icons({ Icon, size, isBrand = false }: IconsProps) {
  const scale = isBrand ? 0.75 : 0.85;

  return (
    <div
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <Icon size={size * scale} />
    </div>
  );
}
