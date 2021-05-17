import React from 'react'
import styled from 'styled-components/native'
import colors from 'styles/colors'
import { screenWidth } from 'helpers/responsiveHelpers'

type ScreenContainerNoScrollProps = {
  backgroundColor?: string
  widthPercentage?: number
  children: React.ReactNode
}

const ScreenContainerNoScroll: React.FC<ScreenContainerNoScrollProps> = ({
  backgroundColor = colors.steelGray,
  widthPercentage = 0.915,
  children,
}) => {
  return (
    <Container backgroundColor={backgroundColor} widthPercentage={widthPercentage}>
      {children}
    </Container>
  )
}

export default ScreenContainerNoScroll

type ContainerProps = {
  backgroundColor: string
  widthPercentage: number
}

const Container = styled.View<ContainerProps>`
  width: ${props => screenWidth * props.widthPercentage}px;
  align-self: center;
  background-color: ${props => props.backgroundColor};
  flex: 1;
`
