import React from 'react'
import VerticalSpace from 'components/layout/VerticalSpace'
import Row from 'components/layout/Row'
import { perfectHeight, perfectWidth } from 'helpers/responsiveHelpers'
import LanguageTag from 'components/LanguageTag'
import HorizontalSpace from 'components/layout/HorizontalSpace'
import styled from 'styled-components/native'
import { MovieGeneralInfo } from 'components/movies/MovieGeneralInfo'

type MovieMainInfoProps = {
  posterPath: string
  language: string
  categories?: string
  releaseDate?: string
  avgVote: number
  voteCount: number
}

export const MovieMainInfo: React.FC<MovieMainInfoProps> = ({
  posterPath,
  language,
  avgVote,
  categories,
  releaseDate,
  voteCount,
}) => {
  return (
    <Container>
      <CardImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w185${posterPath}` }}
        resizeMode={'stretch'}
      >
        <VerticalSpace height={8} />
        <Row marginLeft={perfectWidth(6)}>
          <LanguageTag language={language} />
          <HorizontalSpace width={100} />
        </Row>
      </CardImageBackground>
      {
        <MovieGeneralInfo
          text={categories || releaseDate || '-'}
          avgVote={avgVote}
          voteCount={voteCount}
        />
      }
    </Container>
  )
}

const Container = styled.View`
  justify-content: center;
  width: ${perfectWidth(166)}px;
`

const CardImageBackground = styled.ImageBackground`
  height: ${perfectHeight(220)}px;
`
