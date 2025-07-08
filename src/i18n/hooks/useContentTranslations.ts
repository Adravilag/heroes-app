import { useLanguage } from '../context/LanguageContext';

export const useContentTranslations = () => {
  const { t } = useLanguage();

  const translateRole = (role: string): string => {
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

  const translateUniverse = (universe: string): string => {
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

  const translateDifficulty = (difficulty: string | number): string => {
    if (typeof difficulty === 'number') {
      if (difficulty <= 2) return t('common.easy');
      if (difficulty <= 4) return t('common.medium');
      return t('common.hard');
    }
    
    const difficultyMap: { [key: string]: string } = {
      'Easy': t('common.easy'),
      'Medium': t('common.medium'),
      'Hard': t('common.hard'),
      'Very Easy': t('common.veryEasy'),
      'Very Hard': t('common.veryHard'),
    };
    return difficultyMap[difficulty] || difficulty;
  };

  const translateAttribute = (attribute: string): string => {
    const attributeMap: { [key: string]: string } = {
      'Health': t('heroes.health'),
      'Mana': t('heroes.mana'),
      'Attack': t('heroes.attack'),
      'Difficulty': t('heroes.difficulty'),
      'Type': t('heroes.type'),
      'Franchise': t('heroes.franchise'),
      'Release Date': t('heroes.releaseDate'),
      'Universe': t('heroes.universe'),
      'Role': t('heroes.role'),
    };
    return attributeMap[attribute] || attribute;
  };

  return {
    translateRole,
    translateUniverse,
    translateDifficulty,
    translateAttribute,
    t
  };
};

export default useContentTranslations;
