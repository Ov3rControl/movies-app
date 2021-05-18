import React, { useCallback } from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { perfectHeight, perfectWidth } from 'helpers/responsiveHelpers'
import colors from 'styles/colors'
import Typography from 'components/core/typography/Typography'
import { MovieMainInfo } from 'components/movies/MovieMainInfo'

type MovieCardProps = {
  id: number
  title: string
  posterPath: string
  language: string
  releaseDate: string
  voteCount: number
  avgVote: number
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterPath,
  language,
  releaseDate,
  voteCount,
  avgVote,
  id,
}) => {
  const navigation = useNavigation()

  const handleCardPress = useCallback(() => {
    navigation.navigate('movieDetails', { movieId: id })
  }, [id, navigation])

  return (
    <CardContainer onPress={handleCardPress}>
      <MovieMainInfo
        posterPath={posterPath}
        language={language}
        releaseDate={releaseDate}
        avgVote={avgVote}
        voteCount={voteCount}
      />
      <MovieExtraInfo>
        <Typography
          text={title}
          color={colors.mercury}
          size={12}
          fontWeight={'800'}
          marginLeft={perfectWidth(6)}
          marginTop={perfectHeight(4)}
        />
      </MovieExtraInfo>
    </CardContainer>
  )
}
export default MovieCard

const CardContainer = styled.TouchableOpacity`
  width: ${perfectWidth(170)}px;
  height: ${perfectHeight(308)}px;
  border-radius: ${perfectWidth(10)}px;
  border-width: ${perfectWidth(1)}px;
  border-color: ${colors.scarpaFlow};
`

const MovieExtraInfo = styled.View`
  height: ${perfectHeight(41)}px;
  background-color: ${colors.steelGrayLight};
  justify-content: center;
  border-bottom-right-radius: ${perfectWidth(10)}px;
  border-bottom-left-radius: ${perfectWidth(10)}px;
`
