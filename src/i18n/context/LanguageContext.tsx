import { createContext } from 'react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface TranslationOptions {
  [key: string]: string | number | boolean;
}

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (language: string) => void;
  t: (key: string, options?: TranslationOptions) => string;
  availableLanguages: { code: string; name: string; nativeName: string }[];
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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
  const tWithInterpolation = (key: string, options?: TranslationOptions): string => {
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
