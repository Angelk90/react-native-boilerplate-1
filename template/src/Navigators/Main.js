import React from 'react'
import { useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexInstallationContainer, IndexLoginContainer, IndexForgotContainer, IndexHomeContainer } from '@/Containers'

const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = () => {
  const isConfiguration = useSelector((state) => state.settings.item.configuration)

  return (
    <Stack.Navigator headerMode={'none'}>
      {!isConfiguration && <Stack.Screen name="Installation" component={IndexInstallationContainer} />}
      <Stack.Screen name="Login" component={IndexLoginContainer} />
      <Stack.Screen name="Forgot" component={IndexForgotContainer} />
      <Stack.Screen name="Homepage" component={IndexHomeContainer} />
    </Stack.Navigator>
  )
}

export default MainNavigator
