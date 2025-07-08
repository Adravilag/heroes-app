import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

interface SearchFilters {
  searchTerm: string;
  selectedRole: string;
  selectedUniverse: string;
}

const DEFAULT_FILTERS: SearchFilters = {
  searchTerm: '',
  selectedRole: '',
  selectedUniverse: '',
};

export const usePersistedSearchFilters = () => {
  const [filters, setFilters] = useLocalStorage({
    key: 'heroes-search-filters',
    initialValue: DEFAULT_FILTERS,
  });

  const updateSearchTerm = useCallback((searchTerm: string) => {
    setFilters(prev => ({ ...prev, searchTerm }));
  }, [setFilters]);

  const updateSelectedRole = useCallback((selectedRole: string) => {
    setFilters(prev => ({ ...prev, selectedRole }));
  }, [setFilters]);

  const updateSelectedUniverse = useCallback((selectedUniverse: string) => {
    setFilters(prev => ({ ...prev, selectedUniverse }));
  }, [setFilters]);

  const clearFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, [setFilters]);

  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, [setFilters]);

  return {
    searchTerm: filters.searchTerm,
    selectedRole: filters.selectedRole,
    selectedUniverse: filters.selectedUniverse,
    setSearchTerm: updateSearchTerm,
    setSelectedRole: updateSelectedRole,
    setSelectedUniverse: updateSelectedUniverse,
    clearFilters,
    resetFilters,
  };
};
