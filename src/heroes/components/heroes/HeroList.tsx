import { useState, useMemo } from "react";
import { usePagination } from "../../hooks/usePagination";
import { useTranslatedHeroes } from "../../hooks/useTranslatedHeroes";
import { useLanguage } from "../../../i18n/i18n";
import type { TranslatedHero } from "../../hooks/useTranslatedHeroes";
import HeroCard from "./HeroPortrait";
import { PaginationControls } from "../pagination";
import "./css/HeroList.css";

const HeroeList = ({ universe }: { universe: string }) => {
  const { heroes: translatedHeroes } = useTranslatedHeroes();
  const { t } = useLanguage();

  // Filtrar héroes traducidos por universo
  const heroes = useMemo(() => {
    if (universe === "all") {
      return translatedHeroes;
    }
    return translatedHeroes.filter((hero) => hero.universe === universe);
  }, [translatedHeroes, universe]);

  const [, setSelectedHeroState] = useState<TranslatedHero | null>(null);

  // Define a function that matches the expected prop type
  const setSelectedHero = (hero: TranslatedHero) => setSelectedHeroState(hero);

  // Configuración de paginación
  const ITEMS_PER_PAGE = 12;
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
    totalItems: heroes.length,
    pageSize: ITEMS_PER_PAGE,
    initialPage: 1,
  });

  // Héroes de la página actual
  const currentPageHeroes = useMemo(() => {
    return heroes.slice(startIndex, endIndex);
  }, [heroes, startIndex, endIndex]);

  if (heroes.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl font-bold text-gray-300 mb-4">
          {t("ui.noHeroesFound", { universe })}
        </h2>
        <p className="text-gray-400">{t("ui.noHeroesFoundDescription")}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative">
      {/* Fondo animado de partículas */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Título */}
        <div className="text-center mb-8">
          <h2 className="page-title text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-gold-400 bg-clip-text text-transparent m-4">
            {t("ui.heroesTitle", { universe })}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 text-lg">
            {t("ui.heroesSubtitle", { universe })}
          </p>
        </div>

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
            size="md"
            autoScroll={true}
            scrollTarget="top"
          />
        )}

        {/* Grid de héroes */}
        <div className="heroes-grid heroes-container">
          {currentPageHeroes.map((hero) => (
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
            size="md"
            autoScroll={true}
            scrollTarget="top"
          />
        )}
      </div>
    </div>
  );
};

export default HeroeList;
