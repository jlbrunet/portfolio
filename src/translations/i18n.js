import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './en.json'
import translationFR from './fr.json'

const userLanguage = navigator.language.split('-')[0]

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      fr: {
        translation: translationFR,
      },
    },
    lng: userLanguage || 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
