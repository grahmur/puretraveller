"use client";

import { useState, useEffect, type ChangeEvent } from "react";
import type { TourFilters } from "@/lib/types";
import {
  REGION_OPTIONS,
  DIFFICULTY_OPTIONS,
  DURATION_OPTIONS,
  TRAVEL_STYLE_LABELS,
} from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface SearchFiltersProps {
  filters: TourFilters;
  onFiltersChange: (filters: TourFilters) => void;
  className?: string;
}

const defaultFilters: TourFilters = {
  type: "all",
  region: "all",
  difficulty: "all",
  style: "all",
  duration: "all",
  search: "",
};

const selectBase =
  "rounded-lg border border-stone-200 px-3 py-2 min-w-[140px] text-sm text-stone-700 focus:border-brand focus:ring-1 focus:ring-brand outline-none bg-white";

export function SearchFilters({
  filters,
  onFiltersChange,
  className = "",
}: SearchFiltersProps) {
  const [search, setSearch] = useState(filters.search ?? "");

  useEffect(() => {
    setSearch(filters.search ?? "");
  }, [filters.search]);

  function update(partial: Partial<TourFilters>) {
    onFiltersChange({ ...filters, ...partial });
  }

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleSearchBlur() {
    update({ search });
  }

  function handleSearchKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      update({ search });
    }
  }

  function handleClear() {
    onFiltersChange({ ...defaultFilters });
    setSearch("");
  }

  const hasActiveFilters =
    filters.type !== "all" ||
    filters.region !== "all" ||
    filters.difficulty !== "all" ||
    filters.style !== "all" ||
    filters.duration !== "all" ||
    (filters.search && filters.search.trim() !== "");

  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 ${className}`}>
      <div className="flex flex-wrap gap-3 items-end">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[200px]">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search tours..."
            value={search}
            onChange={handleSearchChange}
            onBlur={handleSearchBlur}
            onKeyDown={handleSearchKeyDown}
            className={`${selectBase} pl-9 w-full`}
          />
        </div>

        {/* Type Filter */}
        <select
          value={filters.type ?? "all"}
          onChange={(e) => update({ type: e.target.value as TourFilters["type"] })}
          className={selectBase}
        >
          <option value="all">All Types</option>
          <option value="bike">Bike Tour</option>
          <option value="regular">Regular Tour</option>
        </select>

        {/* Region Filter */}
        <select
          value={filters.region ?? "all"}
          onChange={(e) => update({ region: e.target.value as TourFilters["region"] })}
          className={selectBase}
        >
          <option value="all">All Regions</option>
          {REGION_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        {/* Difficulty Filter */}
        <select
          value={filters.difficulty ?? "all"}
          onChange={(e) => update({ difficulty: e.target.value as TourFilters["difficulty"] })}
          className={selectBase}
        >
          <option value="all">All Difficulties</option>
          {DIFFICULTY_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        {/* Style Filter */}
        <select
          value={filters.style ?? "all"}
          onChange={(e) => update({ style: e.target.value as TourFilters["style"] })}
          className={selectBase}
        >
          <option value="all">All Styles</option>
          {Object.entries(TRAVEL_STYLE_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        {/* Duration Filter */}
        <select
          value={filters.duration ?? "all"}
          onChange={(e) => update({ duration: e.target.value })}
          className={selectBase}
        >
          <option value="all">All Durations</option>
          {DURATION_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button variant="outline" size="sm" onClick={handleClear}>
            Clear Filters
          </Button>
        )}
      </div>
    </div>
  );
}
