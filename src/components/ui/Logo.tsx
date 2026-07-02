import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const src =
    variant === "light" ? "/images/logo-dark.webp" : "/images/logo-light.webp";

  return (
    <Image
      src={src}
      alt="Pure Traveller"
      width={180}
      height={44}
      className={`h-10 w-auto ${className}`}
      priority
    />
  );
}
