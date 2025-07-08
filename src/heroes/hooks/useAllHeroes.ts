import { useMemo } from 'react';
import { useTranslatedHeroes } from './useTranslatedHeroes';

export const useAllHeroes = () => {
  const { heroes: allHeroes } = useTranslatedHeroes();

  const uniqueUniverses = useMemo(() => {
    const universes = Array.from(new Set(allHeroes.map(hero => hero.universe)));
    return universes.sort();
  }, [allHeroes]);

  const uniqueRoles = useMemo(() => {
    const roles = Array.from(new Set(allHeroes.map(hero => hero.role)));
    return roles.sort();
  }, [allHeroes]);

  return {
    allHeroes,
    uniqueUniverses,
    uniqueRoles,
    totalHeroes: allHeroes.length
  };
};