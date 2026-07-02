"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { tours } from "@/lib/data/tours";
import { formatPrice, formatDuration } from "@/lib/utils";

interface FlatDeparture {
  tourId: string;
  tourName: string;
  tourSlug: string;
  tourImage: string;
  price: number;
  durationDays: number;
  durationNights: number;
  date: string;
  spotsLeft: number;
  guaranteed: boolean;
}

function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function UpcomingDepartures() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const allDepartures: FlatDeparture[] = [];
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  tours.forEach((tour) => {
    tour.departures.forEach((dep) => {
      const depDate = new Date(dep.date);
      if (depDate >= now) {
        allDepartures.push({
          tourId: tour.id,
          tourName: tour.name,
          tourSlug: tour.slug,
          tourImage: tour.images[0],
          price: tour.priceRange.min,
          durationDays: tour.duration.days,
          durationNights: tour.duration.nights,
          date: dep.date,
          spotsLeft: dep.spotsLeft,
          guaranteed: dep.guaranteed,
        });
      }
    });
  });

  // Sort chronologically and take next 6
  allDepartures.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const upcomingList = allDepartures.slice(0, 6);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || upcomingList.length === 0) return;

    let intervalId: ReturnType<typeof setInterval>;
    let interactionTimeoutId: ReturnType<typeof setTimeout>;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (window.innerWidth >= 768 || isInteracting) return;

        const firstChild = container.firstElementChild as HTMLElement | null;
        if (!firstChild) return;

        const cardWidth = firstChild.offsetWidth;
        const gap = 24; // Matches gap-6 (6 * 4px = 24px)
        const scrollAmount = cardWidth + gap;

        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        // If we are at or near the end, smooth scroll back to the start
        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }, 4000); // 4-second delay
    };

    startAutoScroll();

    const handleInteractionStart = () => {
      setIsInteracting(true);
      if (interactionTimeoutId) clearTimeout(interactionTimeoutId);
    };

    const handleInteractionEnd = () => {
      // Wait 3 seconds of inactivity before resuming auto-scroll
      interactionTimeoutId = setTimeout(() => {
        setIsInteracting(false);
      }, 3000);
    };

    container.addEventListener("touchstart", handleInteractionStart, { passive: true });
    container.addEventListener("touchend", handleInteractionEnd, { passive: true });
    container.addEventListener("mousedown", handleInteractionStart);
    container.addEventListener("mouseup", handleInteractionEnd);

    return () => {
      clearInterval(intervalId);
      if (interactionTimeoutId) clearTimeout(interactionTimeoutId);
      container.removeEventListener("touchstart", handleInteractionStart);
      container.removeEventListener("touchend", handleInteractionEnd);
      container.removeEventListener("mousedown", handleInteractionStart);
      container.removeEventListener("mouseup", handleInteractionEnd);
    };
  }, [isInteracting, upcomingList.length]);

  if (upcomingList.length === 0) return null;

  return (
    <section className="pt-10 pb-12 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div className="text-left">
            <div className="w-12 h-1 bg-brand rounded-full mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
              Upcoming Expeditions
            </h2>
            <p className="mt-2 text-stone-500 text-base md:text-lg max-w-xl">
              Don't wait! Secure your saddle for our next scheduled mountain rides.
            </p>
          </div>
          <Link
            href="/tours"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-brand font-bold text-sm uppercase tracking-wider hover:text-brand/80 transition-colors"
          >
            All Departures &rarr;
          </Link>
        </div>

        {/* Scrollable list on mobile, grid on desktop */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto justify-start sm:justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 md:pb-0 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {upcomingList.map((dep, index) => {
            // Spots remaining config
            let spotsColor = "text-emerald-600 bg-emerald-50 border-emerald-100";
            let spotsIcon = "✅";
            let spotsText = `${dep.spotsLeft} seats available`;

            if (dep.spotsLeft === 0) {
              spotsColor = "text-red-600 bg-red-50 border-red-100";
              spotsIcon = "🚫";
              spotsText = "Fully booked";
            } else if (dep.spotsLeft <= 3) {
              spotsColor = "text-rose-600 bg-rose-50 border-rose-100 animate-pulse";
              spotsIcon = "🔥";
              spotsText = `Only ${dep.spotsLeft} spots left!`;
            } else if (dep.spotsLeft <= 6) {
              spotsColor = "text-amber-600 bg-amber-50 border-amber-100";
              spotsIcon = "⏳";
              spotsText = `${dep.spotsLeft} spots left - filling fast`;
            }

            return (
              <div
                key={`${dep.tourId}-${dep.date}-${index}`}
                className="flex-shrink-0 w-[80vw] sm:w-[42vw] md:w-auto snap-start bg-stone-50 rounded-2xl border border-stone-200 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow"
              >
                {/* Image Section */}
                <div className="relative h-44 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${dep.tourImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />

                  {/* Guaranteed tag */}
                  {dep.guaranteed && (
                    <span className="absolute top-3 left-3 bg-brand/90 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-lg border border-brand/20 shadow-md">
                      🛡️ Guaranteed Departure
                    </span>
                  )}
                  
                  {/* Spots Alert */}
                  <span className={`absolute bottom-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border backdrop-blur-sm ${spotsColor}`}>
                    {spotsIcon} {spotsText}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Date Tag */}
                    <div className="flex items-center gap-1.5 text-xs text-stone-400 font-bold uppercase tracking-wider mb-2">
                      <span>📅</span>
                      <span>{formatDate(dep.date)}</span>
                    </div>

                    {/* Tour Link */}
                    <Link href={`/tours/${dep.tourSlug}`}>
                      <h3 className="text-lg font-extrabold text-stone-900 group-hover:text-brand transition-colors line-clamp-1 leading-snug">
                        {dep.tourName}
                      </h3>
                    </Link>
                    
                    {/* Duration Info */}
                    <p className="text-xs text-stone-500 font-semibold mt-1">
                      🕒 {formatDuration(dep.durationDays, dep.durationNights)}
                    </p>
                  </div>

                  {/* Pricing and Book Button */}
                  <div className="flex items-center justify-between border-t border-stone-200/60 pt-4 mt-4">
                    <div>
                      <span className="block text-[10px] text-stone-400 uppercase tracking-widest font-bold">Starting from</span>
                      <span className="text-brand font-extrabold text-lg">{formatPrice(dep.price)}</span>
                    </div>
                    <Link
                      href={`/tours/${dep.tourSlug}`}
                      className="rounded-xl border border-brand text-brand hover:bg-brand hover:text-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300"
                    >
                      Book saddle
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
