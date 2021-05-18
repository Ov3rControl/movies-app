import React from 'react'
import R from 'ramda'
import { useQuery } from 'react-query'
import Typography from 'components/core/typography/Typography'
import colors from 'styles/colors'
import VerticalSpace from 'components/layout/VerticalSpace'
import HorizontalScrollView from 'components/layout/HorizontalScrollView'
import SimilarMovieCard from 'components/cards/SimilarMovieCard'
import MoviesClient from 'api/movieClient'
import { Movie, MoviesResponse } from 'types/Movie'

type SimilarMoviesProps = {
  movieId: string
}

const api = new MoviesClient()

const SimilarMovies: React.FC<SimilarMoviesProps> = ({ movieId }) => {
  const { data } = useQuery<MoviesResponse>(['movies', movieId, 'similar'], () =>
    api.getSimilarMovies(movieId),
  )

  const movies: Movie[] = R.propOr([], 'results', data)
  return (
    <>
      <Typography text={'Similar Movies'} color={colors.mercury} />
      <VerticalSpace height={12} />
      <HorizontalScrollView>
        {movies.map(movie => (
          <SimilarMovieCard
            key={R.propOr('', 'id', movie)}
            id={R.propOr('', 'id', movie)}
            title={R.propOr('', 'title', movie)}
            posterPath={R.propOr('', 'poster_path', movie)}
          />
        ))}
      </HorizontalScrollView>
    </>
  )
}

export default SimilarMovies
