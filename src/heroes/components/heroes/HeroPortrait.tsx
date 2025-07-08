import {
  getRoleIcon,
  getRoleClass,
  getDamageTypeIcon,
  getHealthIcon,
  getMobilityIcon,
  getDifficultyClass,
} from "../../helpers";
import type { TranslatedHero } from "../../hooks/useTranslatedHeroes";
import { useLanguage } from "../../../i18n/i18n";
import { buildUrl } from "../../../utils/pathUtils";
import { Link } from "react-router-dom";

interface HeroCardProps {
  hero: TranslatedHero;
  setSelectedHero: (hero: TranslatedHero) => void;
}

const HeroCard = ({ hero, setSelectedHero }: HeroCardProps) => {
  const { t } = useLanguage();
  
  return (
    <div
      key={hero.id}
      className="hero-card group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
      onClick={() => setSelectedHero(hero)}
      style={{
        animationDelay: `${Math.random() * 0.5}s`,
        transformOrigin: 'center center',
      }}
    >
      {/* Imagen del héroe */}
      <div className="hero-card-img-container relative overflow-hidden">
        <img
          src={hero.image}
          alt={hero.name}
          className="hero-card-img transform transition-all p-2 duration-700 group-hover:scale-110 group-hover:rotate-1 filter group-hover:brightness-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = buildUrl("placeholder-hero.svg");
          }}
        />
        <div className="hero-card-overlay transition-all duration-500 group-hover:bg-gradient-to-t group-hover:from-black/70 group-hover:to-transparent">
          {/* Badge de rol */}
          <div className="absolute top-8 left-8 flex items-center space-x-2 z-10 transform transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <span className="hero-card-role flex items-center space-x-1 mr-2 mb-2 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              {/* Icono de rol */}
              <span className="animate-pulse">
                {getRoleIcon(hero.originalRole)}{" "}
                <span className={getRoleClass(hero.originalRole)}>{hero.role}</span>
              </span>
            </span>
          </div>

          {/* Badge de dificultad */}
          <div className="absolute top-8 right-8 z-10 mr-3 ml-3 transform transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
            <div className={`${getDifficultyClass(hero.originalDifficulty)} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg animate-bounce`}>
              {hero.difficulty}
            </div>
          </div>
        </div>
      </div>
      {/* Contenido de la tarjeta */}
      <div className="hero-card-body transform transition-all duration-500 group-hover:translate-y-1">
        <h3 className="hero-card-title text-2xl mb-2 group-hover:text-blue-400 transition-all duration-300 transform group-hover:scale-105 group-hover:text-shadow">
          {hero.name}
        </h3>

        <p className="hero-card-universe mb-3 flex items-center transition-all duration-300 group-hover:text-yellow-300">
          <span className="text-blue-400 mr-2 transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-125">🌌</span>
          {hero.universe}
        </p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {/* Tipo de daño */}
          <div className="hero-stat-badge transform transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-gradient-to-r hover:from-red-500/20 hover:to-orange-500/20">
            <span className="icon transform transition-all duration-300 group-hover:animate-pulse">{getDamageTypeIcon(hero.originalDamageType)}</span>
            <span className="text">{hero.damageType}</span>
          </div>

          {/* Rango */}
          <div className="hero-stat-badge transform transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20">
            <span className="icon transform transition-all duration-300 group-hover:animate-pulse">
              {hero.originalRangeType === "Melee" ? "⚔️" : "🏹"}
            </span>
            <span className="text">{hero.rangeType}</span>
          </div>

          {/* Salud */}
          <div className="hero-stat-badge transform transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-gradient-to-r hover:from-green-500/20 hover:to-emerald-500/20">
            <span className="icon transform transition-all duration-300 group-hover:animate-pulse">{getHealthIcon(hero.originalHealthType)}</span>
            <span className="text">{hero.healthType}</span>
          </div>

          {/* Movilidad */}
          <div className="hero-stat-badge transform transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-amber-500/20">
            <span className="icon transform transition-all duration-300 group-hover:animate-pulse">{getMobilityIcon(hero.originalMobility)}</span>
            <span className="text">{hero.mobility}</span>
          </div>
        </div>

        <p className="hero-card-text text-sm mb-4 line-clamp-3 transition-all duration-300 group-hover:text-gray-200">
          {hero.description}
        </p>

        <div className="hero-card-appearance text-xs mb-4 opacity-75 transition-all duration-300 group-hover:opacity-100">
          <span className="text-gray-400">{t('ui.firstAppeared')}</span>{" "}
          {hero.firstAppearance}
        </div>

        <Link
          to={`/hero/${hero.id}`}
          className="flex items-center justify-center"
        >
          <button className="btn btn-primary w-full group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 hover:animate-pulse">
            {t('ui.viewDetails')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroCard;
