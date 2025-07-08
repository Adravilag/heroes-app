import { useEnhancedSearchPage } from "../hooks/useEnhancedSearchPage";
import { useScrollToTopOnRouteChange } from "../hooks/useScrollToTop";
import { useLanguage } from "../../i18n/i18n";
import HeroModal from "../components/heroes/HeroModal";
import SearchControls from "../components/search/SearchControls";
import SearchGrid from "../components/search/SearchGrid";
import PaginationControls from "../components/pagination/PaginationControls";
import { type TranslatedHero } from "../hooks/useTranslatedHeroes";

const SearchPage = () => {
  // Scroll automático al top cuando se navega a esta página
  useScrollToTopOnRouteChange();
  
  const { t } = useLanguage();
  
  const {
    headerInfo,
    searchControls,
    searchGrid,
    heroModal,
  } = useEnhancedSearchPage({
    persistFilters: false, // Usa la versión simple sin persistencia
    enablePagination: true, // Habilitar paginación
    enableSorting: false,
    enableKeyboardNavigation: false,
    enableFavorites: false,
  });

  return (
    <div className="min-vh-100">
      <div className="container-fluid py-4">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="display-6 fw-light text-white mb-2">
            {t('pages.search.title')}
          </h1>
          <p className="text-muted small">
            {t('pages.search.subtitle')}
            <br />
            {t('heroes.totalHeroes')}: {headerInfo.stats.total} | {t('heroes.filteredHeroes')}: {headerInfo.stats.filtered}
          </p>
        </div>
        
        {/* Controles de búsqueda */}
        <SearchControls
          searchTerm={searchControls.searchTerm}
          setSearchTerm={searchControls.setSearchTerm}
          selectedRole={searchControls.selectedRole}
          setSelectedRole={searchControls.setSelectedRole}
          selectedUniverse={searchControls.selectedUniverse}
          setSelectedUniverse={searchControls.setSelectedUniverse}
          uniqueRoles={searchControls.roleOptions.map(r => r.value)}
          uniqueUniverses={searchControls.universeOptions.map(u => u.value)}
          onClearFilters={searchControls.clearFilters}
          hasActiveFilters={searchControls.hasActiveFilters}
        />
        
        {/* Grid de héroes con Bootstrap */}
        <SearchGrid
          filteredHeroes={searchGrid.currentPageHeroes}
          onHeroSelect={(hero: TranslatedHero) => {
            const heroProps = searchGrid.getHeroProps(hero, 0);
            heroProps.onClick();
          }}
          searchTerm={searchControls.debouncedSearchTerm}
          selectedRole={searchControls.selectedRole}
          selectedUniverse={searchControls.selectedUniverse}
          onClearFilters={searchGrid.onClearFilters}
        />
        
        {/* Controles de paginación */}
        {searchGrid.pagination && searchGrid.pagination.totalPages > 1 && (
          <PaginationControls
            currentPage={searchGrid.pagination.currentPage}
            totalPages={searchGrid.pagination.totalPages}
            hasNextPage={searchGrid.pagination.hasNextPage}
            hasPreviousPage={searchGrid.pagination.hasPreviousPage}
            onNextPage={searchGrid.pagination.nextPage}
            onPreviousPage={searchGrid.pagination.previousPage}
            onFirstPage={searchGrid.pagination.goToFirstPage}
            onLastPage={searchGrid.pagination.goToLastPage}
            variant="hots"
            size="md"
            showLabels={true}
            autoScroll={true}
            scrollTarget="top"
          />
        )}
        
        {/* Modal de héroe */}
        <HeroModal {...heroModal} />
      </div>
    </div>
  );
};

export default SearchPage;
