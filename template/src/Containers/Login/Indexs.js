import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, ActivityIndicator, ScrollView } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'

import { Brand } from '@/Components'
import { Common, Fonts, Gutters, Layout } from '@/Theme'
import FetchOne from '@/Store/User/FetchOne'
import { useTranslation } from 'react-i18next'

import Settings from '@/Store/Settings/Init'

const IndexLoginContainer = (props) => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  useEffect(() => {
    //dispatch(Settings.action({a: "b", c: "d"}))
  }, []);

  const user = useSelector((state) => state.user.item)
  const fetchOneUserLoading = useSelector(
    (state) => state.user.fetchOne.loading,
  )
  const fetchOneUserError = useSelector((state) => state.user.fetchOne.error)

  const [userId, setUserId] = useState('1')

  const fetch = (id) => {
    setUserId(id)
    dispatch(FetchOne.action(id))
    //dispatch(Settings.action({a: "b", c: "d"}))
  }

  let [state, setState] = useState({
    email: "",
    password: "",
    showPassword: false
  });

  const { email, password, showPassword } = state;

  const settings = useSelector((state) => state.settings)

  const changeTheme = () => {
    dispatch(Settings.action({ colorScheme: settings.item.colorScheme === 'dark' ? 'ligth' : 'dark' }))
  }

  const login = () => {
    props.navigation.navigate("Homepage");
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
        <Brand />
        {fetchOneUserLoading && <ActivityIndicator />}
        {fetchOneUserError ? (
          <Text>{fetchOneUserError.message}</Text>
        ) : (
          <Text>{t('example.helloUser', { name: user.name })}</Text>
        )}
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
          mode='outlined'
          label={t('example.labels.userId')}
          onChangeText={(text) => fetch(text)}
          editable={!fetchOneUserLoading}
          keyboardType={'number-pad'}
          maxLength={1}
          value={userId}
          selectTextOnFocus
          style={[Gutters.largeBPadding]}
        />
        <TextInput
          label={t('email')}
          value={email}
          mode="outlined"
          onChangeText={(email) =>
            setState((prev) => ({ ...prev, email }))
          }
          style={[Gutters.largeBPadding]}
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
          style={[Gutters.largeBPadding]}
        />
        <Button style={[Gutters.largeHMargin, Gutters.largeBMargin]} raised mode="contained" onPress={changeTheme}>{t('actions.change')}</Button>
        <Button style={[Gutters.largeHMargin]} raised mode="contained" onPress={login}>{t('actions.login')}</Button>
      </View>
    </View>
  )
}

export default IndexLoginContainer
