import { HeroCarousel } from "@/components/home/HeroCarousel";
import { TrendingRegions } from "@/components/home/TrendingRegions";
import { UpcomingDepartures } from "@/components/home/UpcomingDepartures";
import { FeaturedTours } from "@/components/home/FeaturedTours";
import { TravelStyles } from "@/components/home/TravelStyles";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <TrendingRegions />
      <UpcomingDepartures />
      <TravelStyles />
      <FeaturedTours />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
