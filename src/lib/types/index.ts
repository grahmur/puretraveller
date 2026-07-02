/* ------------------------------------------------------------------ */
/*  Pure Traveller - Shared TypeScript Types                         */
/*  All domain types are defined here for consistency across the app. */
/* ------------------------------------------------------------------ */

// ---- Union / Literal Types ----

export type TourType = "bike" | "regular";

export type Region =
  | "himachal"
  | "ladakh"
  | "uttarakhand"
  | "punjab"
  | "kashmir"
  | "rajasthan"
  | "sikkim";

export type Difficulty = "easy" | "moderate" | "challenging" | "extreme";

export type PackageTier = "basic" | "standard" | "premium";

// ---- Core Entities ----

export interface Duration {
  days: number;
  nights: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  stayAt?: string;
  altitude?: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TourPackage {
  id: string;
  name: string;
  tier: PackageTier;
  description: string;         // brief summary of what's different about this tier
  inclusions: PackageInclusion[];
  price: number;               // in INR
  label?: string;              // e.g. "Most Popular", "Best Value"
}

export interface PackageInclusion {
  icon: string;                // emoji or short identifier used for display
  label: string;               // human-readable label
}

export interface DepartureDate {
  date: string;                // ISO date string
  spotsLeft: number;           // seats/bikes remaining
  guaranteed: boolean;         // departure is confirmed
}

export type TravelStyle = "raid" | "discovery" | "liberty" | "training";

export interface Tour {
  id: string;
  slug: string;
  name: string;
  subtitle: string;            // one-liner that appears on cards
  type: TourType;
  region: Region;
  difficulty: Difficulty;
  duration: Duration;
  distance?: number;           // in km, for bike tours
  maxAltitude?: number;        // in meters
  startLocation: string;
  endLocation: string;
  overview: string;            // 2-3 sentence description for detail page
  highlights: string[];
  itinerary: ItineraryDay[];
  images: string[];            // first image = hero / thumbnail
  featured: boolean;
  style: TravelStyle;          // travel style for categorization
  departures: DepartureDate[]; // upcoming departure dates
  packages: TourPackage[];
  included: string[];
  excluded: string[];
  thingsToCarry: string[];
  faqs: FAQ[];
  rating: number;              // 1-5
  reviewCount: number;
  priceRange: {
    min: number;
    max: number;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  tourName: string;
  rating: number;
  text: string;
  avatarInitials: string;      // fallback when no image is available
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarInitials: string;
}

// ---- Search / Filter ----

export interface TourFilters {
  type?: TourType | "all";
  region?: Region | "all";
  difficulty?: Difficulty | "all";
  style?: TravelStyle | "all";
  duration?: string;           // e.g. "1-3", "4-7", "8+"
  search?: string;
}

// ---- Contact Form ----

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredTour?: string;
}
