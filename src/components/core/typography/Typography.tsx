import React from 'react'
import { TextStyle } from 'react-native'
import styled from 'styled-components/native'
import colors from 'styles/colors'
import { perfectFont, perfectHeight } from 'helpers/responsiveHelpers'
import { isIos } from 'helpers/generalHelpers'

type TypographyProps = {
  text: string
  size?: number
} & TextStyle

const Typography: React.FC<TypographyProps> = ({
  text,
  color = colors.white,
  size = 14,
  fontFamily = 'Gilroy-Bold',
  ...props
}: TypographyProps) => {
  return (
    <Text
      size={size}
      fontFamily={isIos() ? 'American Typewriter' : fontFamily}
      color={color}
      style={{ ...props }}
    >
      {text}
    </Text>
  )
}

export default Typography

type TextProps = {
  color?: string
  size: number
  fontFamily?: string
  textAlign?: string
  [anyOtherProp: string]: any
}

const Text = styled.Text<TextProps>`
  font-family: ${props => props.fontFamily};
  font-size: ${props => perfectFont(props.size)}px;
  font-weight: 800;
  line-height: ${perfectHeight(20)}px;
  color: ${props => props.color};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`}
`
