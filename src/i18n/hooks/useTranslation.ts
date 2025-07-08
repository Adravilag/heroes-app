import { useLanguage } from '../context/LanguageContext';

export const useTranslation = () => {
  const { t, currentLanguage, changeLanguage, availableLanguages } = useLanguage();

  return {
    t,
    currentLanguage,
    changeLanguage,
    availableLanguages,
    // Funciones de utilidad
    isEnglish: currentLanguage === 'en',
    isSpanish: currentLanguage === 'es',
    toggleLanguage: () => {
      const newLang = currentLanguage === 'en' ? 'es' : 'en';
      changeLanguage(newLang);
    }
  };
};

export default useTranslation;
