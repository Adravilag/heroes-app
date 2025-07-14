import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';
import heroesEn from './locales/heroes-en.json';
import heroesEs from './locales/heroes-es.json';

const resources = {
  en: {
    translation: en,
    heroes: heroesEn
  },
  es: {
    translation: es,
    heroes: heroesEs
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // idioma por defecto
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'heroes-app-language'
    }
  });

export default i18n;
