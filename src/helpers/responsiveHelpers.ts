import { Dimensions } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const screenHeight = Dimensions.get('window').height
export const screenWidth = Dimensions.get('window').width

const viewPortSize = { width: 375, height: 812 }

export const perfectWidth = (value: number): number =>
  widthPercentageToDP((value / viewPortSize.width) * 100)

export const perfectHeight = (value: number): number =>
  heightPercentageToDP((parseFloat(String(value)) / viewPortSize.height) * 100)

export const perfectFont = (value: number): number =>
  RFPercentage((value / viewPortSize.height) * 100)
