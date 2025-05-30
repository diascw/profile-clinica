"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface LogoProps {
  src: string;
  alt?: string;
  fallbackText?: string;
  size?: number;
  className?: string;
}

export function Logo({
  src,
  alt = "",
  fallbackText = "",
  size = 96,
  className,
}: LogoProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-lg bg-muted text-clinic-primary font-bold text-3xl",
        className
      )}
      style={{ width: size, height: size }}
    >
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <span>{fallbackText}</span>
      )}
    </div>
  );
}
