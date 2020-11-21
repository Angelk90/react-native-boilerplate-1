import React, { useEffect } from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { useDispatch } from 'react-redux'

import { Brand } from '@/Components'
import { Layout, Gutters } from '@/Theme'
import InitStartup from '@/Store/Startup/Init'

const IndexSplashScreenContainer = ({ navigation }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(InitStartup.action())
  }, [dispatch])

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size='large' style={[Gutters.largeVMargin]} />
    </View>
  )
}

export default IndexSplashScreenContainer
