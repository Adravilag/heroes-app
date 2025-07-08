import { heroes } from "../data/heroes";
import type { Hero } from "../types/Hero";

/**
 * Busca héroes por nombre, universo, rol o descripción
 * @param searchTerm - Término de búsqueda
 * @returns Array de héroes que coinciden con el término de búsqueda
 */
export const searchHeroes = (searchTerm: string): Hero[] => {
  if (!searchTerm.trim()) {
    return [];
  }

  const normalizedSearchTerm = searchTerm.toLowerCase().trim();

  return heroes.filter((hero) => {
    // Buscar en el nombre
    const nameMatch = hero.name.toLowerCase().includes(normalizedSearchTerm);
    
    // Buscar en el universo
    const universeMatch = hero.universe.toLowerCase().includes(normalizedSearchTerm);
    
    // Buscar en el rol
    const roleMatch = hero.role.toLowerCase().includes(normalizedSearchTerm);
    
    // Buscar en la descripción (si existe)
    const descriptionMatch = hero.description?.toLowerCase().includes(normalizedSearchTerm) || false;

    // Buscar en firstAppearance
    const firstAppearanceMatch = hero.firstAppearance?.toLowerCase().includes(normalizedSearchTerm) || false;

    return nameMatch || universeMatch || roleMatch || descriptionMatch || firstAppearanceMatch;
  });
};

/**
 * Busca héroes por múltiples filtros
 * @param filters - Objeto con los filtros a aplicar
 * @returns Array de héroes filtrados
 */
export const searchHeroesByFilters = (filters: {
  searchTerm?: string;
  universe?: string;
  role?: string;
  difficulty?: string;
}): Hero[] => {
  const { searchTerm, universe, role, difficulty } = filters;

  return heroes.filter((hero) => {
    // Filtro por término de búsqueda
    let matchesSearch = true;
    if (searchTerm && searchTerm.trim()) {
      const normalizedSearchTerm = searchTerm.toLowerCase().trim();
      matchesSearch = 
        hero.name.toLowerCase().includes(normalizedSearchTerm) ||
        hero.universe.toLowerCase().includes(normalizedSearchTerm) ||
        hero.role.toLowerCase().includes(normalizedSearchTerm) ||
        hero.description?.toLowerCase().includes(normalizedSearchTerm) ||
        hero.firstAppearance?.toLowerCase().includes(normalizedSearchTerm);
    }

    // Filtro por universo
    const matchesUniverse = !universe || universe === 'all' || hero.universe === universe;

    // Filtro por rol
    const matchesRole = !role || role === 'all' || hero.role === role;

    // Filtro por dificultad
    const matchesDifficulty = !difficulty || difficulty === 'all' || hero.difficulty === difficulty;

    return matchesSearch && matchesUniverse && matchesRole && matchesDifficulty;
  });
};

/**
 * Obtiene sugerencias de búsqueda basadas en un término parcial
 * @param partialTerm - Término parcial de búsqueda
 * @param limit - Límite de sugerencias (por defecto 5)
 * @returns Array de sugerencias
 */
export const getSearchSuggestions = (partialTerm: string, limit = 5): string[] => {
  if (!partialTerm.trim()) {
    return [];
  }

  const normalizedTerm = partialTerm.toLowerCase().trim();
  const suggestions = new Set<string>();

  heroes.forEach((hero) => {
    // Sugerencias de nombres
    if (hero.name.toLowerCase().includes(normalizedTerm)) {
      suggestions.add(hero.name);
    }

    // Sugerencias de universos
    if (hero.universe.toLowerCase().includes(normalizedTerm)) {
      suggestions.add(hero.universe);
    }

    // Sugerencias de roles
    if (hero.role.toLowerCase().includes(normalizedTerm)) {
      suggestions.add(hero.role);
    }

    // Sugerencias de firstAppearance
    if (hero.firstAppearance?.toLowerCase().includes(normalizedTerm)) {
      suggestions.add(hero.firstAppearance);
    }
  });

  return Array.from(suggestions).slice(0, limit);
};
