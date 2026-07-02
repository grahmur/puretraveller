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
      <Tag className="text-3xl font-bold text-brand">{title}</Tag>
      {subtitle && (
        <p className="mt-3 text-lg text-stone-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {useDivider && (
        <div
          className={`mt-4 h-1 w-16 bg-brand rounded-full ${
            align === "center" ? "mx-auto" : ""
          }`}
        />
      )}
    </div>
  );
}
