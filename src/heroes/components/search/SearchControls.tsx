import React, { memo } from "react";
import { useLanguage } from "../../../i18n/i18n";

interface SearchControlsProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedRole: string;
  setSelectedRole: (role: string) => void;
  selectedUniverse: string;
  setSelectedUniverse: (universe: string) => void;
  uniqueRoles: string[];
  uniqueUniverses: string[];
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const SearchControls: React.FC<SearchControlsProps> = memo(({
  searchTerm,
  setSearchTerm,
  selectedRole,
  setSelectedRole,
  selectedUniverse,
  setSelectedUniverse,
  uniqueRoles,
  uniqueUniverses,
  onClearFilters,
  hasActiveFilters,
}) => {
  const { t } = useLanguage();

  const translateRole = (role: string) => {
    const roleMap: { [key: string]: string } = {
      'Tank': t('roles.tank'),
      'Healer': t('roles.healer'),
      'Bruiser': t('roles.bruiser'),
      'Melee Assassin': t('roles.melee'),
      'Ranged Assassin': t('roles.ranged'),
      'Support': t('roles.support'),
      'Specialist': t('roles.specialist'),
      'Multiclass': t('roles.multiclass'),
    };
    return roleMap[role] || role;
  };

  const translateUniverse = (universe: string) => {
    const universeMap: { [key: string]: string } = {
      'Warcraft': t('universes.warcraft'),
      'StarCraft': t('universes.starcraft'),
      'Diablo': t('universes.diablo'),
      'Overwatch': t('universes.overwatch'),
      'Classic': t('universes.classic'),
      'Nexus': t('universes.nexus'),
    };
    return universeMap[universe] || universe;
  };

  return (
    <>
      {/* Controles de búsqueda */}
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8">
          <div className="row g-2">
            {/* Barra de búsqueda */}
            <div className="col-md-6">
              <div className="position-relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t('heroes.searchPlaceholder')}
                  className="form-control form-control-sm"
                  style={{
                    backgroundColor: "var(--hots-dark)",
                    borderColor: "rgba(110, 116, 124, 0.2)",
                    color: "white",
                  }}
                />
                <i className="position-absolute top-50 end-0 translate-middle-y pe-3 text-muted">
                  🔍
                </i>
              </div>
            </div>

            {/* Filtro de rol */}
            <div className="col-md-3">
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="form-select form-select-sm"
                style={{
                  backgroundColor: "var(--hots-dark)",
                  borderColor: "rgba(110, 116, 124, 0.2)",
                  color: "white",
                }}
              >
                <option value="">{t('heroes.allRoles')}</option>
                {uniqueRoles.map((role) => (
                  <option key={role} value={role}>
                    {translateRole(role)}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtro de universo */}
            <div className="col-md-3">
              <select
                value={selectedUniverse}
                onChange={(e) => setSelectedUniverse(e.target.value)}
                className="form-select form-select-sm"
                style={{
                  backgroundColor: "var(--hots-dark)",
                  borderColor: "rgba(110, 116, 124, 0.2)",
                  color: "white",
                }}
              >
                <option value="">{t('heroes.allUniverses')}</option>
                {uniqueUniverses.map((universe) => (
                  <option key={universe} value={universe}>
                    {translateUniverse(universe)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Botón de limpiar filtros */}
      {hasActiveFilters && (
        <div className="row justify-content-center mb-3">
          <div className="col-lg-8">
            <button
              onClick={onClearFilters}
              className="btn btn-outline-warning btn-sm"
              style={{
                borderColor: "rgba(251, 191, 36, 0.5)",
                color: "rgba(251, 191, 36, 0.8)",
              }}
            >
              {t('heroes.clearFilters')}
            </button>
          </div>
        </div>
      )}
    </>
  );
});

SearchControls.displayName = 'SearchControls';

export default SearchControls;
