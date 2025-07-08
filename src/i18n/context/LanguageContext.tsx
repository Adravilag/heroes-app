import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (language: string) => void;
  t: (key: string, options?: any) => string;
  availableLanguages: { code: string; name: string; nativeName: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const { t, i18n } = useTranslation();

  const availableLanguages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' }
  ];

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  // Enhanced t function with better interpolation support
  const tWithInterpolation = (key: string, options?: any): string => {
    try {
      const result = t(key, options);
      console.log(`Translation: ${key} with options:`, options, '→', result);
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

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
