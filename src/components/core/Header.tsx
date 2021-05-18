import React from 'react'
import { Platform } from 'react-native'
import styled from 'styled-components/native'
import { perfectHeight, screenWidth } from 'helpers/responsiveHelpers'
import colors from 'styles/colors'

type HeaderProps = {
  children?: React.ReactNode
}

const Header: React.FC = ({ children }: HeaderProps) => {
  return (
    <>
      <SafeArea />
      <Container>{children}</Container>
    </>
  )
}

export default Header

const SafeArea = styled.SafeAreaView`
  width: ${screenWidth}px;
  background-color: ${colors?.steelGray};
`

const Container = styled.View`
  width: 100%;
  align-self: center;
  background-color: ${colors.steelGray};
  padding-top: ${Platform.OS === 'android' ? perfectHeight(44) : 0}px;
`
