import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationPT from './locales/pt-br/translation.json';
import translationEN from './locales/en-us/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: translationPT
      },
      en: {
        translation: translationEN
      }
    },
    lng: "pt", // idioma padrão
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
