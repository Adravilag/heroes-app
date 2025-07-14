import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from './LanguageContext';

interface LanguageProviderProps {
  children: ReactNode;
}

const LANGUAGE_STORAGE_KEY = 'heroes-app-language';

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  const availableLanguages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' }
  ];

  // Inicializar idioma desde localStorage al montar el componente
  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage && availableLanguages.some(lang => lang.code === savedLanguage)) {
      i18n.changeLanguage(savedLanguage).then(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [i18n]);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    // Guardar idioma en localStorage
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  };

  // Enhanced t function with better interpolation support
  const tWithInterpolation = (key: string, options?: { [key: string]: string | number | boolean }): string => {
    try {
      const result = t(key, options);
      return typeof result === 'string' ? result : key;
    } catch (error) {
      console.error(`Translation error for key ${key}:`, error);
      return key;
    }
  };

  const value = {
    currentLanguage: i18n.language,
    changeLanguage,
    t: tWithInterpolation,
    availableLanguages
  };

  if (loading) {
    return null; // O un loader/spinner si prefieres
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
