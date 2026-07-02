import { HeroCarousel } from "@/components/home/HeroCarousel";
import { FeaturedTours } from "@/components/home/FeaturedTours";
import { TravelStyles } from "@/components/home/TravelStyles";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <FeaturedTours />
      <TravelStyles />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </main>
  );
}
