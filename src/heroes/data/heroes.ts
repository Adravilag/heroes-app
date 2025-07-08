// Este archivo proporciona compatibilidad con la aplicación existente
// Para traducciones dinámicas, usar el hook useTranslatedHeroes
import { heroesData } from './heroesData';
import type { HeroData } from './heroesData';
import type { Hero } from '../types/Hero';

// Función para convertir HeroData a Hero con datos básicos (sin traducciones)
function convertToHero(heroData: HeroData): Hero {
  return {
    id: heroData.id,
    name: heroData.nameKey, // Usar la clave, no la traducción
    role: heroData.role,
    universe: heroData.universe,
    firstAppearance: heroData.firstAppearance,
    image: heroData.image,
    secondImage: heroData.secondImage,
    description: heroData.nameKey,
    difficulty: heroData.difficulty,
    damageType: heroData.damageType,
    rangeType: heroData.rangeType,
    healthType: heroData.healthType,
    mobility: heroData.mobility
  };
}

// Export básico para compatibilidad (sin traducciones)
// IMPORTANTE: Para obtener heroes con traducciones, usar useTranslatedHeroes hook
export const heroes: Hero[] = heroesData.map(convertToHero);

// Exportar tipos y hooks para el nuevo sistema de traducciones
export type { HeroData } from './heroesData';
export { useTranslatedHeroes } from '../hooks/useTranslatedHeroes';
export type { TranslatedHero } from '../hooks/useTranslatedHeroes';