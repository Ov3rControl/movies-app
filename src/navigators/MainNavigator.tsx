import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import HomeBottomNavigator from 'navigators/HomeBottomNavigator'

const MainNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={'home'} component={HomeBottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
