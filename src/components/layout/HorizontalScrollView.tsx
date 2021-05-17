import React from 'react'
import { ViewStyle } from 'react-native'
import styled from 'styled-components/native'
import { screenWidth } from 'helpers/responsiveHelpers'

type HorizontalScrollViewProps = {
  children?: React.ReactNode
} & ViewStyle

const HorizontalScrollView: React.FC<HorizontalScrollViewProps> = ({ children, ...props }) => (
  <ScrollView showsHorizontalScrollIndicator={false} horizontal {...props}>
    {children}
  </ScrollView>
)

export default HorizontalScrollView

const ScrollView = styled.ScrollView`
  width: ${screenWidth * 0.915}px;
`
