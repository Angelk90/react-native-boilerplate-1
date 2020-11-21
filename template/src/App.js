import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { Provider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar, SafeAreaView, useColorScheme } from 'react-native'
import { navigationRef } from '@/Navigators/Root'
import { ApplicationNavigator } from '@/Navigators'
import {
  Layout,
  Colors,
  ColorsDarkMode,
  PaperThemeDefault,
  PaperThemeDark,
  CombinedDefaultTheme,
  CombinedDarkTheme
} from '@/Theme'
import i18n from './Translations'

const Root = () => {
  const colorScheme = useColorScheme()
  const settings = useSelector((state) => state.settings)
  console.log("S:", settings)

  const isDark = settings.item.colorScheme === 'dark'
  const [paperTheme, navigationTheme, backgroundColor] = isDark
     ? [PaperThemeDark, CombinedDarkTheme, ColorsDarkMode.backgroundPrimary]
     : [PaperThemeDefault, CombinedDefaultTheme, Colors.backgroundPrimary]

  useEffect(() => {
    i18n.changeLanguage(settings.item.lang)
  }, [settings]);

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <StatusBar barStyle={`${isDark ? 'light' : 'dark'}-content`} backgroundColor={backgroundColor}/>
        <SafeAreaView style={[ Layout.fill, { backgroundColor } ]}>
          <ApplicationNavigator/>
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default () => (
    <Provider store={store}>
      {/**
       * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
       * and saved to redux.
       * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
       * for example `loading={<SplashScreen />}`.
       * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
       */}
      <PersistGate loading={null} persistor={persistor}>
        <Root/>
      </PersistGate>
    </Provider>
)
