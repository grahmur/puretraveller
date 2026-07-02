interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h3";
  useDivider?: boolean;
}

const alignStyles: Record<"left" | "center", string> = {
  left: "text-left",
  center: "text-center",
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
  as: Tag = "h2",
  useDivider = true,
}: SectionHeadingProps) {
  return (
    <div className={`${alignStyles[align]} ${className}`}>
      {useDivider && (
        <div
          className={`h-1 w-12 bg-brand rounded-full mb-4 ${
            align === "center" ? "mx-auto" : ""
          }`}
        />
      )}
      <Tag className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
        {title}
      </Tag>
      {subtitle && (
        <p className={`mt-2 text-stone-500 text-base md:text-lg max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
