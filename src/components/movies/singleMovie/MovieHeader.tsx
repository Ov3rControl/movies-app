import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/EvilIcons'
import AntdIcon from 'react-native-vector-icons/AntDesign'
import Row from 'components/layout/Row'
import colors from 'styles/colors'
import { perfectFont } from 'helpers/responsiveHelpers'
import Typography from 'components/core/typography/Typography'
import VerticalSpace from 'components/layout/VerticalSpace'
import useFavourites from 'store/favourites'

type MovieHeaderProps = {
  id: string
}

export const MovieHeader: React.FC<MovieHeaderProps> = ({ id }) => {
  const navigation = useNavigation()
  const { handleFavouriteAction, isMovieFavoured } = useFavourites(state => state)
  const isMovieInfav = isMovieFavoured(id)
  return (
    <Container>
      <VerticalSpace height={20} />
      <Row width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
        <Back onPress={() => navigation.goBack()}>
          <Icon name={'chevron-left'} color={colors.stormGray} size={perfectFont(32)} />
          <Typography
            text={'Back'}
            color={colors.stormGray}
            size={12}
            fontWeight={'300'}
            fontFamily={'Gilroy-Light'}
          />
        </Back>
        <AntdIcon
          name={'heart'}
          color={isMovieInfav ? colors.wildWatermelon : colors.white}
          size={perfectFont(16)}
          onPress={() => handleFavouriteAction(id)}
        />
      </Row>
    </Container>
  )
}

const Container = styled.View`
  width: 95%;
  align-items: center;
  justify-content: center;
`

const Back = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`
