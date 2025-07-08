import { useMemo } from 'react';

interface UseActiveFiltersProps {
  searchTerm: string;
  selectedRole: string;
  selectedUniverse: string;
}

interface ActiveFiltersInfo {
  hasActiveFilters: boolean;
  activeFiltersCount: number;
  activeFilters: string[];
}

export const useActiveFilters = ({
  searchTerm,
  selectedRole,
  selectedUniverse,
}: UseActiveFiltersProps): ActiveFiltersInfo => {
  const activeFiltersInfo = useMemo(() => {
    const filters: string[] = [];
    
    if (searchTerm) filters.push(`Término: "${searchTerm}"`);
    if (selectedRole) filters.push(`Rol: ${selectedRole}`);
    if (selectedUniverse) filters.push(`Universo: ${selectedUniverse}`);
    
    return {
      hasActiveFilters: filters.length > 0,
      activeFiltersCount: filters.length,
      activeFilters: filters,
    };
  }, [searchTerm, selectedRole, selectedUniverse]);

  return activeFiltersInfo;
};
