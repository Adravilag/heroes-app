import { useState, useMemo } from "react";
import { usePagination } from "../../hooks/usePagination";
import { useTranslatedHeroes } from "../../hooks/useTranslatedHeroes";
import type { TranslatedHero } from "../../hooks/useTranslatedHeroes";
import HeroCard from "./HeroPortrait";
import { PaginationControls } from "../pagination";

const HeroSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [, setSelectedHeroState] = useState<TranslatedHero | null>(null);
  const { heroes } = useTranslatedHeroes();

  // Define a function that matches the expected prop type
  const setSelectedHero = (hero: TranslatedHero) => setSelectedHeroState(hero);

  // Filtrar héroes basado en el término de búsqueda
  const filteredHeroes = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return heroes.filter(hero => 
      hero.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hero.universe.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hero.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hero.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, heroes]);

  // Configuración de paginación
  const ITEMS_PER_PAGE = 8;
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    hasNextPage,
    hasPreviousPage,
    nextPage,
    previousPage,
    goToFirstPage,
    goToLastPage,
  } = usePagination({
    totalItems: filteredHeroes.length,
    pageSize: ITEMS_PER_PAGE,
    initialPage: 1,
  });

  // Héroes de la página actual
  const currentPageHeroes = useMemo(() => {
    return filteredHeroes.slice(startIndex, endIndex);
  }, [filteredHeroes, startIndex, endIndex]);

  // Resetear paginación cuando cambia el término de búsqueda
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    goToFirstPage(); // Reiniciar a la primera página
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Título */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-gold-400 bg-clip-text text-transparent mb-4">
            Búsqueda de Héroes
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Barra de búsqueda */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="input-group input-group-lg">
            <span className="input-group-text bg-dark text-warning border-warning">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control bg-dark text-white border-warning"
              placeholder="Buscar héroes por nombre, universo o habilidad..."
              value={searchTerm}
              onChange={handleSearchChange}
              style={{
                boxShadow: '0 0 10px rgba(255, 193, 7, 0.3)',
                borderColor: '#ffd700'
              }}
            />
          </div>
        </div>

        {/* Resultados */}
        {searchTerm.trim() && (
          <>
            <div className="text-center mb-6">
              <p className="text-gray-300 text-lg">
                {filteredHeroes.length > 0 
                  ? `Se encontraron ${filteredHeroes.length} héroe(s) para "${searchTerm}"`
                  : `No se encontraron héroes para "${searchTerm}"`
                }
              </p>
            </div>

            {filteredHeroes.length > 0 && (
              <>
                {/* Paginación superior */}
                {totalPages > 1 && (
                  <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    hasNextPage={hasNextPage}
                    hasPreviousPage={hasPreviousPage}
                    onNextPage={nextPage}
                    onPreviousPage={previousPage}
                    onFirstPage={goToFirstPage}
                    onLastPage={goToLastPage}
                    variant="hots"
                    size="sm"
                    autoScroll={true}
                    scrollTarget="top"
                  />
                )}

                {/* Grid de héroes */}
                <div className="heroes-grid heroes-container">
                  {currentPageHeroes.map((hero: TranslatedHero) => (
                    <HeroCard
                      key={hero.id}
                      hero={hero}
                      setSelectedHero={setSelectedHero}
                    />
                  ))}
                </div>

                {/* Paginación inferior */}
                {totalPages > 1 && (
                  <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    hasNextPage={hasNextPage}
                    hasPreviousPage={hasPreviousPage}
                    onNextPage={nextPage}
                    onPreviousPage={previousPage}
                    onFirstPage={goToFirstPage}
                    onLastPage={goToLastPage}
                    variant="hots"
                    size="sm"
                    autoScroll={true}
                    scrollTarget="top"
                  />
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HeroSearchPage;
