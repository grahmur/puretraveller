import Link from "next/link";
import { tours } from "@/lib/data/tours";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TourCard } from "@/components/tours/TourCard";

export function FeaturedTours() {
  const featuredTours = tours.filter((t) => t.featured).slice(0, 4);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <SectionHeading
        title="Featured Journeys"
        subtitle="Our most loved and carefully curated adventures"
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/tours"
          className="inline-flex items-center gap-2 text-brand font-semibold text-lg hover:text-brand/80 transition-colors"
        >
          View All Tours
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
