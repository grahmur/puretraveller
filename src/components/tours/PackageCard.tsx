import type { TourPackage } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface PackageCardProps {
  packageData: TourPackage;
  isRecommended: boolean;
  className?: string;
}

export function PackageCard({
  packageData,
  isRecommended,
  className = "",
}: PackageCardProps) {
  const { name, description, price, inclusions, label } = packageData;

  const border = isRecommended
    ? "border-brand shadow-md"
    : "border-stone-200";

  return (
    <div className={`bg-white rounded-xl border-2 transition-all ${border} ${className}`}>
      {/* Recommended Banner */}
      {isRecommended && (
        <div className="bg-brand text-white font-semibold text-sm text-center py-1.5 rounded-t-lg">
          {label ?? "Most Popular"}
        </div>
      )}

      <div className="p-6">
        {/* Tier Name */}
        <h3 className="text-lg font-bold text-stone-900">{name}</h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-stone-500 mt-1 mb-4">{description}</p>
        )}

        {/* Price */}
        <div className="mb-4">
          <p className="text-3xl font-bold text-brand">{formatPrice(price)}</p>
          <p className="text-sm text-stone-400">/ person</p>
        </div>

        {/* Divider */}
        <hr className="border-stone-200 mb-4" />

        {/* What's Included */}
        <p className="font-semibold text-sm text-stone-700 mb-2">
          What&apos;s Included
        </p>
        <ul className="space-y-2 mb-6">
          {inclusions.map((inclusion) => (
            <li key={inclusion.label} className="flex items-start gap-2 text-sm text-stone-600">
              <span className="mt-0.5 shrink-0">
                {inclusion.icon ? inclusion.icon : "✅"}
              </span>
              <span>{inclusion.label}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          variant={isRecommended ? "primary" : "outline"}
          size="md"
          className="w-full"
        >
          Book This Package
        </Button>
      </div>
    </div>
  );
}
