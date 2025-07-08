import { useCallback, useMemo } from 'react';
import { useKeyboardNavigation } from './useKeyboardNavigation';
import { useFavoriteHeroes } from './useFavoriteHeroes';
import type { Hero } from '../types/Hero';

interface UseHeroModalProps {
  selectedHero: Hero | null;
  onClose: () => void;
  onViewDetails: () => void;
}

interface UseHeroModalOptions {
  enableKeyboardNavigation?: boolean;
  enableFavorites?: boolean;
  autoFocus?: boolean;
}

export const useHeroModal = ({
  selectedHero,
  onClose,
  onViewDetails,
}: UseHeroModalProps, options: UseHeroModalOptions = {}) => {
  const {
    enableKeyboardNavigation = true,
    enableFavorites = true,
    autoFocus = true,
  } = options;

  // Favorites functionality
  const favoriteHeroes = useFavoriteHeroes();

  // Modal state
  const isOpen = useMemo(() => selectedHero !== null, [selectedHero]);

  // Keyboard navigation for modal
  const { resetSelection } = useKeyboardNavigation({
    enabled: enableKeyboardNavigation && isOpen,
    itemsCount: 3, // Close, View Details, Toggle Favorite
    onSelect: (index) => {
      switch (index) {
        case 0:
          onClose();
          break;
        case 1:
          onViewDetails();
          break;
        case 2:
          if (selectedHero && enableFavorites) {
            favoriteHeroes.toggleFavorite(selectedHero);
          }
          break;
      }
    },
    onEscape: onClose,
  });

  // Modal actions
  const handleClose = useCallback(() => {
    resetSelection();
    onClose();
  }, [resetSelection, onClose]);

  const handleViewDetails = useCallback(() => {
    resetSelection();
    onViewDetails();
  }, [resetSelection, onViewDetails]);

  const handleToggleFavorite = useCallback(() => {
    if (selectedHero && enableFavorites) {
      favoriteHeroes.toggleFavorite(selectedHero);
    }
  }, [selectedHero, enableFavorites, favoriteHeroes]);

  const handleBackdropClick = useCallback((event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  // Modal data
  const modalData = useMemo(() => {
    if (!selectedHero) return null;

    return {
      hero: selectedHero,
      isFavorite: enableFavorites ? favoriteHeroes.isFavorite(selectedHero.id) : false,
      title: selectedHero.name,
      subtitle: `${selectedHero.role} - ${selectedHero.universe}`,
      description: selectedHero.description,
      image: selectedHero.image,
      secondaryImages: selectedHero.secondImage || [],
      stats: {
        difficulty: selectedHero.difficulty,
        damageType: selectedHero.damageType,
        rangeType: selectedHero.rangeType,
        healthType: selectedHero.healthType,
        mobility: selectedHero.mobility,
      },
    };
  }, [selectedHero, enableFavorites, favoriteHeroes]);

  // Modal props for component
  const modalProps = useMemo(() => ({
    isOpen,
    onClose: handleClose,
    onBackdropClick: handleBackdropClick,
    autoFocus,
  }), [isOpen, handleClose, handleBackdropClick, autoFocus]);

  // Action props for modal buttons
  const actionProps = useMemo(() => ({
    onViewDetails: handleViewDetails,
    onToggleFavorite: enableFavorites ? handleToggleFavorite : undefined,
    onClose: handleClose,
  }), [handleViewDetails, enableFavorites, handleToggleFavorite, handleClose]);

  return {
    // State
    isOpen,
    modalData,
    
    // Props
    modalProps,
    actionProps,
    
    // Individual actions
    handleClose,
    handleViewDetails,
    handleToggleFavorite,
    handleBackdropClick,
    
    // Favorites
    favoriteHeroes: enableFavorites ? favoriteHeroes : null,
  };
};
