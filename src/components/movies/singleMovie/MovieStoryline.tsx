import React from 'react'
import VerticalSpace from 'components/layout/VerticalSpace'
import Typography from 'components/core/typography/Typography'
import colors from 'styles/colors'

export const MovieStoryline: React.FC = () => {
  return (
    <>
      <VerticalSpace height={28} />
      <Typography text={'Storyline'} color={colors.mercury} />
      <VerticalSpace height={4} />
      <Typography
        text={
          "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
        }
        fontWeight={'300'}
        color={colors.white}
        fontFamily={'Gilroy-Light'}
      />
      <VerticalSpace height={28} />
    </>
  )
}
