import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { perfectFont, perfectHeight, perfectWidth } from 'helpers/responsiveHelpers'
import colors from 'styles/colors'
import Typography from 'components/core/typography/Typography'
import VerticalSpace from 'components/layout/VerticalSpace'
import Row from 'components/layout/Row'
import HorizontalSpace from 'components/layout/HorizontalSpace'
import LanguageTag from 'components/LanguageTag'
import { MovieGeneralInfo } from 'components/movies/MovieGeneralInfo'

type MovieCardProps = {
  title: string
  posterPath: string
  categories: string
  language: string
  releaseDate: string
  voteCount: number
  avgVote: number
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterPath,
  categories,
  language,
  releaseDate,
  voteCount,
  avgVote,
}) => (
  <CardContainer>
    <CardImageBackground
      source={{ uri: `https://image.tmdb.org/t/p/w185${posterPath}` }}
      resizeMode={'stretch'}
    >
      <VerticalSpace height={8} />
      <Row marginLeft={perfectWidth(6)}>
        <LanguageTag language={language} />
        <HorizontalSpace width={100} />
        <Icon name={'heart'} color={colors.wildWatermelon} size={perfectFont(24)} />
      </Row>
    </CardImageBackground>
    <MovieGeneralInfo text={categories} avgVote={avgVote} voteCount={voteCount} />
    <MovieInfo>
      <Typography
        text={title}
        color={colors.mercury}
        size={14}
        fontWeight={'800'}
        marginLeft={perfectWidth(6)}
        marginTop={perfectHeight(4)}
      />
      <Typography
        text={releaseDate}
        color={colors.scarpaFlow}
        size={8}
        fontWeight={'800'}
        marginLeft={perfectWidth(6)}
      />
    </MovieInfo>
  </CardContainer>
)
export default MovieCard

const CardContainer = styled.View`
  width: ${perfectWidth(170)}px;
  height: ${perfectHeight(308)}px;
  border-radius: ${perfectWidth(10)}px;
  border-width: ${perfectWidth(1)}px;
  border-color: ${colors.scarpaFlow};
`

const CardImageBackground = styled.ImageBackground`
  height: ${perfectHeight(220)}px;
`

const MovieInfo = styled.View`
  height: ${perfectHeight(41)}px;
  background-color: ${colors.steelGrayLight};
  justify-content: center;
  border-bottom-right-radius: ${perfectWidth(10)}px;
  border-bottom-left-radius: ${perfectWidth(10)}px;
`
