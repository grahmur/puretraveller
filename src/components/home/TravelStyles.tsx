import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface StyleCard {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const styles: StyleCard[] = [
  {
    icon: "🏔️",
    title: "Raid Adventure",
    description:
      "For thrill-seekers. Extreme routes, high passes, and raw Himalayan terrain.",
    gradient: "from-red-900/80 to-orange-900/60",
  },
  {
    icon: "🌄",
    title: "Discovery",
    description:
      "Immersive journeys blending scenic rides with cultural experiences.",
    gradient: "from-blue-900/80 to-cyan-900/60",
  },
  {
    icon: "🏍️",
    title: "Liberty",
    description:
      "Ride at your own pace. Self-guided tours with pre-booked stays and routes.",
    gradient: "from-emerald-900/80 to-teal-900/60",
  },
  {
    icon: "🛠️",
    title: "Training",
    description:
      "Learn off-roading skills and mountain riding techniques from experts.",
    gradient: "from-navy/80 to-brand/60",
  },
];

export function TravelStyles() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <SectionHeading
        title="Travel Styles"
        subtitle="Find your perfect adventure by style"
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {styles.map((style) => (
          <Link
            key={style.title}
            href="/tours"
            className={`rounded-2xl overflow-hidden p-8 min-h-[240px] bg-gradient-to-br ${style.gradient} text-white group cursor-pointer hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-end`}
          >
            <span className="text-4xl mb-3" role="img" aria-hidden="true">
              {style.icon}
            </span>
            <h3 className="text-xl font-bold mb-2">{style.title}</h3>
            <p className="text-sm text-white/80 mb-4 leading-relaxed">
              {style.description}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-white/90 group-hover:text-white transition-colors">
              Explore &rarr;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
