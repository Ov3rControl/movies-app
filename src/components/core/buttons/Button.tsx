import React from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import colors from 'styles/colors'
import { perfectHeight, perfectWidth } from 'helpers/responsiveHelpers'

type ButtonProps = {
  onPress: () => void
  children: React.ReactNode
} & ViewStyle

const Button: React.FC<ButtonProps> = ({ onPress, children, ...props }) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientEnd]}
      style={[styles.linearGradient, { ...props }]}
    >
      {children}
    </LinearGradient>
  </TouchableOpacity>
)

export default Button

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: perfectWidth(12),
    flexDirection: 'row',
    width: perfectWidth(160),
    height: perfectHeight(32),
  },
})
