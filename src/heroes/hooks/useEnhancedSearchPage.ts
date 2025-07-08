import { useEffect, useCallback, useState } from 'react';
import useHeroSearch from './useHeroSearch';
import { useAllHeroes } from './useAllHeroes';
import { useAllHeroesAsync } from './useAllHeroesAsync';
import { useHeroStats } from './useHeroStats';
import { useSearchPageHeader } from './useSearchPageHeader';
import { useHeroNavigation } from './useHeroNavigation';
import { useSearchControls } from './useSearchControls';
import { useSearchGrid } from './useSearchGrid';
import { usePersistedSearchFilters } from './usePersistedSearchFilters';
import { useDebounce } from './useDebounce';
import type { TranslatedHero } from './useTranslatedHeroes';

interface UseEnhancedSearchPageOptions {
  persistFilters?: boolean;
  enablePagination?: boolean;
  enableInfiniteScroll?: boolean;
  enableSorting?: boolean;
  enableKeyboardNavigation?: boolean;
  enableFavorites?: boolean;
  enableAsyncLoading?: boolean;
  pageSize?: number;
  debounceDelay?: number;
}

export const useEnhancedSearchPage = (options: UseEnhancedSearchPageOptions = {}) => {
  const {
    persistFilters = true,
    enablePagination = true,
    enableInfiniteScroll = false,
    enableSorting = true,
    enableKeyboardNavigation = true,
    enableFavorites = true,
    enableAsyncLoading = false,
    pageSize = 12,
    debounceDelay = 300,
  } = options;

  // Selected hero state
  const [selectedHero, setSelectedHero] = useState<TranslatedHero | null>(null);

  // Always call both hooks, use the appropriate one based on config
  const persistedSearch = usePersistedSearchFilters();
  const regularSearch = useHeroSearch();
  const searchHook = persistFilters ? persistedSearch : regularSearch;

  const {
    searchTerm,
    setSearchTerm,
    selectedRole,
    setSelectedRole,
    selectedUniverse,
    setSelectedUniverse,
    clearFilters,
  } = searchHook;

  // Get filtered heroes from the search hook
  const filteredHeroes = 'filteredHeroes' in searchHook ? searchHook.filteredHeroes : [];

  // Debounced search term
  const debouncedSearchTerm = useDebounce(searchTerm, { delay: debounceDelay });

  // Always call both hooks, use the appropriate one based on config
  const asyncHeroes = useAllHeroesAsync();
  const syncHeroes = useAllHeroes();
  const heroesHook = enableAsyncLoading ? asyncHeroes : syncHeroes;
  const { allHeroes, uniqueUniverses, uniqueRoles } = heroesHook;

  // Hero statistics
  const stats = useHeroStats(
    filteredHeroes,
    allHeroes,
    debouncedSearchTerm,
    selectedRole,
    selectedUniverse
  );

  // Header information
  const headerInfo = useSearchPageHeader({
    filteredHeroes,
    allHeroes,
    searchTerm: debouncedSearchTerm,
    selectedRole,
    selectedUniverse,
  });

  // Navigation actions
  const { handleModalClose, handleViewDetails, handleHeroSelect } = useHeroNavigation({
    selectedHero,
    setSelectedHero,
  });

  // Enhanced search controls
  const searchControlsData = useSearchControls({
    searchTerm,
    setSearchTerm,
    selectedRole,
    setSelectedRole,
    selectedUniverse,
    setSelectedUniverse,
    uniqueRoles,
    uniqueUniverses,
    clearFilters,
  });

  // Enhanced search grid
  const searchGridData = useSearchGrid({
    filteredHeroes,
    onHeroSelect: handleHeroSelect,
    searchTerm: debouncedSearchTerm,
    selectedRole,
    selectedUniverse,
    onClearFilters: clearFilters,
  }, {
    pageSize,
    enablePagination,
    enableInfiniteScroll,
    enableSorting,
    enableKeyboardNavigation,
    enableFavorites,
  });

  // Modal props
  const heroModalProps = {
    selectedHero,
    onClose: handleModalClose,
    onViewDetails: handleViewDetails,
  };

  // Page-level keyboard shortcuts
  const handleGlobalKeyDown = useCallback((event: KeyboardEvent) => {
    // Focus search input with Ctrl+F or Cmd+F
    if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
      event.preventDefault();
      const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
      if (searchInput) {
        searchInput.focus();
      }
    }
    
    // Clear filters with Ctrl+K or Cmd+K
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      clearFilters();
    }
  }, [clearFilters]);

  // Setup global keyboard shortcuts
  useEffect(() => {
    if (enableKeyboardNavigation) {
      document.addEventListener('keydown', handleGlobalKeyDown);
      return () => document.removeEventListener('keydown', handleGlobalKeyDown);
    }
  }, [enableKeyboardNavigation, handleGlobalKeyDown]);

  // Auto-focus search input on mount
  useEffect(() => {
    const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
    if (searchInput) {
      searchInput.focus();
    }
  }, []);

  return {
    // Header
    headerInfo,
    
    // Search controls
    searchControls: {
      ...searchControlsData,
      debouncedSearchTerm,
    },
    
    // Search grid
    searchGrid: searchGridData,
    
    // Hero modal
    heroModal: heroModalProps,
    
    // Global stats
    stats,
    
    // Global actions
    clearFilters,
    
    // Configuration
    config: {
      persistFilters,
      enablePagination,
      enableInfiniteScroll,
      enableSorting,
      enableKeyboardNavigation,
      enableFavorites,
      enableAsyncLoading,
      pageSize,
      debounceDelay,
    },
  };
};
