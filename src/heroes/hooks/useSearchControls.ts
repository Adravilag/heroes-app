import { useMemo } from 'react';
import { useDebounce, useDebouncedCallback } from './useDebounce';
import { useActiveFilters } from './useActiveFilters';

interface UseSearchControlsProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedRole: string;
  setSelectedRole: (role: string) => void;
  selectedUniverse: string;
  setSelectedUniverse: (universe: string) => void;
  uniqueRoles: string[];
  uniqueUniverses: string[];
  clearFilters: () => void;
}

export const useSearchControls = ({
  searchTerm,
  setSearchTerm,
  selectedRole,
  setSelectedRole,
  selectedUniverse,
  setSelectedUniverse,
  uniqueRoles,
  uniqueUniverses,
  clearFilters,
}: UseSearchControlsProps) => {
  // Debounce search term for better performance
  const debouncedSearchTerm = useDebounce(searchTerm, { delay: 300 });

  // Debounced callback for search term updates
  const debouncedSetSearchTerm = useDebouncedCallback(setSearchTerm, 300);

  // Active filters information
  const { hasActiveFilters, activeFiltersCount, activeFilters } = useActiveFilters({
    searchTerm,
    selectedRole,
    selectedUniverse,
  });

  // Memoize dropdown options for better performance
  const roleOptions = useMemo(() => 
    uniqueRoles.map(role => ({ value: role, label: role })), 
    [uniqueRoles]
  );

  const universeOptions = useMemo(() => 
    uniqueUniverses.map(universe => ({ value: universe, label: universe })), 
    [uniqueUniverses]
  );

  // Search statistics
  const searchStats = useMemo(() => ({
    debouncedSearchTerm,
    hasActiveFilters,
    activeFiltersCount,
    activeFilters,
    isSearching: searchTerm.length > 0,
    isFiltering: selectedRole || selectedUniverse,
  }), [
    debouncedSearchTerm,
    hasActiveFilters,
    activeFiltersCount,
    activeFilters,
    searchTerm.length,
    selectedRole,
    selectedUniverse,
  ]);

  return {
    // Original props
    searchTerm,
    setSearchTerm,
    selectedRole,
    setSelectedRole,
    selectedUniverse,
    setSelectedUniverse,
    clearFilters,
    
    // Enhanced data
    roleOptions,
    universeOptions,
    searchStats,
    
    // Convenience methods
    hasActiveFilters,
    activeFiltersCount,
    debouncedSearchTerm,
    debouncedSetSearchTerm,
  };
};
