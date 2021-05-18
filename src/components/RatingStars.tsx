import React from 'react'
import { ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import R from 'ramda'
import { perfectFont, perfectWidth } from 'helpers/responsiveHelpers'
import Row from 'components/layout/Row'
import colors from 'styles/colors'

type RatingStarsProps = {
  numOfStars?: number
  numOfSelected: number
} & ViewStyle

type StarProps = {
  selected: boolean
}

const Star: React.FC<StarProps> = ({ selected }) => (
  <Icon
    name={'star'}
    color={selected ? colors.radicalRed : colors.stormGray}
    size={perfectFont(12)}
    style={{ marginRight: perfectWidth(2) }}
  />
)

const RatingStars: React.FC<RatingStarsProps> = ({ numOfSelected, numOfStars = 5, ...props }) => {
  return (
    <Row {...props}>
      {R.map(
        (current: number) => (
          <Star selected={current < numOfSelected} key={current.toString()} />
        ),
        R.times(R.identity, numOfStars),
      )}
    </Row>
  )
}

export default RatingStars
