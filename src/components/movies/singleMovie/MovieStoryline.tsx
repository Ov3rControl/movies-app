import React from 'react'
import VerticalSpace from 'components/layout/VerticalSpace'
import Typography from 'components/core/typography/Typography'
import colors from 'styles/colors'

type MovieStorylineProps = {
  description: string
}

export const MovieStoryline: React.FC<MovieStorylineProps> = ({ description }) => {
  return (
    <>
      <VerticalSpace height={28} />
      <Typography text={'Storyline'} color={colors.mercury} />
      <VerticalSpace height={4} />
      <Typography
        text={description}
        fontWeight={'300'}
        color={colors.white}
        fontFamily={'Gilroy-Light'}
      />
      <VerticalSpace height={28} />
    </>
  )
}
