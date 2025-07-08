import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import type { TranslatedHero } from './useTranslatedHeroes';

interface UseHeroNavigationProps {
  selectedHero: TranslatedHero | null;
  setSelectedHero: (hero: TranslatedHero | null) => void;
}

interface HeroNavigationActions {
  handleModalClose: () => void;
  handleViewDetails: () => void;
  handleHeroSelect: (hero: TranslatedHero) => void;
}

export const useHeroNavigation = ({
  selectedHero,
  setSelectedHero,
}: UseHeroNavigationProps): HeroNavigationActions => {
  const navigate = useNavigate();

  const handleModalClose = useCallback(() => {
    setSelectedHero(null);
  }, [setSelectedHero]);

  const handleViewDetails = useCallback(() => {
    if (selectedHero) {
      setSelectedHero(null);
      navigate(`/hero/${selectedHero.id}`);
    }
  }, [selectedHero, navigate, setSelectedHero]);

  const handleHeroSelect = useCallback((hero: TranslatedHero) => {
    setSelectedHero(hero);
  }, [setSelectedHero]);

  return {
    handleModalClose,
    handleViewDetails,
    handleHeroSelect,
  };
};
