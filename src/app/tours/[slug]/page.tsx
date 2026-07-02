import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tours } from "@/lib/data/tours";
import { formatPrice, formatDuration } from "@/lib/utils";
import { REGION_LABELS, TOUR_TYPE_LABELS, DIFFICULTY_LABELS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackageCard } from "@/components/tours/PackageCard";
import { TourCard } from "@/components/tours/TourCard";
import { Button } from "@/components/ui/Button";

type Props = {
  params: Promise<{ slug: string }>;
};

const difficultyVariant: Record<string, "primary" | "secondary" | "outline" | "success" | "warning"> = {
  easy: "success",
  moderate: "primary",
  challenging: "warning",
  extreme: "secondary",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) return { title: "Tour Not Found" };
  return {
    title: tour.name,
    description: tour.overview,
  };
}

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) notFound();

  const recommendedPkg =
    tour.packages.find((p) => p.label) ??
    tour.packages[Math.floor(tour.packages.length / 2)];

  const relatedTours = tours
    .filter((t) => t.region === tour.region && t.slug !== tour.slug)
    .slice(0, 3);

  const isBike = tour.type === "bike";

  return (
    <>
      {/* ─── Hero Banner ─── */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tour.images[0]})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 md:pb-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant={isBike ? "secondary" : "primary"}
                  size="md"
                  className="backdrop-blur-sm"
                >
                  {isBike ? "🏍️ " : "⛰️ "}
                  {TOUR_TYPE_LABELS[tour.type]}
                </Badge>
                <Badge
                  variant={
                    difficultyVariant[tour.difficulty] as
                      | "primary"
                      | "secondary"
                      | "outline"
                      | "success"
                      | "warning"
                  }
                  size="md"
                  className="backdrop-blur-sm"
                >
                  {DIFFICULTY_LABELS[tour.difficulty]}
                </Badge>
                <Badge variant="outline" size="md" className="backdrop-blur-sm text-white border-white">
                  {REGION_LABELS[tour.region]}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {tour.name}
              </h1>
              <p className="text-white/80 text-lg max-w-2xl">{tour.subtitle}</p>
            </div>
            <div className="flex-shrink-0">
              <Rating
                rating={tour.rating}
                reviewCount={tour.reviewCount}
                size="lg"
                className="text-white [&>span:first-child]:text-brand [&>span:last-child]:text-white/70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Quick Info Bar ─── */}
      <section className="px-4">
        <div className="bg-white shadow-md rounded-lg py-4 px-6 mx-auto max-w-6xl -mt-8 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 text-sm text-stone-600">
            <div className="flex items-center gap-1.5">
              <span className="text-base">🕒</span>
              <span className="font-medium text-stone-900">
                {formatDuration(tour.duration.days, tour.duration.nights)}
              </span>
            </div>
            {isBike && tour.distance !== undefined && (
              <div className="flex items-center gap-1.5">
                <span className="text-base">📍</span>
                <span className="font-medium text-stone-900">
                  {tour.distance} km
                </span>
              </div>
            )}
            {tour.maxAltitude !== undefined && (
              <div className="flex items-center gap-1.5">
                <span className="text-base">⛰️</span>
                <span className="font-medium text-stone-900">
                  {tour.maxAltitude.toLocaleString()}m
                </span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <span className="text-base">🚩</span>
              <span className="font-medium text-stone-900">
                {tour.startLocation} → {tour.endLocation}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-base">💰</span>
              <span className="text-brand font-bold">
                From {formatPrice(tour.priceRange.min)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div>
              <SectionHeading title="Overview" align="left" />
              <p className="mt-4 text-stone-600 leading-relaxed">
                {tour.overview}
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-brand flex-shrink-0 mt-0.5">✅</span>
                    <span className="text-stone-700 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <SectionHeading title="Itinerary" align="left" />
              <div className="mt-6 space-y-6 relative pl-8">
                <div className="absolute left-[1.1875rem] top-0 bottom-0 w-0.5 bg-brand/30" />
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="relative flex gap-4">
                    <div className="relative z-10 w-10 h-10 bg-brand/20 text-brand rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                      {day.day}
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="font-semibold text-stone-900">{day.title}</h4>
                      <p className="text-stone-600 mt-1">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Included / Excluded */}
            <div>
              <SectionHeading title="What&apos;s Included & Excluded" align="left" />
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-brand mb-3 flex items-center gap-2">
                    <span>✅</span> Included
                  </h4>
                  <ul className="space-y-2">
                    {tour.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                        <span className="text-brand flex-shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                    <span>✕</span> Excluded
                  </h4>
                  <ul className="space-y-2">
                    {tour.excluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                        <span className="text-red-500 flex-shrink-0 mt-0.5">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Things to Carry */}
            <div>
              <SectionHeading title="Things to Carry" align="left" />
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tour.thingsToCarry.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-stone-600">
                    <span className="flex-shrink-0 mt-0.5">🎒</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Packages Sidebar */}
          <div className="lg:col-span-1">
            <div className="md:sticky md:top-24">
              <div className="bg-white rounded-xl shadow-md p-6 border border-stone-200">
                <h3 className="text-xl font-bold text-brand">
                  Choose Your Package
                </h3>
                <p className="text-sm text-stone-500 mt-1 mb-6">
                  Select the tier that fits your style and budget. Each package
                  builds on the previous one.
                </p>
                <div className="space-y-4">
                  {tour.packages.map((pkg) => (
                    <PackageCard
                      key={pkg.id}
                      packageData={pkg}
                      isRecommended={pkg.id === recommendedPkg.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      {tour.faqs.length > 0 && (
        <section className="bg-stone-50 py-16">
          <div className="max-w-3xl mx-auto px-4">
            <SectionHeading title="Frequently Asked Questions" />
            <div className="mt-8 space-y-2">
              {tour.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="border-b border-stone-200 pb-4 mb-4 group"
                >
                  <summary className="font-semibold text-stone-900 cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-brand text-lg flex-shrink-0 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-stone-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Related Tours ─── */}
      {relatedTours.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <SectionHeading title="You Might Also Like" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedTours.map((related) => (
              <TourCard key={related.id} tour={related} />
            ))}
          </div>
        </section>
      )}

      {/* ─── CTA Section ─── */}
      <section className="bg-brand text-white py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Ready to Book?</h2>
            <p className="mt-3 text-white/60">
            Secure your spot on this unforgettable journey. Limited seats
            available for upcoming departures.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              Book Now
            </Button>
            <Button href="/tours" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand">
              View More Tours
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
