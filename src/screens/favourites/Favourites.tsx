import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FlatList, View } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import Header from 'components/core/Header'
import VerticalSpace from 'components/layout/VerticalSpace'
import colors from 'styles/colors'
import { perfectFont } from 'helpers/responsiveHelpers'
import Typography from 'components/core/typography/Typography'
import Row from 'components/layout/Row'
import HorizontalSpace from 'components/layout/HorizontalSpace'
import FavouriteMovieCard from 'components/cards/FavouriteMovieCard'
import ScreenContainerNoScroll from 'components/layout/ScreenContainerNoScroll'
import useFavourites from 'store/favourites'
import R from 'ramda'

const FavoriteScreen: React.FC = () => {
  const navigation = useNavigation()
  const favouriteMovies = useFavourites(state => state.favourites)

  const renderItem = useCallback(
    ({ item }) => (
      <FavouriteMovieCard
        id={R.prop('id', item)}
        title={R.prop('title', item)}
        description={R.prop('overview', item)}
        posterPath={R.prop('poster_path', item)}
        categories={R.join(', ')(R.pluck('name')(R.propOr([], 'genres', item)))}
        language={R.prop('original_language', item)}
        voteCount={R.prop('vote_count', item)}
        avgVote={R.prop('vote_average', item)}
      />
    ),
    [],
  )

  const keyExtractor = useCallback(item => R.prop('id', item).toString(), [])

  return (
    <ScreenContainerNoScroll widthPercentage={1}>
      <Header>
        <Row width={'100%'} alignItems={'center'}>
          <Icon
            name={'chevron-left'}
            color={colors.stormGray}
            size={perfectFont(42)}
            onPress={() => navigation.goBack()}
          />
          <HorizontalSpace width={75} />
          <Typography
            text={'Favourite Movies'}
            size={22}
            color={colors.white}
            alignSelf={'center'}
            textAlign={'center'}
          />
          <View />
        </Row>
      </Header>
      <VerticalSpace height={20} />
      <ScreenContainerNoScroll>
        <FlatList
          data={favouriteMovies}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <VerticalSpace height={8} />}
          keyExtractor={keyExtractor}
        />
      </ScreenContainerNoScroll>
    </ScreenContainerNoScroll>
  )
}

export default FavoriteScreen
