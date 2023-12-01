import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './en.json'
import translationFR from './fr.json'

const userLanguage = navigator.language.split('-')[0]
const storedLanguage = localStorage.getItem('selectedLanguage')

let language = "fr"

if (storedLanguage) {
  language = storedLanguage
} else if (userLanguage) {
  language = userLanguage
}

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
    lng: language,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
