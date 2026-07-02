interface RatingProps {
  rating: number;
  reviewCount?: number;
  showCount?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles: Record<"sm" | "md" | "lg", string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export function Rating({
  rating,
  reviewCount,
  showCount = true,
  size = "md",
  className = "",
}: RatingProps) {
  const clamped = Math.max(0, Math.min(5, rating));
  const filled = Math.round(clamped);
  const empty = 5 - filled;

  return (
    <div className={`inline-flex items-center gap-1 ${sizeStyles[size]} ${className}`}>
      <span className="text-brand" aria-label={`${rating} out of 5 stars`}>
        {"\u2605".repeat(filled)}
      </span>
      <span className="text-stone-300">
        {"\u2606".repeat(empty)}
      </span>
      {showCount && reviewCount !== undefined && (
        <span className="ml-1 text-stone-500 text-sm">
          {rating} &middot; {reviewCount} review{reviewCount !== 1 ? "s" : ""}
        </span>
      )}
    </div>
  );
}
