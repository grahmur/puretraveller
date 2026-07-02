import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  maxWords?: number;
  className?: string;
}

function truncateWords(text: string, max: number): string {
  const words = text.split(/\s+/);
  if (words.length <= max) return text;
  return words.slice(0, max).join(" ") + "...";
}

export function TestimonialCard({
  testimonial,
  maxWords = 30,
  className = "",
}: TestimonialCardProps) {
  const { name, tourName, rating, text, avatarInitials } = testimonial;
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      {/* Top row: avatar + name + stars */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-stone-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
          {avatarInitials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-stone-900 text-sm truncate">{name}</p>
          <p className="text-xs text-stone-400 truncate">{tourName}</p>
        </div>
        <div className="flex gap-0.5 shrink-0">
          {stars.map((filled, i) => (
            <span
              key={i}
              className={`text-sm ${filled ? "text-brand" : "text-stone-200"}`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Quote */}
      <p className="text-stone-600 text-sm leading-relaxed line-clamp-3">
        <span className="text-brand font-serif mr-1">&ldquo;</span>
        {truncateWords(text, maxWords)}
        <span className="text-brand font-serif ml-1">&rdquo;</span>
      </p>
    </div>
  );
}
