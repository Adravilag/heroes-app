import { useMemo } from 'react';
import type { TranslatedHero } from './useTranslatedHeroes';

interface UseSearchPageCompositionProps {
  // Search props
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedRole: string;
  setSelectedRole: (role: string) => void;
  selectedUniverse: string;
  setSelectedUniverse: (universe: string) => void;
  clearFilters: () => void;
  
  // Data props
  filteredHeroes: TranslatedHero[];
  uniqueRoles: string[];
  uniqueUniverses: string[];
  
  // Navigation props
  handleHeroSelect: (hero: TranslatedHero) => void;
  handleModalClose: () => void;
  handleViewDetails: () => void;
  
  // State props
  selectedHero: TranslatedHero | null;
  hasActiveFilters: boolean;
}

interface SearchPageComposition {
  searchControlsProps: {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedRole: string;
    setSelectedRole: (role: string) => void;
    selectedUniverse: string;
    setSelectedUniverse: (universe: string) => void;
    uniqueRoles: string[];
    uniqueUniverses: string[];
    onClearFilters: () => void;
    hasActiveFilters: boolean;
  };
  
  searchGridProps: {
    filteredHeroes: TranslatedHero[];
    onHeroSelect: (hero: TranslatedHero) => void;
    searchTerm: string;
    selectedRole: string;
    selectedUniverse: string;
    onClearFilters: () => void;
  };
  
  heroModalProps: {
    selectedHero: TranslatedHero | null;
    onClose: () => void;
    onViewDetails: () => void;
  };
}

export const useSearchPageComposition = ({
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
  hasActiveFilters,
}: UseSearchPageCompositionProps): SearchPageComposition => {
  
  const searchControlsProps = useMemo(() => ({
    searchTerm,
    setSearchTerm,
    selectedRole,
    setSelectedRole,
    selectedUniverse,
    setSelectedUniverse,
    uniqueRoles,
    uniqueUniverses,
    onClearFilters: clearFilters,
    hasActiveFilters,
  }), [
    searchTerm,
    setSearchTerm,
    selectedRole,
    setSelectedRole,
    selectedUniverse,
    setSelectedUniverse,
    uniqueRoles,
    uniqueUniverses,
    clearFilters,
    hasActiveFilters,
  ]);

  const searchGridProps = useMemo(() => ({
    filteredHeroes,
    onHeroSelect: handleHeroSelect,
    searchTerm,
    selectedRole,
    selectedUniverse,
    onClearFilters: clearFilters,
  }), [filteredHeroes, handleHeroSelect, searchTerm, selectedRole, selectedUniverse, clearFilters]);

  const heroModalProps = useMemo(() => ({
    selectedHero,
    onClose: handleModalClose,
    onViewDetails: handleViewDetails,
  }), [selectedHero, handleModalClose, handleViewDetails]);

  return {
    searchControlsProps,
    searchGridProps,
    heroModalProps,
  };
};
