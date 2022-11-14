import {I18nManager} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import {I18n} from 'i18n-js';
// import en from './locals/en.json';
// import fr from './locals/fr.json';

export const SUPPORTED_LANGUAGES = {
  EN: 'en',
  FR: 'fr',
};

const translationGetters = {
  en: () => getTranslationFiles(SUPPORTED_LANGUAGES.EN),
  fr: () => getTranslationFiles(SUPPORTED_LANGUAGES.FR),
};
const i18n = new I18n(translationGetters);

function getTranslationFiles(language = SUPPORTED_LANGUAGES.EN) {
  let baseTranslationFiles: null;
  switch (language) {
    case SUPPORTED_LANGUAGES.EN: {
      baseTranslationFiles = require('./locals/en.json');
      break;
    }
    case SUPPORTED_LANGUAGES.FR: {
      baseTranslationFiles = require('./locals/fr.json');
      break;
    }
    default: {
      baseTranslationFiles = require('./locals/en.json');
      break;
    }
  }

  return baseTranslationFiles;
}

export const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = {languageTag: 'en', isRTL: false};

  const {languageTag, isRTL} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};

  i18n.locale = languageTag;
  i18n.enableFallback = true;
};

export default i18n;
