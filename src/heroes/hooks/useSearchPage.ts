import { useState } from 'react';
import useHeroSearch from './useHeroSearch';
import { useAllHeroes } from './useAllHeroes';
import { useHeroStats } from './useHeroStats';
import { useSearchPageHeader } from './useSearchPageHeader';
import { useHeroNavigation } from './useHeroNavigation';
import { useSearchPageComposition } from './useSearchPageComposition';
import type { TranslatedHero } from './useTranslatedHeroes';

export const useSearchPage = () => {
  // Selected hero state
  const [selectedHero, setSelectedHero] = useState<TranslatedHero | null>(null);

  // Core search functionality
  const {
    searchTerm,
    setSearchTerm,
    selectedRole,
    setSelectedRole,
    selectedUniverse,
    setSelectedUniverse,
    filteredHeroes,
    clearFilters,
  } = useHeroSearch();

  // All heroes data
  const { allHeroes, uniqueUniverses, uniqueRoles } = useAllHeroes();

  // Hero statistics
  const stats = useHeroStats(
    filteredHeroes,
    allHeroes,
    searchTerm,
    selectedRole,
    selectedUniverse
  );

  // Header information
  const headerInfo = useSearchPageHeader({
    filteredHeroes,
    allHeroes,
    searchTerm,
    selectedRole,
    selectedUniverse,
  });

  // Navigation actions
  const { handleModalClose, handleViewDetails, handleHeroSelect } = useHeroNavigation({
    selectedHero,
    setSelectedHero,
  });

  // Compose all props
  const { searchControlsProps, searchGridProps, heroModalProps } = useSearchPageComposition({
    searchTerm,
    setSearchTerm,
    selectedRole,
    setSelectedRole,
    selectedUniverse,
    setSelectedUniverse,
    clearFilters,
    filteredHeroes,
    uniqueRoles,
    uniqueUniverses,
    handleHeroSelect,
    handleModalClose,
    handleViewDetails,
    selectedHero,
    hasActiveFilters: stats.hasActiveFilters,
  });

  return {
    headerInfo,
    searchControlsProps,
    searchGridProps,
    heroModalProps,
    stats,
  };
};
