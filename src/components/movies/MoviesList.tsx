import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import MovieCard from 'components/cards/MovieCard'
import colors from 'styles/colors'
import VerticalSpace from 'components/layout/VerticalSpace'

const MoviesList: React.FC = () => {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5]}
      columnWrapperStyle={styles.columnWrapper}
      ItemSeparatorComponent={() => <VerticalSpace height={8} />}
      renderItem={() => (
        <>
          <MovieCard
            title={'Godzilla vs. Kong'}
            posterPath={'/x9FrNr3KcLKsTVqzitIDFwxq48l.jpg'}
            categories={'Action, Adventure, Drama'}
            language={'En'}
            releaseDate={'2021-02-05'}
            voteCount={427}
            avgVote={Math.round(7.2)}
          />
        </>
      )}
      onEndReachedThreshold={0.5}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.steelGray }}
    />
  )
}

export default MoviesList

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
  },
})
