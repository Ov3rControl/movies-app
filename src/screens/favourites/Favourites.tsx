import React from 'react'
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

const FavoriteScreen: React.FC = () => {
  return (
    <ScreenContainerNoScroll widthPercentage={1}>
      <Header>
        <Row width={'100%'} alignItems={'center'}>
          <Icon name={'chevron-left'} color={colors.stormGray} size={perfectFont(42)} />
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
          data={[1, 2, 3, 4, 5]}
          renderItem={() => <FavouriteMovieCard />}
          ItemSeparatorComponent={() => <VerticalSpace height={8} />}
        />
      </ScreenContainerNoScroll>
    </ScreenContainerNoScroll>
  )
}

export default FavoriteScreen
