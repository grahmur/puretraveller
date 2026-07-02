import { Button } from "@/components/ui/Button";

interface TourNotFoundProps {
  onReset: () => void;
  className?: string;
}

export function TourNotFound({
  onReset,
  className = "",
}: TourNotFoundProps) {
  return (
    <div className={`text-center py-16 ${className}`}>
      <p className="text-6xl mb-4">🏍️</p>
      <h2 className="text-2xl font-bold text-stone-900 mb-2">No tours found</h2>
      <p className="text-stone-500 mb-6 max-w-md mx-auto">
        Try adjusting your filters or search terms to find the perfect adventure.
      </p>
      <Button variant="outline" onClick={onReset}>
        Clear All Filters
      </Button>
    </div>
  );
}
