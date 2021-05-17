import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
import Home from 'screens/home/Home'

const MainNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={'home'} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
