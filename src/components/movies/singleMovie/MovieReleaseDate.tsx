import React from 'react'
import Row from 'components/layout/Row'
import Typography from 'components/core/typography/Typography'
import colors from 'styles/colors'
import { perfectWidth } from 'helpers/responsiveHelpers'

type MovieReleaseDateProps = {
  releaseDate: string
}

export const MovieReleaseDate: React.FC<MovieReleaseDateProps> = ({ releaseDate }) => {
  return (
    <Row>
      <Typography text={'Release Date: '} color={colors.mercury} />
      <Typography
        text={releaseDate}
        fontWeight={'300'}
        color={colors.white}
        fontFamily={'Gilroy-Light'}
        marginLeft={perfectWidth(8)}
      />
    </Row>
  )
}
