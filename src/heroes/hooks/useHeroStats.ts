import { useMemo } from "react";
import type { Hero } from "../types/Hero";

interface HeroStats {
  filtered: number;
  total: number;
  hasActiveFilters: boolean;
}

export const useHeroStats = (
  filteredHeroes: Hero[],
  allHeroes: Hero[],
  searchTerm: string,
  selectedRole: string,
  selectedUniverse: string
): HeroStats => {
  return useMemo(() => ({
    filtered: filteredHeroes.length,
    total: allHeroes.length,
    hasActiveFilters: !!(searchTerm || selectedRole || selectedUniverse)
  }), [filteredHeroes.length, allHeroes.length, searchTerm, selectedRole, selectedUniverse]);
};
