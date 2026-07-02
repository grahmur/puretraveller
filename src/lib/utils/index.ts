/* ------------------------------------------------------------------ */
/*  Pure Traveller - Utility Functions                                */
/*  Pure helpers with no side-effects. Keep this file lean.           */
/* ------------------------------------------------------------------ */

import type { Tour, TourFilters } from "@/lib/types";

/** Format a number as Indian Rupee (INR) currency string. */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Build a human-readable duration string. */
export function formatDuration(days: number, nights: number): string {
  const dayLabel = days === 1 ? "Day" : "Days";
  const nightLabel = nights === 1 ? "Night" : "Nights";
  if (nights === 0) return `${days} ${dayLabel}`;
  return `${days} ${dayLabel} / ${nights} ${nightLabel}`;
}

/** Slugify a string for URLs. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/** Filter a list of tours based on the provided filters. */
export function filterTours(tours: Tour[], filters: TourFilters): Tour[] {
  let result = [...tours];

  if (filters.type && filters.type !== "all") {
    result = result.filter((t) => t.type === filters.type);
  }

  if (filters.region && filters.region !== "all") {
    result = result.filter((t) => t.region === filters.region);
  }

  if (filters.difficulty && filters.difficulty !== "all") {
    result = result.filter((t) => t.difficulty === filters.difficulty);
  }

  if (filters.style && filters.style !== "all") {
    result = result.filter((t) => t.style === filters.style);
  }

  if (filters.duration) {
    result = result.filter((t) => {
      switch (filters.duration) {
        case "1-3":
          return t.duration.days <= 3;
        case "4-7":
          return t.duration.days >= 4 && t.duration.days <= 7;
        case "8+":
          return t.duration.days >= 8;
        default:
          return true;
      }
    });
  }

  if (filters.search && filters.search.trim() !== "") {
    const q = filters.search.toLowerCase();
    result = result.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.subtitle.toLowerCase().includes(q) ||
        t.region.toLowerCase().includes(q) ||
        t.highlights.some((h) => h.toLowerCase().includes(q))
    );
  }

  return result;
}

/** Truncate text to a character limit, appending ellipsis if needed. */
export function truncate(text: string, limit: number): string {
  if (text.length <= limit) return text;
  return text.slice(0, limit).trim() + "...";
}
