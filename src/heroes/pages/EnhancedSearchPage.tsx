import React from 'react';
import { useEnhancedSearchPage } from "../hooks/useEnhancedSearchPage";
import HeroModal from "../components/heroes/HeroModal";
import SearchControls from "../components/search/SearchControls";
import SearchGrid from "../components/search/SearchGrid";

const EnhancedSearchPage: React.FC = () => {
  const {
    headerInfo,
    searchControls,
    searchGrid,
    heroModal,
    config,
  } = useEnhancedSearchPage({
    persistFilters: true,
    enablePagination: true,
    enableInfiniteScroll: false, // Podemos cambiarlo a true para probar
    enableSorting: true,
    enableKeyboardNavigation: true,
    enableFavorites: true,
    enableAsyncLoading: false, // Podemos cambiarlo a true para probar
    pageSize: 12,
    debounceDelay: 300,
  });

  return (
    <div className="min-vh-100">
      <div className="container-fluid py-4">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="display-6 fw-light text-white mb-2">
            {headerInfo.title}
          </h1>
          <p className="text-muted small">
            {headerInfo.subtitle}
            <br />
            Total de héroes: {headerInfo.stats.total} | Héroes filtrados: {headerInfo.stats.filtered}
            {searchControls.hasActiveFilters && (
              <span className="ms-2 text-info">
                ({searchControls.activeFiltersCount} filtro{searchControls.activeFiltersCount !== 1 ? 's' : ''} activo{searchControls.activeFiltersCount !== 1 ? 's' : ''})
              </span>
            )}
          </p>
        </div>

        {/* Search Controls */}
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

        {/* Search Grid */}
        <SearchGrid
          filteredHeroes={searchGrid.currentPageHeroes}
          onHeroSelect={(hero: any) => {
            const heroProps = searchGrid.getHeroProps(hero, 0);
            heroProps.onClick();
          }}
          searchTerm={searchControls.debouncedSearchTerm}
          selectedRole={searchControls.selectedRole}
          selectedUniverse={searchControls.selectedUniverse}
          onClearFilters={searchGrid.onClearFilters}
        />

        {/* Infinite scroll trigger */}
        {config.enableInfiniteScroll && searchGrid.infiniteScroll && (
          <div 
            ref={searchGrid.infiniteScroll.ref}
            className="d-flex justify-content-center mt-4"
          >
            {searchGrid.infiniteScroll.isLoading && (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            )}
            {!searchGrid.infiniteScroll.hasMore && searchGrid.currentPageHeroes.length > 0 && (
              <p className="text-muted">No hay más héroes para cargar</p>
            )}
          </div>
        )}

        {/* Pagination */}
        {config.enablePagination && !config.enableInfiniteScroll && searchGrid.pagination && searchGrid.pagination.totalPages > 1 && (
          <div className="d-flex justify-content-center mt-4">
            <nav>
              <ul className="pagination">
                <li className={`page-item ${!searchGrid.pagination.hasPreviousPage ? 'disabled' : ''}`}>
                  <button
                    className="page-link"
                    onClick={searchGrid.pagination.previousPage}
                    disabled={!searchGrid.pagination.hasPreviousPage}
                  >
                    Anterior
                  </button>
                </li>
                
                {Array.from({ length: searchGrid.pagination.totalPages }, (_, i) => i + 1).map(page => (
                  <li key={page} className={`page-item ${page === searchGrid.pagination!.currentPage ? 'active' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => searchGrid.pagination!.goToPage(page)}
                    >
                      {page}
                    </button>
                  </li>
                ))}
                
                <li className={`page-item ${!searchGrid.pagination.hasNextPage ? 'disabled' : ''}`}>
                  <button
                    className="page-link"
                    onClick={searchGrid.pagination.nextPage}
                    disabled={!searchGrid.pagination.hasNextPage}
                  >
                    Siguiente
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {/* Hero Modal */}
        <HeroModal {...heroModal} />

        {/* Keyboard shortcuts help */}
        {config.enableKeyboardNavigation && (
          <div className="position-fixed bottom-0 end-0 p-3">
            <div className="card bg-dark text-white" style={{ fontSize: '0.75rem' }}>
              <div className="card-body p-2">
                <div className="fw-bold mb-1">Atajos de teclado:</div>
                <div>Ctrl+F: Buscar</div>
                <div>Ctrl+K: Limpiar filtros</div>
                <div>↑↓: Navegar</div>
                <div>Enter: Seleccionar</div>
                <div>Esc: Cerrar</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedSearchPage;
