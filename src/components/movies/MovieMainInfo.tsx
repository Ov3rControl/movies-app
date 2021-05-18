import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import VerticalSpace from 'components/layout/VerticalSpace'
import Row from 'components/layout/Row'
import { perfectFont, perfectHeight, perfectWidth } from 'helpers/responsiveHelpers'
import LanguageTag from 'components/LanguageTag'
import HorizontalSpace from 'components/layout/HorizontalSpace'
import colors from 'styles/colors'
import styled from 'styled-components/native'
import { MovieGeneralInfo } from 'components/movies/MovieGeneralInfo'

type MovieMainInfoProps = {
  posterPath: string
  language: string
  categories?: string
  releaseDate?: string
  avgVote: number
  voteCount: number
  isFavCard?: boolean
}

export const MovieMainInfo: React.FC<MovieMainInfoProps> = ({
  posterPath,
  language,
  avgVote,
  categories,
  releaseDate,
  voteCount,
  isFavCard = false,
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
          <Icon
            name={'heart'}
            color={colors.wildWatermelon}
            size={perfectFont(18)}
            style={isFavCard && styles.favCardIcon}
          />
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
`

const CardImageBackground = styled.ImageBackground`
  height: ${perfectHeight(220)}px;
`

const styles = StyleSheet.create({
  favCardIcon: {
    marginRight: perfectWidth(8),
  },
})
