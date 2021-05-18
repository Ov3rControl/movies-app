import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'
import { perfectHeight, perfectWidth } from 'helpers/responsiveHelpers'
import VerticalSpace from 'components/layout/VerticalSpace'
import Typography from 'components/core/typography/Typography'
import colors from 'styles/colors'

type SimilarMovieCardProps = {
  title: string
  posterPath: string
  id: string
}

const SimilarMovieCard: React.FC<SimilarMovieCardProps> = ({ id, title, posterPath }) => {
  const navigation = useNavigation()
  return (
    <Container onPress={() => navigation.navigate('movieDetails', { movieId: id })}>
      <CardImage
        source={{ uri: `https://image.tmdb.org/t/p/w185/${posterPath}` }}
        resizeMode={'stretch'}
      />
      <VerticalSpace height={6} />
      <Typography
        text={title}
        color={colors.mercury}
        size={12}
        fontFamily={'Gilroy-Light'}
        marginLeft={perfectWidth(4)}
        maxWidth={perfectWidth(80)}
      />
    </Container>
  )
}

export default SimilarMovieCard

const Container = styled.TouchableOpacity`
  margin-right: ${perfectWidth(8)}px;
`
const CardImage = styled.Image`
  width: ${perfectWidth(80)}px;
  height: ${perfectHeight(80)}px;
  border-radius: ${perfectWidth(4)}px;
`
