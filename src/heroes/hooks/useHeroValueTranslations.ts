import { useLanguage } from '../../i18n/i18n';

/**
 * Hook personalizado para traducir valores de héroes
 */
export const useHeroValueTranslations = () => {
  const { t } = useLanguage();

  const translateRole = (role: string) => {
    const roleKey = role.toLowerCase().replace(/\s+/g, '');
    const roleMap: { [key: string]: string } = {
      'tank': 'roles.tank',
      'healer': 'roles.healer',
      'bruiser': 'roles.bruiser',
      'meleeassassin': 'roles.melee',
      'rangedassassin': 'roles.ranged',
      'support': 'roles.support',
      'specialist': 'roles.specialist',
      'multiclass': 'roles.multiclass',
    };
    return t(roleMap[roleKey] || 'roles.tank');
  };

  const translateDifficultyClass = (difficulty: string) => {
    const difficultyKey = difficulty.toLowerCase().replace(/\s+/g, '');
    const difficultyMap: { [key: string]: string } = {
      'easy': 'difficulty.easy',
      'medium': 'difficulty.medium',
      'hard': 'difficulty.hard',
      'veryhard': 'difficulty.veryHard',
    };
    return t(difficultyMap[difficultyKey] || 'difficulty.medium');
  };

  const translateUniverse = (universe: string) => {
    const universeKey = universe.toLowerCase().replace(/\s+/g, '');
    const universeMap: { [key: string]: string } = {
      'warcraft': 'universes.warcraft',
      'starcraft': 'universes.starcraft',
      'diablo': 'universes.diablo',
      'overwatch': 'universes.overwatch',
      'classic': 'universes.classic',
      'nexus': 'universes.nexus',
    };
    return t(universeMap[universeKey] || 'universes.nexus');
  };

  const translateDamageType = (damageType: string) => {
    const damageMap: { [key: string]: string } = {
      'Physical': 'damageTypes.Physical',
      'Magical': 'damageTypes.Magical',
      'Mixed': 'damageTypes.Mixed',
    };
    return t(damageMap[damageType] || 'damageTypes.Physical');
  };

  const translateHealthType = (healthType: string) => {
    const healthMap: { [key: string]: string } = {
      'Low': 'healthTypes.Low',
      'Medium': 'healthTypes.Medium',
      'High': 'healthTypes.High',
      'Very High': 'healthTypes.Very High',
    };
    return t(healthMap[healthType] || 'healthTypes.Medium');
  };

  const translateMobilityType = (mobilityType: string) => {
    const mobilityMap: { [key: string]: string } = {
      'Low': 'mobilityTypes.Low',
      'Medium': 'mobilityTypes.Medium',
      'High': 'mobilityTypes.High',
      'Very High': 'mobilityTypes.Very High',
    };
    return t(mobilityMap[mobilityType] || 'mobilityTypes.Medium');
  };

  return {
    translateRole,
    translateDifficultyClass,
    translateUniverse,
    translateDamageType,
    translateHealthType,
    translateMobilityType,
  };
};
