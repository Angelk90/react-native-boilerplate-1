import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-paper'
import { Common, Fonts, Gutters, Layout } from '@/Theme'
import { useTranslation } from 'react-i18next'
import Settings from '@/Store/Settings/Init'

import { IndexLoginContainer, IndexStartupContainer } from '@/Containers'

const IndexHomeContainer = (props) => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const settings = useSelector((state) => state.settings)

  const back = () => {
    props.navigation.goBack();
    //props.navigation.navigate("Login");
  }

  const changeTheme = () => {
    dispatch(Settings.action({ colorScheme: settings.item.colorScheme === 'dark' ? 'ligth' : 'dark' }))
  }

  return (
    <View style={[
      Layout.fill,
      Layout.colHCenter,
      Gutters.largeHPadding
    ]}>
      <View style={[[
        Layout.colCenter,
        Gutters.largeVPadding,
        //Common.backgroundPrimary
      ]]}>
        <Text>HomePage</Text>
      </View>
      <View
        style={[
          Layout.column,
          //Layout.colHCenter,
          //Gutters.smallHPadding,
          //Gutters.largeVMargin,
          //Layout.fill,
          //Common.backgroundPrimary,
        ]}
      >
        <Text>Message</Text>
        <Button style={[Gutters.largeHMargin, Gutters.largeBMargin]} raised mode="contained" onPress={back}>back</Button>
        <Button style={[Gutters.largeHMargin, Gutters.largeBMargin]} raised mode="contained" onPress={changeTheme}>{t('actions.change')}</Button>
      </View>
    </View>
  )
}

export default IndexHomeContainer
