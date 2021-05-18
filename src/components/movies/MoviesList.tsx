import React, { useCallback } from 'react'
import R from 'ramda'
import { useInfiniteQuery } from 'react-query'
import { FlatList, StyleSheet } from 'react-native'
import MovieCard from 'components/cards/MovieCard'
import colors from 'styles/colors'
import VerticalSpace from 'components/layout/VerticalSpace'
import MoviesClient from 'api/movieClient'
import { Movie, MoviesResponse } from 'types/Movie'

const api = new MoviesClient()

const MoviesList: React.FC = props => {
  const routeName: string = R.path(['route', 'name'], props) as string

  const { data, fetchNextPage } = useInfiniteQuery<MoviesResponse>(
    ['movies', routeName],
    ({ pageParam = 1 }) => api.getMovies(routeName, pageParam),
    { getNextPageParam: lastPage => lastPage.page + 1 },
  )

  const keyExtractor = useCallback(item => R.prop('id', item).toString(), [])

  const renderItem = useCallback(prop => {
    const movie: Movie = R.prop('item', prop) as Movie
    return (
      <MovieCard
        title={R.prop('title', movie)}
        posterPath={R.prop('poster_path', movie)}
        language={R.prop('original_language', movie)}
        releaseDate={R.prop('release_date', movie)}
        voteCount={R.prop('vote_count', movie)}
        avgVote={R.prop('vote_average', movie)}
      />
    )
  }, [])

  return (
    <FlatList
      data={R.flatten(R.pluck('results')(R.propOr([], 'pages', data)))}
      columnWrapperStyle={styles.columnWrapper}
      ItemSeparatorComponent={() => <VerticalSpace height={8} />}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      onEndReachedThreshold={0.1}
      onEndReached={() => fetchNextPage()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      style={styles.flatlist}
    />
  )
}

export default MoviesList

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
  },
  flatlist: {
    backgroundColor: colors.steelGray,
  },
})
