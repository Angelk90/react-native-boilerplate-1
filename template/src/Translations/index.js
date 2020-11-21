import { NativeModules } from 'react-native'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as resources from './resources'

const deviceLanguage = (Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier
  ).split('_')[0]

const lang = Object.keys(resources).includes(deviceLanguage)

i18n.use(initReactI18next).init({
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {},
    ),
  },
  lng: lang ? deviceLanguage : 'en',
})

export default i18n
