import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { Hero } from '../types/Hero';

interface UseFavoriteHeroesOptions {
  storageKey?: string;
}

export const useFavoriteHeroes = ({ 
  storageKey = 'favorite-heroes' 
}: UseFavoriteHeroesOptions = {}) => {
  const [favoriteIds, setFavoriteIds] = useLocalStorage({
    key: storageKey,
    initialValue: [] as number[],
  });

  const isFavorite = useCallback((heroId: number): boolean => {
    return favoriteIds.includes(heroId);
  }, [favoriteIds]);

  const toggleFavorite = useCallback((hero: Hero) => {
    setFavoriteIds(prev => {
      const isCurrentlyFavorite = prev.includes(hero.id);
      
      if (isCurrentlyFavorite) {
        return prev.filter(id => id !== hero.id);
      } else {
        return [...prev, hero.id];
      }
    });
  }, [setFavoriteIds]);

  const addFavorite = useCallback((hero: Hero) => {
    setFavoriteIds(prev => {
      if (!prev.includes(hero.id)) {
        return [...prev, hero.id];
      }
      return prev;
    });
  }, [setFavoriteIds]);

  const removeFavorite = useCallback((heroId: number) => {
    setFavoriteIds(prev => prev.filter(id => id !== heroId));
  }, [setFavoriteIds]);

  const clearFavorites = useCallback(() => {
    setFavoriteIds([]);
  }, [setFavoriteIds]);

  const getFavoriteHeroes = useCallback((allHeroes: Hero[]): Hero[] => {
    return allHeroes.filter(hero => favoriteIds.includes(hero.id));
  }, [favoriteIds]);

  const favoriteHeroesCount = useMemo(() => favoriteIds.length, [favoriteIds]);

  return {
    favoriteIds,
    favoriteHeroesCount,
    isFavorite,
    toggleFavorite,
    addFavorite,
    removeFavorite,
    clearFavorites,
    getFavoriteHeroes,
  };
};
