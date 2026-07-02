/* ------------------------------------------------------------------ */
/*  Pure Traveller - App Constants                                    */
/*  Centralises all hardcoded strings used across the application.    */
/* ------------------------------------------------------------------ */

import type { Region, TourType, Difficulty, PackageTier, TravelStyle } from "@/lib/types";

// ---- Site Metadata ----

export const SITE_NAME = "Pure Traveller";
export const SITE_TAGLINE = "Ride. Explore. Discover.";
export const SITE_DESCRIPTION =
  "Pure Traveller organises unforgettable motorcycle and adventure tours across the mountains of North India — Himachal, Ladakh, Uttarakhand, and beyond.";

// ---- Contact ----

export const CONTACT_PHONE = "+91 96547 23856";
export const CONTACT_WHATSAPP = "+919654723856";
export const CONTACT_EMAIL = "hello@puretraveller.in";
export const CONTACT_ADDRESS = "Manali, Himachal Pradesh, India";

// ---- Social Links ----

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/puretraveller",
  facebook: "https://facebook.com/puretraveller",
  youtube: "https://youtube.com/@puretraveller",
  whatsapp: "https://wa.me/919654723856",
};

// ---- Navigation ----

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ---- Map Labels (used in filters & badges) ----

export const REGION_LABELS: Record<Region, string> = {
  himachal: "Himachal Pradesh",
  ladakh: "Ladakh",
  uttarakhand: "Uttarakhand",
  punjab: "Punjab",
  kashmir: "Kashmir",
  rajasthan: "Rajasthan",
  sikkim: "Sikkim",
};

export const TOUR_TYPE_LABELS: Record<TourType, string> = {
  bike: "Bike Tour",
  regular: "Regular Tour",
};

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  easy: "Easy",
  moderate: "Moderate",
  challenging: "Challenging",
  extreme: "Extreme",
};

export const PACKAGE_TIER_LABELS: Record<PackageTier, string> = {
  basic: "Basic",
  standard: "Standard",
  premium: "Premium",
};

export const TRAVEL_STYLE_LABELS: Record<TravelStyle, string> = {
  raid: "Raid Adventure",
  discovery: "Discovery",
  liberty: "Liberty",
  training: "Training",
};

export const TRAVEL_STYLE_INFO: Record<
  TravelStyle,
  { icon: string; description: string; gradient: string }
> = {
  raid: {
    icon: "🏔️",
    description:
      "For thrill-seekers. Extreme routes, high passes, and raw Himalayan terrain.",
    gradient: "from-navy to-navy/80",
  },
  discovery: {
    icon: "🌄",
    description:
      "Immersive journeys blending scenic rides with cultural experiences.",
    gradient: "from-brand to-brand/60",
  },
  liberty: {
    icon: "🏍️",
    description:
      "Ride at your own pace. Self-guided tours with pre-booked stays and routes.",
    gradient: "from-navy/80 to-brand",
  },
  training: {
    icon: "🛠️",
    description:
      "Learn off-roading skills and mountain riding techniques from experts.",
    gradient: "from-navy/80 to-brand/60",
  },
};

// ---- Filter Options ----

export const REGION_OPTIONS = Object.entries(REGION_LABELS).map(
  ([value, label]) => ({ value, label })
);

export const TOUR_TYPE_OPTIONS = Object.entries(TOUR_TYPE_LABELS).map(
  ([value, label]) => ({ value, label })
);

export const DIFFICULTY_OPTIONS = Object.entries(DIFFICULTY_LABELS).map(
  ([value, label]) => ({ value, label })
);

export const DURATION_OPTIONS = [
  { value: "1-3", label: "1 - 3 Days" },
  { value: "4-7", label: "4 - 7 Days" },
  { value: "8+", label: "8+ Days" },
];

// ---- Why Choose Us (Home page) ----

export const WHY_CHOOSE_US = [
  {
    icon: "🏍️",
    title: "Experienced Rider & Guide",
    description:
      "Your tour is led by a seasoned biker who knows every twist and turn of the mountain roads.",
  },
  {
    icon: "⛰️",
    title: "Hand-Picked Routes",
    description:
      "We scout every route ourselves to bring you the most scenic and thrilling experiences.",
  },
  {
    icon: "🛡️",
    title: "Safety First",
    description:
      "All tours include basic medical kit, backup vehicle on select routes, and experienced crew.",
  },
  {
    icon: "💎",
    title: "Flexible Packages",
    description:
      "Choose what suits you — from ride-only plans to fully managed trips with stays and meals.",
  },
];

// ---- Stats (Home page) ----

export const HOME_STATS = [
  { value: "50+", label: "Tours Completed" },
  { value: "500+", label: "Happy Travellers" },
  { value: "15+", label: "Destinations" },
  { value: "4.9", label: "Average Rating" },
];
