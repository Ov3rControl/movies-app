import React from 'react'
import ScreenContainer from 'components/layout/ScreenContainer'
import { MovieHeader } from 'components/movies/singleMovie/MovieHeader'
import styled from 'styled-components/native'
import { perfectHeight, perfectWidth } from 'helpers/responsiveHelpers'
import VerticalSpace from 'components/layout/VerticalSpace'
import LanguageTag from 'components/LanguageTag'
import Typography from 'components/core/typography/Typography'
import colors from 'styles/colors'
import { MovieGeneralInfo } from 'components/movies/MovieGeneralInfo'
import { MovieStoryline } from 'components/movies/singleMovie/MovieStoryline'
import { MovieReleaseDate } from 'components/movies/singleMovie/MovieReleaseDate'
import HorizontalScrollView from 'components/layout/HorizontalScrollView'
import SimilarMovieCard from 'components/cards/SimilarMovieCard'
import Button from 'components/core/buttons/Button'

const Movie: React.FC = () => {
  return (
    <>
      <BackgroundImage
        source={{ uri: `https://image.tmdb.org/t/p/w185//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg` }}
        resizeMode={'stretch'}
      >
        <MovieHeader />
        <VerticalSpace height={150} />
        <LanguageTag language={'En'} marginLeft={perfectWidth(16)} />
      </BackgroundImage>
      <ScreenContainer widthPercentage={1}>
        <ScreenContainer>
          <Typography
            text={'Avengers: End Game'}
            color={colors.mercury}
            size={28}
            lineHeight={40}
          />
          <MovieGeneralInfo text={'Action, Adventure, Fantasy'} avgVote={10} voteCount={3000} />
          <MovieStoryline />
          <MovieReleaseDate />
          <VerticalSpace height={24} />
          <Typography text={'Similar Movies'} color={colors.mercury} />
          <VerticalSpace height={12} />
          <HorizontalScrollView>
            <SimilarMovieCard />
            <SimilarMovieCard />
            <SimilarMovieCard />
            <SimilarMovieCard />
          </HorizontalScrollView>
          <VerticalSpace height={45} />
          <Button onPress={() => ({})} width={'100%'} height={48}>
            <Typography text={'Submit Review'} color={colors.mercury} />
          </Button>
        </ScreenContainer>
      </ScreenContainer>
    </>
  )
}

export default Movie

const BackgroundImage = styled.ImageBackground`
  height: ${perfectHeight(250)}px;
`
