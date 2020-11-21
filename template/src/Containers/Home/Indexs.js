import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-paper'
import { Common, Fonts, Gutters, Layout } from '@/Theme'

import { IndexLoginContainer, IndexStartupContainer } from '@/Containers'

const IndexHomeContainer = (props) => {
  const [index, setIndex] = useState(0);

  const back = () => {
    //props.navigation.goBack();
    //props.navigation.navigate("Login");
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
        <Button style={[Gutters.largeHMargin]} raised mode="contained" onPress={back}>back</Button>
      </View>
    </View>
  )
}

export default IndexHomeContainer
