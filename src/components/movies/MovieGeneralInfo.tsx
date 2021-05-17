import React from 'react'
import Typography from 'components/core/typography/Typography'
import styled from 'styled-components/native'
import colors from 'styles/colors'
import { perfectHeight, perfectWidth } from 'helpers/responsiveHelpers'
import Row from 'components/layout/Row'
import RatingStars from 'components/RatingStars'
import HorizontalSpace from 'components/layout/HorizontalSpace'

type MovieGeneralInfoProps = {
  text: string
  avgVote: number
  voteCount: number
}
export const MovieGeneralInfo: React.FC<MovieGeneralInfoProps> = ({ text, avgVote, voteCount }) => {
  return (
    <CardImageInfo>
      <Typography
        text={text}
        color={colors.radicalRed}
        size={10}
        fontWeight={'300'}
        fontFamily={'Gilroy-Light'}
        marginLeft={perfectWidth(6)}
      />
      <Row alignItems={'center'}>
        <RatingStars numOfSelected={avgVote / 2} marginLeft={perfectWidth(6)} />
        <HorizontalSpace width={10} />
        <Typography text={`${voteCount} REVIEWS`} color={colors.stormGray} size={10} />
      </Row>
    </CardImageInfo>
  )
}

const CardImageInfo = styled.View`
  height: ${perfectHeight(45)}px;
  background-color: ${colors.steelGray};
`
