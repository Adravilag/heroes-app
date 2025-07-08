import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useScrollToTopOnRouteChange } from "../hooks/useScrollToTop";
import {
  getHeroesById,
  getRoleIcon,
  getRoleClass,
  getDamageTypeIcon,
  getHealthIcon,
  getMobilityIcon,
  getDifficultyClass,
} from "../helpers";
import { useLanguage } from "../../i18n/i18n";
import { useHeroValueTranslations } from "../hooks/useHeroValueTranslations";
import { buildUrl } from "../../utils/pathUtils";

const HeroPage = () => {
  // Scroll automático al top cuando se navega a esta página
  useScrollToTopOnRouteChange();

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroesById(Number(id)), [id]);
  const { t } = useLanguage();
  const {
    translateRole,
    translateDifficultyClass,
    translateUniverse,
    translateDamageType,
    translateHealthType,
    translateMobilityType,
  } = useHeroValueTranslations();

  if (!hero) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        {/* Fondo animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-hots-darker via-hots-navy to-hots-dark"></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Contenido de error */}
        <div className="relative z-10 text-center p-8">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-red-400 mb-4 font-orbitron">
              404
            </h1>
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("heroes.heroNotFound")}
            </h2>
            <p className="text-hots-gray text-lg mb-8">
              {t("heroes.heroNotFoundMessage")}
            </p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-gradient-to-r from-hots-blue to-hots-purple text-white font-bold rounded-lg
                     hover:from-hots-purple hover:to-hots-blue transition-all duration-300 transform hover:scale-105
                     shadow-lg hover:shadow-2xl border border-hots-blue/30"
          >
            {t("heroes.backToHeroesList")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-page-container">
      {/* Fondo avanzado */}
      <div className="absolute inset-0 bg-gradient-to-br from-hots-darker via-hots-navy to-hots-dark"></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Efectos de partículas mejorados */}
      <div className="hero-particles">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-hots-blue rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-hots-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-hots-cyan rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 py-8 mt-3">
        {/* Header del héroe mejorado */}
        <div className="text-center mb-12">
          <h1
            className="hero-title text-6xl md:text-8xl font-bold text-white mb-4 font-orbitron 
                       bg-gradient-to-r from-hots-gold via-hots-orange to-hots-gold bg-clip-text text-transparent
                       drop-shadow-2xl"
          >
            {hero.name}
          </h1>
          <p className="text-hots-cyan text-xl md:text-2xl mb-6 font-medium">
            {t("heroes.heroDescription", { universe: hero.universe })}
          </p>

          {/* Badges principales */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className={getRoleClass(hero.role)}>
              <span>{getRoleIcon(hero.role)}</span>
              <span className="ml-2">{translateRole(hero.role)}</span>
            </div>
            <div className={getDifficultyClass(hero.difficulty)}>
              <span className="ml-2">
                {translateDifficultyClass(hero.difficulty)}
              </span>
            </div>
          </div>
        </div>

        {/* Layout principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Imagen del héroe */}
          <div className="flex justify-center">
            <div className="relative group hero-detail-image">
              <div className="hero-card-img-container w-96 h-96 lg:w-[500px] lg:h-[500px]">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      buildUrl("placeholder-hero.svg");
                  }}
                />

                {/* Overlay con efectos */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>

              {/* Efecto de resplandor */}
              <div
                className="absolute -inset-4 bg-gradient-to-r from-hots-blue via-hots-purple to-hots-cyan 
                            rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
              ></div>
            </div>
          </div>

          {/* Información detallada */}
          <div className="space-y-8">
            {/* Información básica mejorada */}
            <div className="hero-info-card">
              <h3 className="hero-section-header text-2xl font-bold text-hots-gold mb-4 font-orbitron">
                {t("heroes.basicInformation")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="hero-basic-info-item">
                  <div className="flex items-center mb-2">
                    <span className="hero-info-icon">🌌</span>
                    <span className="hero-info-label">
                      {t("heroes.universe")}
                    </span>
                  </div>
                  <p className="hero-info-value">
                    {translateUniverse(hero.universe)}
                  </p>
                </div>

                <div className="hero-basic-info-item">
                  <div className="flex items-center mb-2">
                    <span className="hero-info-icon">📅</span>
                    <span className="hero-info-label">
                      {t("heroes.firstAppearance")}
                    </span>
                  </div>
                  <p className="hero-info-value">{hero.firstAppearance}</p>
                </div>
              </div>
            </div>

            {/* Estadísticas de combate mejoradas */}
            <div className="hero-info-card hero-page">
              <h3 className="hero-section-header text-2xl font-bold text-hots-gold mb-4 font-orbitron">
                {t("heroes.combatStats")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="hero-stat-badge bg-hots-dark/50 border border-hots-orange/30">
                  <span className="icon text-2xl">
                    {getDamageTypeIcon(hero.damageType)}
                  </span>
                  <div className="text">
                    <div className="font-semibold text-hots-orange">
                      {t("heroes.damage")}
                    </div>
                    <div className="text-sm">
                      {translateDamageType(hero.damageType)}
                    </div>
                  </div>
                </div>

                <div className="hero-stat-badge bg-hots-dark/50 border border-hots-red/30">
                  <span className="icon text-2xl">
                    {getHealthIcon(hero.healthType)}
                  </span>
                  <div className="text">
                    <div className="font-semibold text-hots-red">
                      {t("heroes.health")}
                    </div>
                    <div className="text-sm">
                      {translateHealthType(hero.healthType)}
                    </div>
                  </div>
                </div>

                <div className="hero-stat-badge bg-hots-dark/50 border border-hots-cyan/30">
                  <span className="icon text-2xl">
                    {getMobilityIcon(hero.mobility)}
                  </span>
                  <div className="text">
                    <div className="font-semibold text-hots-cyan">
                      {t("heroes.mobility")}
                    </div>
                    <div className="text-sm">
                      {translateMobilityType(hero.mobility)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Descripción extendida mejorada */}
            <div className="hero-info-card">
              <h3 className="hero-section-header text-2xl font-bold text-hots-gold mb-4 font-orbitron">
                {t("heroes.aboutHero")}
              </h3>
              <p className="text-hots-light leading-relaxed text-lg">
                {t("heroes.heroDescription", { universe: hero.universe })}
              </p>

              {/* Tags adicionales mejorados */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="hero-tag role-tag">
                  {translateRole(hero.role)}
                </span>
                <span className="hero-tag universe-tag">
                  {translateUniverse(hero.universe)}
                </span>
                <span className="hero-tag damage-tag">
                  {translateDamageType(hero.damageType)} {t("heroes.damage")}
                </span>
              </div>
            </div>

            {/* Botones de acción mejorados */}
            <div className="hero-actions-container relative">
              <button
                onClick={() => navigate(-1)}
                className="hero-action-button w-full sm:w-auto px-8 py-4 text-white font-bold rounded-lg text-lg transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center space-x-2 p-3">
                  <span>{t("heroes.goBackButton")}</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
