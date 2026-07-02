import { WHY_CHOOSE_US } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Why Ride With Us?"
          subtitle="What makes Pure Traveller your perfect travel partner"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="font-semibold text-stone-900 mb-2">{item.title}</h3>
              <p className="text-stone-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
