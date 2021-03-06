import React, { useCallback } from 'react'
import R from 'ramda'
import { useInfiniteQuery, useQuery } from 'react-query'
import { FlatList, StyleSheet } from 'react-native'
import MovieCard from 'components/cards/MovieCard'
import colors from 'styles/colors'
import VerticalSpace from 'components/layout/VerticalSpace'
import MoviesClient from 'api/movieClient'
import { Movie, MoviesResponse } from 'types/Movie'
import useSearch from 'store/search'

const api = new MoviesClient()

const MoviesList: React.FC = props => {
  const routeName: string = R.path(['route', 'name'], props) as string
  const searchTerm = useSearch(state => state.searchTerm)
  const isSearching = !R.isEmpty(searchTerm)

  const { data, fetchNextPage } = useInfiniteQuery<MoviesResponse>(
    ['movies', routeName],
    ({ pageParam = 1 }) => api.getMovies(routeName, pageParam),
    { getNextPageParam: lastPage => lastPage.page + 1 },
  )

  const { data: searchedMovies } = useQuery<MoviesResponse>(
    ['search', 'movies', searchTerm],
    () => api.searchMovies(searchTerm),
    { enabled: isSearching },
  )

  const keyExtractor = useCallback(item => R.prop('id', item).toString(), [])

  const renderItem = useCallback(prop => {
    const movie: Movie = R.prop('item', prop) as Movie
    return (
      <MovieCard
        id={R.prop('id', movie)}
        title={R.prop('title', movie)}
        posterPath={R.prop('poster_path', movie)}
        language={R.prop('original_language', movie)}
        releaseDate={R.prop('release_date', movie)}
        voteCount={R.prop('vote_count', movie)}
        avgVote={R.prop('vote_average', movie)}
      />
    )
  }, [])

  const movies = R.flatten(R.pluck('results')(R.propOr([], 'pages', data)))
  const searchResults = R.propOr(null, 'results', searchedMovies)
  return (
    <FlatList
      data={isSearching ? (searchResults as Movie[]) : (movies as Movie[])}
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
