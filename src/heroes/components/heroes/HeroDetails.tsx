import {
  getRoleIcon,
  getDamageTypeIcon,
  getHealthIcon,
  getMobilityIcon,
  getDifficultyClass,
} from "../../helpers";
import { useLanguage } from "../../../i18n/i18n";
import type { TranslatedHero } from "../../hooks/useTranslatedHeroes";

const HeroDetails = ({
  selectedHero,
  setSelectedHero,
}: {
  selectedHero: TranslatedHero | null;
  setSelectedHero: (hero: TranslatedHero | null) => void;
}) => {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Modal de detalles del héroe */}
      {selectedHero && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedHero(null)}
        >
          <div
            className="hero-modal rounded-2xl p-8 max-w-2xl w-full max-h-90vh overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold text-white">
                {selectedHero.name}
              </h3>
              <button
                onClick={() => setSelectedHero(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedHero.image}
                  alt={selectedHero.name}
                  className="hero-modal-image w-full"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <span className="hero-card-role floating">
                    {getRoleIcon(selectedHero.originalRole)} {selectedHero.role}
                  </span>
                </div>

                <div className="text-blue-400">🌌 {selectedHero.universe}</div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="hero-modal-stat">
                    <div className="text-gray-400 text-sm">{t('ui.difficulty')}</div>
                    <div
                      className={`${getDifficultyClass(
                        selectedHero.originalDifficulty
                      )} mt-1`}
                    >
                      {selectedHero.difficulty}
                    </div>
                  </div>

                  <div className="hero-modal-stat">
                    <div className="text-gray-400 text-sm">{t('ui.damageType')}</div>
                    <div className="text-white mt-1">
                      {getDamageTypeIcon(selectedHero.originalDamageType)}{" "}
                      {selectedHero.damageType}
                    </div>
                  </div>

                  <div className="hero-modal-stat">
                    <div className="text-gray-400 text-sm">{t('ui.range')}</div>
                    <div className="text-white mt-1">
                      {selectedHero.originalRangeType === "Melee" ? "⚔️" : "🏹"}{" "}
                      {selectedHero.rangeType}
                    </div>
                  </div>

                  <div className="hero-modal-stat">
                    <div className="text-gray-400 text-sm">{t('ui.health')}</div>
                    <div className="text-white mt-1">
                      {getHealthIcon(selectedHero.originalHealthType)}{" "}
                      {selectedHero.healthType}
                    </div>
                  </div>

                  <div className="hero-modal-stat col-span-2">
                    <div className="text-gray-400 text-sm">{t('ui.mobility')}</div>
                    <div className="text-white mt-1">
                      {getMobilityIcon(selectedHero.originalMobility)}{" "}
                      {selectedHero.mobility}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-gray-400 text-sm mb-2">{t('ui.description')}</div>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedHero.description}
                  </p>
                </div>

                <div>
                  <div className="text-gray-400 text-sm">{t('ui.firstAppearance')}</div>
                  <div className="text-gray-300">
                    {selectedHero.firstAppearance}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroDetails;
