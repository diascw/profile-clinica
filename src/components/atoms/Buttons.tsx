"use client";

import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";
import { Icons } from "@/components/atoms/Icons";

interface ButtonProps {
  icon: LucideIcon | IconType;
  label: string;
  variant?:
    | "whatsapp"
    | "facebook"
    | "instagram"
    | "clinic-primary"
    | "clinic-secondary"
    | "clinic-tertiary";
  fullWidth?: boolean;
  size?: "default" | "lg";
  className?: string;
  onClick: () => void;
}

const variantStyles = {
  whatsapp:
    "bg-social-whatsapp hover:bg-social-whatsapp/90 dark:bg-green-600 dark:hover:bg-green-700",
  facebook:
    "bg-social-facebook hover:bg-social-facebook/90 dark:bg-blue-700 dark:hover:bg-blue-800",
  instagram:
    "bg-gradient-to-r from-social-instagram-from to-social-instagram-to hover:opacity-90 dark:from-pink-600 dark:to-purple-700",
  "clinic-primary":
    "bg-clinic-primary hover:bg-clinic-primary/90 dark:bg-clinic-primary-dark dark:hover:bg-clinic-primary-dark/90",
  "clinic-secondary":
    "bg-clinic-secondary hover:bg-clinic-secondary/90 dark:bg-clinic-secondary-dark dark:hover:bg-clinic-secondary-dark/90",
  "clinic-tertiary":
    "bg-clinic-tertiary hover:bg-clinic-tertiary/90 dark:bg-clinic-tertiary-dark dark:hover:bg-clinic-tertiary-dark/90",
};

const isBrandVariant = (variant: ButtonProps["variant"]) =>
  variant === "whatsapp" || variant === "facebook" || variant === "instagram";

export function Buttons({
  icon,
  label,
  variant = "clinic-primary",
  fullWidth = false,
  size = "default",
  className,
  onClick,
}: ButtonProps) {
  const iconSize = size === "lg" ? 32 : 24;
  const isBrand = isBrandVariant(variant);

  return (
    <Button
      onClick={onClick}
      className={cn(
        "text-white font-medium shadow-lg transition-all duration-200 animate-fade-in",
        variantStyles[variant],
        fullWidth && "w-full",
        size === "lg" && "h-14 text-lg font-semibold",
        size === "default" && "h-12",
        className
      )}
    >
      <Icons Icon={icon} size={iconSize} isBrand={isBrand} />
      <span className="ml-2">{label}</span>
    </Button>
  );
}
