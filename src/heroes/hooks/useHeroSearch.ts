import { useState, useMemo } from "react";
import { useTranslatedHeroes } from "./useTranslatedHeroes";

const useHeroSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedUniverse, setSelectedUniverse] = useState("");

  // Obtener todos los héroes traducidos
  const { heroes: allHeroes } = useTranslatedHeroes();

  // Filtrar héroes basado en los criterios de búsqueda
  const filteredHeroes = useMemo(() => {
    return allHeroes.filter((hero) => {
      const matchesName = hero.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRole = !selectedRole || hero.role === selectedRole;
      const matchesUniverse =
        !selectedUniverse || hero.universe === selectedUniverse;

      return matchesName && matchesRole && matchesUniverse;
    });
  }, [allHeroes, searchTerm, selectedRole, selectedUniverse]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedRole("");
    setSelectedUniverse("");
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedRole,
    setSelectedRole,
    selectedUniverse,
    setSelectedUniverse,
    filteredHeroes,
    clearFilters,
  };
};

export default useHeroSearch;