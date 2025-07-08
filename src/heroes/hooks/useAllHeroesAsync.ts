import { useEffect } from 'react';
import { useAsyncState } from './useAsyncState';
import { getHeroesByUniverse } from '../helpers';
import type { Hero } from '../types/Hero';

export const useAllHeroesAsync = () => {
  const {
    data: allHeroes,
    loading,
    error,
    execute,
    reset,
  } = useAsyncState<Hero[]>({ initialData: [] });

  // Simulate async data loading
  const loadHeroes = async (): Promise<Hero[]> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate possible error (5% chance)
    if (Math.random() < 0.05) {
      throw new Error('Failed to load heroes data');
    }
    
    return getHeroesByUniverse("all") as Hero[];
  };

  // Load heroes on mount
  useEffect(() => {
    execute(loadHeroes);
  }, [execute]);

  // Derived data
  const uniqueUniverses = allHeroes 
    ? Array.from(new Set(allHeroes.map(hero => hero.universe))).sort()
    : [];

  const uniqueRoles = allHeroes 
    ? Array.from(new Set(allHeroes.map(hero => hero.role))).sort()
    : [];

  // Retry function
  const retryLoad = () => {
    reset();
    execute(loadHeroes);
  };

  return {
    allHeroes: allHeroes || [],
    uniqueUniverses,
    uniqueRoles,
    totalHeroes: allHeroes?.length || 0,
    loading,
    error,
    retryLoad,
  };
};
