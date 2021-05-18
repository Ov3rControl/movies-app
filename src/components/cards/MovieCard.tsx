import React from 'react'
import styled from 'styled-components/native'
import { perfectHeight, perfectWidth } from 'helpers/responsiveHelpers'
import colors from 'styles/colors'
import Typography from 'components/core/typography/Typography'
import { MovieMainInfo } from 'components/movies/MovieMainInfo'

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
    <MovieMainInfo
      posterPath={posterPath}
      language={language}
      categories={categories}
      avgVote={avgVote}
      voteCount={voteCount}
    />
    <MovieExtraInfo>
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
    </MovieExtraInfo>
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

const MovieExtraInfo = styled.View`
  height: ${perfectHeight(41)}px;
  background-color: ${colors.steelGrayLight};
  justify-content: center;
  border-bottom-right-radius: ${perfectWidth(10)}px;
  border-bottom-left-radius: ${perfectWidth(10)}px;
`
