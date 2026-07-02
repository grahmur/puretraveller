"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { tours } from "@/lib/data/tours";
import { TourCard } from "@/components/tours/TourCard";
import { SearchFilters } from "@/components/tours/SearchFilters";
import { TourNotFound } from "@/components/tours/TourNotFound";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { filterTours } from "@/lib/utils";
import type { TourFilters } from "@/lib/types";

function ToursContent() {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<TourFilters>({});

  useEffect(() => {
    const regionParam = searchParams.get("region");
    const styleParam = searchParams.get("style");
    const initial: TourFilters = {};
    if (regionParam) initial.region = regionParam as TourFilters["region"];
    if (styleParam) initial.style = styleParam as TourFilters["style"];
    if (regionParam || styleParam) setFilters(initial);
  }, [searchParams]);

  const filteredTours = useMemo(
    () => filterTours(tours, filters),
    [filters]
  );

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-gradient-to-b from-zinc-950 to-zinc-900 pt-36 pb-12 px-4 text-center">
        <SectionHeading
          title="Our Journeys"
          subtitle="Find your perfect adventure in the mountains"
        />
      </div>

      <section className="py-8 px-4 max-w-7xl mx-auto">
        <SearchFilters filters={filters} onFiltersChange={setFilters} />
        <p className="mt-6 text-stone-600">
          Showing {filteredTours.length}{" "}
          {filteredTours.length === 1 ? "tour" : "tours"}
        </p>
      </section>

      <section className="pb-16 px-4 max-w-7xl mx-auto">
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <TourNotFound
            onReset={() =>
              setFilters({
                type: "all",
                region: "all",
                difficulty: "all",
                style: "all",
                duration: "",
                search: "",
              })
            }
          />
        )}
      </section>
    </div>
  );
}

export default function ToursPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-stone-50 flex items-center justify-center">
          <div className="animate-pulse text-stone-400">Loading tours...</div>
        </div>
      }
    >
      <ToursContent />
    </Suspense>
  );
}
