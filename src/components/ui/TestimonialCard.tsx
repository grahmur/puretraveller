import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className = "",
}: TestimonialCardProps) {
  const { name, tourName, text, avatarInitials } = testimonial;

  return (
    <div
      className={`bg-white rounded-3xl p-6 border border-stone-200/60 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-[210px] sm:h-[220px] ${className}`}
    >
      {/* Decorative quote mark */}
      <span className="absolute top-4 right-6 text-brand/10 font-serif text-8xl select-none leading-none pointer-events-none" aria-hidden="true">
        &ldquo;
      </span>

      <div>
        {/* Rating Stars */}
        <div className="flex gap-0.5 text-amber-500 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-sm">★</span>
          ))}
        </div>

        {/* Review Quote Text - clamped to max 3 lines to keep card short */}
        <p className="text-stone-600 text-[14px] leading-relaxed font-medium italic pr-6 line-clamp-3">
          &ldquo;{text}&rdquo;
        </p>
      </div>

      {/* Reviewer Meta Info */}
      <div className="flex items-center gap-3.5 border-t border-stone-100 pt-3 mt-auto">
        {/* Circle Avatar Image or Fallback Initials */}
        {testimonial.avatarUrl ? (
          <img
            src={testimonial.avatarUrl}
            alt={name}
            className="w-10 h-10 rounded-full object-cover shrink-0 border border-brand/10"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand/20 to-brand/10 text-brand flex items-center justify-center font-bold text-xs shrink-0 border border-brand/10">
            {avatarInitials}
          </div>
        )}

        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-stone-900 text-sm truncate">{name}</span>
            <span className="text-[9px] text-brand bg-brand/10 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider flex items-center gap-0.5 shrink-0">
              <span>✓</span> Rider
            </span>
          </div>
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest truncate mt-0.5">
            {tourName}
          </p>
        </div>
      </div>
    </div>
  );
}
