// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';

// resources variable removed as it's not used

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      ar: {
        translation: translationAR
      }
    },
    lng: 'ar', // Set default language to arbic
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false
    },

    // Removed unsupported 'dir' property
  });
