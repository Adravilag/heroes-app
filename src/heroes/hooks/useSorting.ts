import { useState, useCallback, useMemo } from 'react';

type SortDirection = 'asc' | 'desc';

interface SortConfig<T> {
  key: keyof T;
  direction: SortDirection;
}

interface UseSortingOptions<T> {
  data: T[];
  defaultSortKey?: keyof T;
  defaultSortDirection?: SortDirection;
}

interface SortingState<T> {
  sortedData: T[];
  sortConfig: SortConfig<T> | null;
}

interface SortingActions<T> {
  sort: (key: keyof T, direction?: SortDirection) => void;
  toggleSort: (key: keyof T) => void;
  resetSort: () => void;
}

export const useSorting = <T>({
  data,
  defaultSortKey,
  defaultSortDirection = 'asc',
}: UseSortingOptions<T>): SortingState<T> & SortingActions<T> => {
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(
    defaultSortKey 
      ? { key: defaultSortKey, direction: defaultSortDirection }
      : null
  );

  const sortedData = useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      // Handle null/undefined values
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;

      // Handle string comparison
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        const comparison = aValue.localeCompare(bValue);
        return sortConfig.direction === 'asc' ? comparison : -comparison;
      }

      // Handle number comparison
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        const comparison = aValue - bValue;
        return sortConfig.direction === 'asc' ? comparison : -comparison;
      }

      // Handle date comparison
      if (aValue instanceof Date && bValue instanceof Date) {
        const comparison = aValue.getTime() - bValue.getTime();
        return sortConfig.direction === 'asc' ? comparison : -comparison;
      }

      // Handle boolean comparison
      if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
        const comparison = aValue === bValue ? 0 : aValue ? 1 : -1;
        return sortConfig.direction === 'asc' ? comparison : -comparison;
      }

      // Fallback: convert to string and compare
      const aStr = String(aValue);
      const bStr = String(bValue);
      const comparison = aStr.localeCompare(bStr);
      return sortConfig.direction === 'asc' ? comparison : -comparison;
    });
  }, [data, sortConfig]);

  const sort = useCallback((key: keyof T, direction: SortDirection = 'asc') => {
    setSortConfig({ key, direction });
  }, []);

  const toggleSort = useCallback((key: keyof T) => {
    setSortConfig(prev => {
      if (!prev || prev.key !== key) {
        return { key, direction: 'asc' };
      }
      
      if (prev.direction === 'asc') {
        return { key, direction: 'desc' };
      }
      
      // If already desc, remove sorting
      return null;
    });
  }, []);

  const resetSort = useCallback(() => {
    setSortConfig(null);
  }, []);

  return {
    sortedData,
    sortConfig,
    sort,
    toggleSort,
    resetSort,
  };
};
