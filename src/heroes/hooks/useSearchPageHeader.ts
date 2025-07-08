import { useMemo } from 'react';
import type { Hero } from '../types/Hero';

interface UseSearchPageHeaderProps {
  filteredHeroes: Hero[];
  allHeroes: Hero[];
  searchTerm: string;
  selectedRole: string;
  selectedUniverse: string;
}

interface SearchPageHeaderInfo {
  title: string;
  subtitle: string;
  stats: {
    total: number;
    filtered: number;
    hasActiveFilters: boolean;
  };
}

export const useSearchPageHeader = ({
  filteredHeroes,
  allHeroes,
  searchTerm,
  selectedRole,
  selectedUniverse,
}: UseSearchPageHeaderProps): SearchPageHeaderInfo => {
  const stats = useMemo(() => {
    const hasActiveFilters = Boolean(searchTerm || selectedRole || selectedUniverse);
    
    return {
      total: allHeroes.length,
      filtered: filteredHeroes.length,
      hasActiveFilters,
    };
  }, [filteredHeroes.length, allHeroes.length, searchTerm, selectedRole, selectedUniverse]);

  const headerInfo = useMemo(() => ({
    title: 'Buscar Héroes',
    subtitle: `Explora y encuentra héroes de Heroes of the Storm por nombre, rol o universo.`,
    stats,
  }), [stats]);

  return headerInfo;
};
