
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import en from './trans/en';
import es from './trans/es';
import it from './trans/it';
const resources = {
    en : {
        translation: en
    },

    es : {
      translation : es
    },
    it : {
      translation: it
    }
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    
    debug: true,
    fallbackLng: 'en',
    lng: JSON.parse(localStorage.getItem('language', 'en')),
    saveMissing: true 
  });

export default i18n;