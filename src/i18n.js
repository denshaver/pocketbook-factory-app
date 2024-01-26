import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import en from './translations/en';
import es from './translations/es';
import it from './translations/it';
import ua from './translations/ua';
import ru from './translations/ru';
import pl from './translations/pl';
import de from './translations/de';
import cz from './translations/cz';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
  it: {
    translation: it,
  },
  ua: {
    translation: ua,
  },
  ru: {
    translation: ru,
  },
  pl: {
    translation: pl,
  },
  de: {
    translation: de,
  },
  cz: {
    translation: cz,
  },
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  resources,
  debug: true,
  fallbackLng: 'de',
  lng: 'de',
  saveMissing: true,
});

export default i18n;
