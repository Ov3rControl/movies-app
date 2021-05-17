import React from 'react'
import styled from 'styled-components/native'
import { I18nManager, TextInputProps as TextInputRNType } from 'react-native'
import { RFValue as perfectFont } from 'react-native-responsive-fontsize'
import Icon from 'react-native-vector-icons/AntDesign'
import Row from 'components/layout/Row'
import { perfectHeight, perfectWidth } from 'helpers/responsiveHelpers'
import colors from 'styles/colors'

const TextInput: React.FC<TextInputRNType> = ({ placeholder, onChangeText }) => {
  return (
    <Row
      borderRadius={perfectWidth(10)}
      backgroundColor={colors.steelGray}
      width={'100%'}
      alignItems={'center'}
    >
      <InputField
        placeholder={placeholder}
        backgroundColor={colors.steelGray}
        onChangeText={onChangeText}
      />
      <Icon name={'search1'} color={colors.stormGray} size={perfectFont(24)} />
    </Row>
  )
}

export default TextInput

type InputFieldProps = {
  backgroundColor: string
}

export const InputField = styled.TextInput.attrs({
  fontFamily: 'Gilroy-Bold',
  placeholderTextColor: colors.white,
})<InputFieldProps>`
  font-family: Lato-Regular;
  background-color: ${props => props.backgroundColor};
  text-align: ${I18nManager.isRTL ? 'right' : 'left'};
  font-size: ${perfectFont(16)}px;
  color: ${colors.white};
  height: ${perfectHeight(46)}px;
  padding-horizontal: ${perfectWidth(17)}px;
  border-radius: ${perfectWidth(10)}px;
  flex-direction: row;
  flex: 1;
`
