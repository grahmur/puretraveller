import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { tours } from "@/lib/data/tours";

export const metadata: Metadata = {
  title: "Tours & Packages",
  description:
    "Explore Pure Traveller's curated motorcycle tours and trekking expeditions across Himachal, Ladakh, Uttarakhand, Kashmir, and beyond. From weekend rides to extreme 14-day odysseys — find your perfect Himalayan adventure.",
  alternates: {
    canonical: `${SITE_URL}/tours`,
  },
  openGraph: {
    title: "Tours & Packages | Pure Traveller",
    description:
      "Explore Pure Traveller's curated motorcycle tours and trekking expeditions across Himachal, Ladakh, Uttarakhand, Kashmir, and beyond. From weekend rides to extreme 14-day odysseys — find your perfect Himalayan adventure.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: tours.map((tour, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Trip",
      name: tour.name,
      description: tour.overview,
      url: `https://puretraveller.in/tours/${tour.slug}`,
      image: tour.images[0]
        ? `https://puretraveller.in${tour.images[0]}`
        : undefined,
      offers: {
        "@type": "Offer",
        lowPrice: tour.priceRange.min,
        highPrice: tour.priceRange.max,
        priceCurrency: "INR",
      },
    },
  })),
};

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
