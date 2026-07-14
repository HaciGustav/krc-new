import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './de.json';
import tr from './tr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      tr: { translation: tr }
    },
    lng: "de", 
    fallbackLng: "de",
    interpolation: { escapeValue: false }
  });

export default i18n;