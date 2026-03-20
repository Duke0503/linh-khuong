"use client";

import { useScrollReveal } from "@/shared/hooks/useScrollReveal";
import { cn } from "@/shared/lib/utils";

type RevealDirection = "up" | "left" | "right" | "none";

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: 0 | 1 | 2 | 3 | 4;
  threshold?: number;
  as?: React.ElementType;
  onClick?: () => void;
}

export default function RevealWrapper({
  children,
  className,
  direction = "up",
  delay = 0,
  threshold,
  as: Tag = "div",
  onClick,
}: RevealWrapperProps) {
  const { ref, inView } = useScrollReveal({ threshold });

  const directionClass = {
    up: "reveal-up",
    left: "reveal-left",
    right: "reveal-right",
    none: "reveal-none",
  }[direction];

  const delayClass = delay > 0 ? `stagger-${delay}` : "";

  return (
    <Tag
      ref={ref}
      className={cn(directionClass, delayClass, inView && "visible", className)}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
}
