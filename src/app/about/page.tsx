import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { team } from "@/lib/data/team";
import { HOME_STATS, WHY_CHOOSE_US } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Pure Traveller — a team of passionate riders leading unforgettable adventures across North India.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy via-brand to-brand/80 pt-36 pb-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          About Pure Traveller
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg">
          Born from a passion for the mountains and the open road, we create
          journeys that stay with you forever.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <SectionHeading title="Our Story" align="left" />
        <div className="mt-8 space-y-6 text-stone-700 leading-relaxed">
          <p>
            Pure Traveller was founded by a mountain soul who traded the office
            for the open road. After years of riding through the Himalayas —
            from the high passes of Ladakh to the hidden valleys of Spiti and
            the lush meadows of Kashmir — he knew the mountains had stories to
            share that no brochure could capture.
          </p>
          <p>
            What started as weekend rides with friends slowly grew into a
            community of like-minded adventurers. People began asking to join,
            and before long, Pure Traveller was born — not as a business, but as
            a way to share the thrill of the ride, the beauty of the
            landscapes, and the warmth of mountain hospitality.
          </p>
          <p>
            Today, we run carefully crafted motorcycle tours and trekking
            expeditions across North India — Himachal, Ladakh, Uttarakhand,
            Kashmir, and beyond. Every route is hand-picked and personally
            scouted. Whether you ride with us or trek alongside, you become part
            of a family that values safety, camaraderie, and the pure joy of
            travel.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-brand/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Why Ride With Us" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Stats */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="By the Numbers" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {HOME_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-brand">
                  {stat.value}
                </div>
                <div className="mt-2 text-stone-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Meet the Team" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl p-8 text-center shadow-sm"
              >
                <div className="w-24 h-24 bg-brand text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  {member.avatarInitials}
                </div>
                <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                <p className="text-brand/80 font-medium mt-1">
                  {member.role}
                </p>
                <p className="text-stone-600 mt-3 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand text-white py-16 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Want to Join Us?</h2>
        <p className="mt-4 text-white/80 max-w-xl mx-auto">
          Browse our curated tours and find your next adventure in the majestic
          Himalayas.
        </p>
        <div className="mt-8">
          <Button href="/tours" variant="secondary" size="lg">
            View Tours
          </Button>
        </div>
      </section>
    </>
  );
}
