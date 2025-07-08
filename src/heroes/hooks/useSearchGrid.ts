import { useMemo, useState, useCallback } from 'react';
import { useSorting } from './useSorting';
import { usePagination } from './usePagination';
import { useKeyboardNavigation } from './useKeyboardNavigation';
import { useFavoriteHeroes } from './useFavoriteHeroes';
import { useInfiniteScroll } from './useInfiniteScroll';
import type { TranslatedHero } from './useTranslatedHeroes';

interface UseSearchGridProps {
  filteredHeroes: TranslatedHero[];
  onHeroSelect: (hero: TranslatedHero) => void;
  searchTerm: string;
  selectedRole: string;
  selectedUniverse: string;
  onClearFilters: () => void;
}

interface UseSearchGridOptions {
  pageSize?: number;
  enablePagination?: boolean;
  enableInfiniteScroll?: boolean;
  enableSorting?: boolean;
  enableKeyboardNavigation?: boolean;
  enableFavorites?: boolean;
}

export const useSearchGrid = ({
  filteredHeroes,
  onHeroSelect,
  searchTerm,
  selectedRole,
  selectedUniverse,
  onClearFilters,
}: UseSearchGridProps, options: UseSearchGridOptions = {}) => {
  const {
    pageSize = 12,
    enablePagination = true,
    enableInfiniteScroll = false,
    enableSorting = true,
    enableKeyboardNavigation = true,
    enableFavorites = true,
  } = options;

  // Infinite scroll state
  const [loadedItemsCount, setLoadedItemsCount] = useState(pageSize);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Sorting functionality
  const { sortedData, sortConfig, toggleSort, resetSort } = useSorting({
    data: filteredHeroes,
    defaultSortKey: 'name',
    defaultSortDirection: 'asc',
  });

  // Load more items for infinite scroll
  const loadMoreItems = useCallback(async () => {
    if (isLoadingMore) return;
    
    setIsLoadingMore(true);
    
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setLoadedItemsCount(prev => prev + pageSize);
    setIsLoadingMore(false);
  }, [isLoadingMore, pageSize]);

  // Infinite scroll hook
  const infiniteScrollRef = useInfiniteScroll({
    hasMore: enableInfiniteScroll && loadedItemsCount < (enableSorting ? sortedData.length : filteredHeroes.length),
    isLoading: isLoadingMore,
    onLoadMore: loadMoreItems,
    threshold: 1.0,
    rootMargin: '100px',
  });

  // Pagination functionality
  const pagination = usePagination({
    totalItems: enableSorting ? sortedData.length : filteredHeroes.length,
    pageSize,
    initialPage: 1,
  });

  // Get current page data
  const currentPageHeroes = useMemo(() => {
    const dataToUse = enableSorting ? sortedData : filteredHeroes;
    
    if (enableInfiniteScroll) {
      // For infinite scroll, show items up to loadedItemsCount
      return dataToUse.slice(0, loadedItemsCount);
    }
    
    if (!enablePagination) {
      return dataToUse;
    }
    
    // For pagination, show current page items
    return dataToUse.slice(pagination.startIndex, pagination.endIndex);
  }, [
    enableSorting,
    sortedData,
    filteredHeroes,
    enableInfiniteScroll,
    loadedItemsCount,
    enablePagination,
    pagination.startIndex,
    pagination.endIndex,
  ]);

  // Reset loaded items count when filters change
  const resetInfiniteScroll = useCallback(() => {
    setLoadedItemsCount(pageSize);
    setIsLoadingMore(false);
  }, [pageSize]);

  // Reset infinite scroll when filtered heroes change
  useMemo(() => {
    if (enableInfiniteScroll) {
      resetInfiniteScroll();
    }
  }, [filteredHeroes.length, enableInfiniteScroll, resetInfiniteScroll]);

  // Keyboard navigation
  const keyboardNav = useKeyboardNavigation({
    enabled: enableKeyboardNavigation,
    itemsCount: currentPageHeroes.length,
    onSelect: (index) => {
      if (currentPageHeroes[index]) {
        onHeroSelect(currentPageHeroes[index]);
      }
    },
    onEscape: () => {}, // Will be set after destructuring
  });

  const { selectedIndex, setSelectedIndex, resetSelection } = keyboardNav;

  // Favorites functionality
  const favoriteHeroes = useFavoriteHeroes();

  // Grid statistics
  const gridStats = useMemo(() => ({
    totalHeroes: filteredHeroes.length,
    currentPageHeroes: currentPageHeroes.length,
    hasResults: filteredHeroes.length > 0,
    isEmpty: filteredHeroes.length === 0,
    isFiltered: Boolean(searchTerm || selectedRole || selectedUniverse),
  }), [filteredHeroes.length, currentPageHeroes.length, searchTerm, selectedRole, selectedUniverse]);

  // Helper functions
  const getHeroProps = useMemo(() => 
    (hero: TranslatedHero, index: number) => ({
      hero,
      isSelected: selectedIndex === index,
      isFavorite: enableFavorites ? favoriteHeroes.isFavorite(hero.id) : false,
      onClick: () => onHeroSelect(hero),
      onToggleFavorite: enableFavorites ? () => favoriteHeroes.toggleFavorite(hero) : undefined,
    }),
    [selectedIndex, enableFavorites, favoriteHeroes, onHeroSelect]
  );

  return {
    // Data
    currentPageHeroes,
    gridStats,
    
    // Sorting
    sortConfig: enableSorting ? sortConfig : null,
    toggleSort: enableSorting ? toggleSort : undefined,
    resetSort: enableSorting ? resetSort : undefined,
    
    // Pagination
    pagination: enablePagination ? pagination : null,
    
    // Infinite scroll
    infiniteScroll: enableInfiniteScroll ? {
      ref: infiniteScrollRef.ref,
      isLoading: isLoadingMore,
      hasMore: loadedItemsCount < (enableSorting ? sortedData.length : filteredHeroes.length),
      loadMore: loadMoreItems,
      reset: resetInfiniteScroll,
    } : null,
    
    // Keyboard navigation
    selectedIndex: enableKeyboardNavigation ? selectedIndex : -1,
    setSelectedIndex: enableKeyboardNavigation ? setSelectedIndex : undefined,
    resetSelection: enableKeyboardNavigation ? resetSelection : undefined,
    
    // Favorites
    favoriteHeroes: enableFavorites ? favoriteHeroes : null,
    
    // Helper functions
    getHeroProps,
    
    // Actions
    onClearFilters,
  };
};
