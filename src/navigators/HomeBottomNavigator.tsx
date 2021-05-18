import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/AntDesign'
import ProfileScreen from 'screens/profile/Profile'
import FavoriteScreen from 'screens/favourites/Favourites'
import Home from 'screens/home/Home'
import { StyleSheet } from 'react-native'
import { perfectHeight } from 'helpers/responsiveHelpers'
import colors from 'styles/colors'

const HomeBottomNavigator = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.radicalRed,
        inactiveTintColor: colors.cadetBlue,
        style: styles.containerStyle,
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Icon name='home' color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='Favorite'
        component={FavoriteScreen}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ color, size }) => <Icon name='book' color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <Icon name='profile' color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeBottomNavigator

const styles = StyleSheet.create({
  containerStyle: {
    height: perfectHeight(55),
    borderTopWidth: 0,
    justifyContent: 'center',
    backgroundColor: colors.steelGray,
  },
})
