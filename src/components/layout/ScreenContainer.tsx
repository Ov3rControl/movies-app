import React from 'react'
import styled from 'styled-components/native'
import colors from 'styles/colors'
import { screenWidth } from 'helpers/responsiveHelpers'

type ScreenContainerProps = {
  backgroundColor?: string
  widthPercentage?: number
  children: React.ReactNode
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  backgroundColor = colors.steelGray,
  widthPercentage = 0.915,
  children,
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      widthPercentage={widthPercentage}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </Container>
  )
}

export default ScreenContainer

type ContainerProps = {
  backgroundColor: string
  widthPercentage: number
}

const Container = styled.ScrollView<ContainerProps>`
  width: ${props => screenWidth * props.widthPercentage}px;
  align-self: center;
  flex: 1;
  background-color: ${props => props.backgroundColor};
`
