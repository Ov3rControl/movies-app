import React from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Typography from 'components/core/typography/Typography'
import { perfectHeight } from 'helpers/responsiveHelpers'
import colors from 'styles/colors'
import MoviesList from 'components/movies/MoviesList'

const Tab = createMaterialTopTabNavigator()

const HomeTopNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'popularMovies'}
      tabBarPosition='top'
      swipeEnabled
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'green',
        scrollEnabled: true,
        style: styles.containerStyle,
        indicatorStyle: styles.indicatorStyle,
        pressColor: 'transparent',
      }}
    >
      <Tab.Screen
        name={'popularMovies'}
        component={MoviesList}
        options={{
          tabBarLabel: ({ focused }) => (
            <Typography text={'Popular'} color={focused ? colors.white : colors.scarpaFlow} />
          ),
        }}
      />
      <Tab.Screen
        name={'topRated'}
        component={MoviesList}
        options={{
          tabBarLabel: ({ focused }) => (
            <Typography text={'Top Rated'} color={focused ? colors.white : colors.scarpaFlow} />
          ),
        }}
      />
      <Tab.Screen
        name={'upcoming'}
        component={MoviesList}
        options={{
          tabBarLabel: ({ focused }) => (
            <Typography text={'Upcoming'} color={focused ? colors.white : colors.scarpaFlow} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeTopNavigator

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: perfectHeight(8),
    height: perfectHeight(55),
    justifyContent: 'center',
    backgroundColor: colors.steelGray,
  },
  indicatorStyle: {
    height: perfectHeight(1.8),
    backgroundColor: colors.gradientEnd,
    flex: 1,
  },
})
