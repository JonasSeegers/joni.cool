import i18next from 'i18next';
import de from '../translations/de.json';

i18next.init({
  fallbackLng: 'de',
  resources: { de: { translation: de } },

  interpolation: {
    escapeValue: false
  }
});

export default i18next;
