import { HOME_STATS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="relative py-12 px-4 text-center overflow-hidden">
      {/* Mountain silhouettes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 opacity-[0.06]"
          style={{
            clipPath:
              "polygon(0% 100%, 6% 55%, 12% 65%, 18% 30%, 24% 50%, 30% 20%, 38% 40%, 44% 15%, 50% 35%, 56% 22%, 62% 42%, 70% 18%, 76% 38%, 84% 25%, 92% 45%, 100% 28%, 100% 100%)",
            backgroundColor: "#1B4332",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-1/3 opacity-[0.04]"
          style={{
            clipPath:
              "polygon(0% 100%, 10% 65%, 20% 75%, 30% 50%, 40% 70%, 50% 40%, 60% 60%, 70% 45%, 80% 65%, 90% 50%, 100% 60%, 100% 100%)",
            backgroundColor: "#1B4332",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          Ready for Your Next Adventure?
        </h2>
        <p className="text-lg text-stone-500 max-w-2xl mx-auto mb-14">
          Whether you ride solo or bring your squad, we have the perfect journey waiting for you.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          {HOME_STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-brand mb-1">{stat.value}</p>
              <p className="text-sm text-stone-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/tours" variant="primary" size="lg">
            Browse All Tours
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
