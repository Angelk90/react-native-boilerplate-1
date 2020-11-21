import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, ActivityIndicator, ScrollView } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'

import { Brand } from '@/Components'
import { Common, Fonts, Gutters, Layout } from '@/Theme'
import { useTranslation } from 'react-i18next'


const IndexLoginContainer = (props) => {
  const { t } = useTranslation()

  let [state, setState] = useState({
    email: "",
    password: "",
    showPassword: false
  });

  const { email, password, showPassword } = state;

  const login = () => props.navigation.navigate("Homepage");
  const forgot = () => props.navigation.navigate("Forgot");

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
        <Brand />
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
        <TextInput
          label={t('email')}
          value={email}
          mode="outlined"
          onChangeText={(email) =>
            setState((prev) => ({ ...prev, email }))
          }
          style={[Gutters.largeBMargin]}
        />
        <TextInput
          right={
            <TextInput.Icon
              name={showPassword ? 'eye' : 'eye-off'}
              onPress={() =>
                setState((prev) => ({
                  ...prev,
                  showPassword: !prev.showPassword,
                }))
              }
            />
          }
          label={t('password')}
          value={password}
          mode="outlined"
          secureTextEntry={!showPassword}
          onChangeText={(password) =>
            setState((prev) => ({ ...prev, password }))
          }
          style={[Gutters.smallBMargin]}
        />
        <View style={[Gutters.largeVMargin, Layout.alignItemsEnd]}>
          <Text onPress={forgot}>Forgot your password?</Text>
        </View>
        <Button style={[Gutters.largeHMargin]} raised mode="contained" onPress={login}>{t('actions.login')}</Button>
      </View>
    </View>
  )
}

export default IndexLoginContainer
