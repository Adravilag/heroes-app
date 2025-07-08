import { useMemo } from 'react';
import { heroesData } from '../data/heroesData';
import type { HeroData } from '../data/heroesData';
import type { Hero } from '../types/Hero';
import { useHeroTranslations } from '../../i18n/hooks/useHeroTranslations';

export interface TranslatedHero extends Hero {
  key: string;
  // Propiedades originales para iconos y clases
  originalRole: string;
  originalDifficulty: string;
  originalDamageType: string;
  originalRangeType: string;
  originalHealthType: string;
  originalMobility: string;
}

export const useTranslatedHeroes = () => {
  const {
    translateRole,
    translateUniverse,
    translateDifficulty,
    translateDamageType,
    translateRangeType,
    translateHealthType,
    translateMobility,
    translateHeroName,
    translateHeroDescription,
    currentLanguage
  } = useHeroTranslations();

  const translatedHeroes = useMemo(() => {
    return heroesData.map((hero: HeroData): TranslatedHero => {
      const translatedHero = {
        id: hero.id,
        key: hero.key,
        name: translateHeroName(hero.nameKey),
        role: translateRole(hero.role) as Hero['role'],
        universe: translateUniverse(hero.universe),
        firstAppearance: hero.firstAppearance,
        image: hero.image,
        secondImage: hero.secondImage,
        description: translateHeroDescription(hero.key),
        difficulty: translateDifficulty(hero.difficulty) as Hero['difficulty'],
        damageType: translateDamageType(hero.damageType) as Hero['damageType'],
        rangeType: translateRangeType(hero.rangeType) as Hero['rangeType'],
        healthType: translateHealthType(hero.healthType) as Hero['healthType'],
        mobility: translateMobility(hero.mobility) as Hero['mobility'],
        // Propiedades originales para iconos y clases
        originalRole: hero.role,
        originalDifficulty: hero.difficulty,
        originalDamageType: hero.damageType,
        originalRangeType: hero.rangeType,
        originalHealthType: hero.healthType,
        originalMobility: hero.mobility
      };
      
      return translatedHero;
    });
  }, [
    translateRole,
    translateUniverse,
    translateDifficulty,
    translateDamageType,
    translateRangeType,
    translateHealthType,
    translateMobility,
    translateHeroName,
    translateHeroDescription,
  ]);

  return {
    heroes: translatedHeroes,
    currentLanguage
  };
};

export default useTranslatedHeroes;
