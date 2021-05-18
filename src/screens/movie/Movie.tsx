import React from 'react'
import R from 'ramda'
import { useQuery } from 'react-query'
import styled from 'styled-components/native'
import ScreenContainer from 'components/layout/ScreenContainer'
import { MovieHeader } from 'components/movies/singleMovie/MovieHeader'
import { perfectHeight, perfectWidth } from 'helpers/responsiveHelpers'
import VerticalSpace from 'components/layout/VerticalSpace'
import LanguageTag from 'components/LanguageTag'
import Typography from 'components/core/typography/Typography'
import colors from 'styles/colors'
import { MovieGeneralInfo } from 'components/movies/MovieGeneralInfo'
import { MovieStoryline } from 'components/movies/singleMovie/MovieStoryline'
import { MovieReleaseDate } from 'components/movies/singleMovie/MovieReleaseDate'
import Button from 'components/core/buttons/Button'
import { SingleMovie } from 'types/Movie'
import MoviesClient from 'api/movieClient'
import SimilarMovies from 'components/movies/SimilarMovies'

const api = new MoviesClient()

const Movie: React.FC = props => {
  const movieId = R.pathOr<string>('', ['route', 'params', 'movieId'], props)
  const { data } = useQuery<SingleMovie>(['movies', movieId], () =>
    api.getMovieDetails(movieId.toString()),
  )
  const categoryNames = R.join(', ')(R.pluck('name')(R.propOr([], 'genres', data)))

  return data ? (
    <>
      <BackgroundImage
        source={{ uri: `https://image.tmdb.org/t/p/w185/${R.prop('poster_path', data)}` }}
        resizeMode={'stretch'}
      >
        <MovieHeader />
        <VerticalSpace height={150} />
        <LanguageTag
          language={R.prop('original_language', data).toUpperCase()}
          marginLeft={perfectWidth(16)}
        />
      </BackgroundImage>
      <ScreenContainer widthPercentage={1}>
        <ScreenContainer>
          <Typography
            text={R.prop('title', data)}
            color={colors.mercury}
            size={28}
            lineHeight={40}
          />
          <MovieGeneralInfo
            text={categoryNames}
            avgVote={R.prop('vote_average', data)}
            voteCount={R.prop('vote_count', data)}
          />
          <MovieStoryline description={R.prop('overview', data)} />
          <MovieReleaseDate releaseDate={R.prop('release_date', data)} />
          <VerticalSpace height={24} />
          <SimilarMovies movieId={movieId} />
          <VerticalSpace height={45} />
          <Button onPress={() => ({})} width={'100%'} height={48}>
            <Typography text={'Submit Review'} color={colors.mercury} />
          </Button>
        </ScreenContainer>
        <VerticalSpace height={25} />
      </ScreenContainer>
    </>
  ) : null
}

export default Movie

const BackgroundImage = styled.ImageBackground`
  height: ${perfectHeight(250)}px;
`
