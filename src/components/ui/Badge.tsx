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
  success: "bg-emerald-100 text-emerald-800",
  warning: "bg-orange-100 text-orange-800",
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
