"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { tours } from "@/lib/data/tours";
import { Button } from "@/components/ui/Button";
import { REGION_LABELS, TOUR_TYPE_LABELS } from "@/lib/constants";

const featuredTours = tours.filter((t) => t.featured).slice(0, 4);

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTour = featuredTours[activeIndex];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % featuredTours.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[55vh] md:min-h-[80vh] flex items-end overflow-hidden bg-zinc-950">
      {/* Background Images */}
      {featuredTours.map((tour, index) => (
        <div
          key={tour.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${tour.images[0]})` }}
          aria-hidden={index !== activeIndex}
        />
      ))}

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/40"
        aria-hidden="true"
      />

      {/* Main Content — bottom right */}
      <div className="relative z-10 w-full ml-auto max-w-5xl px-4 pr-8 md:pr-20 pb-10 md:pb-16 flex justify-end">
        <div className="max-w-xl text-right max-md:text-left max-md:max-w-sm">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-white/80 mb-2 md:mb-3">
            {activeTour && TOUR_TYPE_LABELS[activeTour.type]} &mdash; {activeTour && REGION_LABELS[activeTour.region]}
          </span>

          <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-2 md:mb-3 md:whitespace-nowrap">
            {activeTour?.name}
          </h1>

          <p className="text-sm md:text-base text-white/70 mb-6 md:mb-8 max-md:max-w-xs max-w-md ml-auto">
            {activeTour?.subtitle}
          </p>

          <div className="flex flex-wrap gap-3 justify-end max-md:justify-start">
            <Button href="/tours" variant="secondary" size="sm">
              Explore Tours
            </Button>
            <Link
              href={`/tours/${activeTour?.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-white hover:text-brand"
            >
              View This Tour &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {featuredTours.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-brand w-6 h-2.5"
                : "bg-white/50 hover:bg-white/70 w-2.5 h-2.5"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
