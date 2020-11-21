/**
 * This file defines the base application theme.
 *
 */
 import {
   DefaultTheme as PaperDefaultTheme,
   DarkTheme as PaperDarkTheme
 } from 'react-native-paper'
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native'
import { Colors, ColorsDarkMode } from '@/Theme'

export const PaperThemeDefault = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: Colors.primary,
    background: Colors.backgroundSecondary
  }
}

export const PaperThemeDark = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    primary: ColorsDarkMode.primary,
    background: ColorsDarkMode.backgroundSecondary
  }
}

export const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme
}

export const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    background: ColorsDarkMode.backgroundPrimary,
    //card: ColorsDarkMode.backgroundSecondary,
    text: ColorsDarkMode.white
  }
}
