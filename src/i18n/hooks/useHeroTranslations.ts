import { useTranslation } from 'react-i18next';

export const useHeroTranslations = () => {
  const { t, i18n } = useTranslation('heroes');
  const currentLanguage = i18n.language;
  
  const translateRole = (role: string): string => {
    return t(`roles.${role}`, { defaultValue: role });
  };
  
  const translateUniverse = (universe: string): string => {
    return t(`universes.${{universe}}`, { defaultValue: universe });
  };
  
  const translateDifficulty = (difficulty: string): string => {
    return t(`difficulty.${difficulty}`, { defaultValue: difficulty });
  };
  
  const translateDamageType = (damageType: string): string => {
    return t(`damageType.${damageType}`, { defaultValue: damageType });
  };
  
  const translateRangeType = (rangeType: string): string => {
    return t(`rangeType.${rangeType}`, { defaultValue: rangeType });
  };
  
  const translateHealthType = (healthType: string): string => {
    return t(`healthType.${healthType}`, { defaultValue: healthType });
  };
  
  const translateMobility = (mobility: string): string => {
    return t(`mobility.${mobility}`, { defaultValue: mobility });
  };
  
  const translateHeroName = (heroName: string): string => {
    return t(`heroNames.${heroName}`, { defaultValue: heroName });
  };
  
  const translateHeroDescription = (heroKey: string): string => {
    return t(`heroDescriptions.${heroKey}`, { defaultValue: '' });
  };
  
  return {
    translateRole,
    translateUniverse,
    translateDifficulty,
    translateDamageType,
    translateRangeType,
    translateHealthType,
    translateMobility,
    translateHeroName,
    translateHeroDescription,
    currentLanguage: currentLanguage
  };
};

export default useHeroTranslations;
