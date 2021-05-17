import React from 'react'
import Row from 'components/layout/Row'
import Typography from 'components/core/typography/Typography'
import colors from 'styles/colors'
import { perfectWidth } from 'helpers/responsiveHelpers'

export const MovieReleaseDate: React.FC = () => {
  return (
    <Row>
      <Typography text={'Release Date: '} color={colors.mercury} />
      <Typography
        text={'2018-04-25'}
        fontWeight={'300'}
        color={colors.white}
        fontFamily={'Gilroy-Light'}
        marginLeft={perfectWidth(8)}
      />
    </Row>
  )
}
