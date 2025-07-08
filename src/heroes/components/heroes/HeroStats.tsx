import { useContentTranslations } from '../../../i18n/i18n';

interface HeroStatsProps {
  hero: {
    name: string;
    universe: string;
    role: string;
    difficulty?: string | number;
    health?: number;
    mana?: number;
    attack?: number;
  };
}

const HeroStats = ({ hero }: HeroStatsProps) => {
  const { t, translateRole, translateUniverse, translateDifficulty, translateAttribute } = useContentTranslations();

  return (
    <div className="hero-stats">
      <h3>{t('heroes.heroStats')}</h3>
      <div className="stats-grid">
        <div className="stat-item">
          <strong>{translateAttribute('Universe')}:</strong>
          <span>{translateUniverse(hero.universe)}</span>
        </div>
        <div className="stat-item">
          <strong>{translateAttribute('Role')}:</strong>
          <span>{translateRole(hero.role)}</span>
        </div>
        {hero.difficulty && (
          <div className="stat-item">
            <strong>{translateAttribute('Difficulty')}:</strong>
            <span>{translateDifficulty(hero.difficulty)}</span>
          </div>
        )}
        {hero.health && (
          <div className="stat-item">
            <strong>{translateAttribute('Health')}:</strong>
            <span>{hero.health}</span>
          </div>
        )}
        {hero.mana && (
          <div className="stat-item">
            <strong>{translateAttribute('Mana')}:</strong>
            <span>{hero.mana}</span>
          </div>
        )}
        {hero.attack && (
          <div className="stat-item">
            <strong>{translateAttribute('Attack')}:</strong>
            <span>{hero.attack}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroStats;
