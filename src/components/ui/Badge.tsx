import type { ReactNode } from "react";

type BadgeVariant = "primary" | "secondary" | "outline" | "success" | "warning";
type BadgeSize = "sm" | "md";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: "bg-brand/20 text-brand",
  secondary: "bg-brand/10 text-brand",
  outline: "border border-brand text-brand",
  success: "bg-brand/10 text-brand",
  warning: "bg-navy/10 text-navy",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

const baseStyles = "rounded-full font-medium inline-flex items-center gap-1";

export function Badge({
  children,
  variant = "primary",
  size = "sm",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}
