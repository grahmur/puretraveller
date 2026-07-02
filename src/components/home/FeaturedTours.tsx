import Link from "next/link";
import { tours } from "@/lib/data/tours";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TourCard } from "@/components/tours/TourCard";

export function FeaturedTours() {
  const featuredTours = tours.filter((t) => t.featured).slice(0, 4);

  return (
    <section className="pt-10 pb-12 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="Featured Journeys"
          subtitle="Our most loved and carefully curated adventures"
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-brand font-semibold text-lg hover:text-brand/80 transition-colors"
          >
            View All Tours
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
