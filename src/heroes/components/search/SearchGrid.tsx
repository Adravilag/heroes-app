import type { TranslatedHero } from "../../hooks/useTranslatedHeroes";

type SearchGridProps = {
  filteredHeroes: TranslatedHero[];
  onHeroSelect: (hero: TranslatedHero) => void;
  searchTerm: string;
  selectedRole: string;
  selectedUniverse: string;
  onClearFilters: () => void;
};

const SearchGrid = ({
  filteredHeroes,
  onHeroSelect,
  searchTerm,
  selectedRole,
  selectedUniverse,
  onClearFilters,
}: SearchGridProps) => {
  return (
    <>
      {filteredHeroes.length > 0 ? (
        <div className="row g-2">
          {filteredHeroes.map((hero, index) => (
            <div
              key={hero.id}
              className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2"
              style={{
                animation: `heroCardSlideIn 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div
                onClick={() => onHeroSelect(hero)}
                className="card h-100 border-0 hero-card-hover hero-card-animated"
                style={{
                  backgroundColor: "var(--hots-dark)",
                  borderColor: "rgba(110, 116, 124, 0.1)",
                  cursor: "pointer",
                  transform: "translateY(0)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div className="position-relative overflow-hidden hero-image-container">
                  <img
                    src={hero.image}
                    alt={hero.name}
                    className="card-img-top hero-image"
                    style={{
                      aspectRatio: "1/1",
                      objectFit: "cover",
                      transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/placeholder-hero.jpg";
                    }}
                  />

                  {/* Overlay con gradiente y efecto brillo */}
                  <div className="hero-shine-overlay"></div>
                  
                  {/* Overlay con información */}
                  <div className="card-img-overlay d-flex flex-column justify-content-end p-2 hero-overlay">
                    <h6 className="card-title text-white mb-0 small fw-bold text-truncate hero-name">
                      {hero.name}
                    </h6>
                    <p className="card-text text-muted small mb-0 hero-role">
                      {hero.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <div className="text-muted">
            <i className="mb-3 d-block" style={{ fontSize: "3rem" }}>
              🔍
            </i>
            <p className="mb-2">No se encontraron héroes</p>
            {(searchTerm || selectedRole || selectedUniverse) && (
              <button
                onClick={onClearFilters}
                className="btn btn-link text-info p-0"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchGrid;
