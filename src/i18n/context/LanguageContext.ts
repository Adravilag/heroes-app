import { createContext } from 'react';

interface TranslationOptions {
  [key: string]: string | number | boolean;
}

export interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (language: string) => void;
  t: (key: string, options?: TranslationOptions) => string;
  availableLanguages: { code: string; name: string; nativeName: string }[];
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
