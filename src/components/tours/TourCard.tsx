import Link from "next/link";
import type { Tour, DepartureDate } from "@/lib/types";
import { formatDuration, formatPrice } from "@/lib/utils";
import { REGION_LABELS, DIFFICULTY_LABELS } from "@/lib/constants";
import { Rating } from "@/components/ui/Rating";

interface TourCardProps {
  tour: Tour;
  className?: string;
}

const STYLE_CONFIG: Record<string, { bg: string; label: string }> = {
  raid: { bg: "bg-navy", label: "Raid" },
  discovery: { bg: "bg-brand", label: "Discovery" },
  liberty: { bg: "bg-brand/80", label: "Liberty" },
  training: { bg: "bg-brand/60", label: "Training" },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getUpcomingDepartures(departures: DepartureDate[]): DepartureDate[] {
  const now = new Date();
  return departures
    .filter((d) => new Date(d.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 2);
}

function spotsColor(spots: number): string {
  if (spots === 0) return "text-navy/60";
  if (spots <= 5) return "text-navy";
  return "text-brand";
}

function spotsLabel(spots: number): string {
  if (spots === 0) return "Sold out";
  return `${spots} spot${spots !== 1 ? "s" : ""} left`;
}

export function TourCard({ tour, className = "" }: TourCardProps) {
  const heroImage = tour.images?.[0] ?? "";
  const styleConfig = STYLE_CONFIG[tour.style] ?? {
    bg: "bg-brand",
    label: tour.style,
  };
  const upcoming = getUpcomingDepartures(tour.departures);

  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col ${className}`}
    >
      {/* Image Section */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: heroImage ? `url(${heroImage})` : undefined }}
        />
        {!heroImage && <div className="absolute inset-0 bg-stone-200" />}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent" />

        {/* Top-left: Travel style badge */}
        <span
          className={`absolute top-3 left-3 ${styleConfig.bg} text-white px-3 py-1 rounded-full text-xs font-bold`}
        >
          {styleConfig.label}
        </span>

        {/* Top-right: Region badge */}
        <span className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
          {REGION_LABELS[tour.region]}
        </span>

        {/* Featured badge */}
        {tour.featured && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-brand/80 text-white text-xs px-2 py-0.5 rounded-full font-medium">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Tour Name */}
        <Link href={`/tours/${tour.slug}`} className="block">
          <h3 className="text-xl font-bold text-stone-900 group-hover:text-brand transition-colors">
            {tour.name}
          </h3>
        </Link>

        {/* Subtitle */}
        <p className="text-sm text-stone-500 mt-1 line-clamp-2">
          {tour.subtitle}
        </p>

        {/* Duration & Difficulty */}
        <div className="flex items-center gap-2 mt-3 flex-wrap">
          <span className="inline-flex items-center gap-1 text-xs bg-stone-100 text-stone-700 px-2 py-0.5 rounded-full font-medium">
            🕒 {formatDuration(tour.duration.days, tour.duration.nights)}
          </span>
          <span className="inline-flex items-center gap-1 text-xs bg-stone-100 text-stone-700 px-2 py-0.5 rounded-full font-medium">
            {DIFFICULTY_LABELS[tour.difficulty]}
          </span>
        </div>

        {/* Rating */}
        <div className="mt-2">
          <Rating
            rating={tour.rating}
            reviewCount={tour.reviewCount}
            showCount
            size="sm"
          />
        </div>

        {/* Divider */}
        <hr className="my-3 border-stone-200" />

        {/* Departure Dates */}
        {upcoming.length > 0 ? (
          <div className="space-y-1.5">
            {upcoming.map((dep, i) => (
              <div
                key={i}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-stone-700 font-medium">
                  📅 {formatDate(dep.date)}
                </span>
                <span className={`text-xs font-medium ${spotsColor(dep.spotsLeft)}`}>
                  {spotsLabel(dep.spotsLeft)}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-stone-400 italic">
            No upcoming departures
          </p>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-3 mt-auto">
          <p className="text-brand font-bold text-xl">
            From {formatPrice(tour.priceRange.min)}
          </p>
          <Link
            href={`/tours/${tour.slug}`}
            className="text-brand/80 font-medium text-sm hover:text-brand/80 transition-colors"
          >
            View Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
