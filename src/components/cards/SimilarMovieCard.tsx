import React from 'react'
import styled from 'styled-components/native'
import { perfectHeight, perfectWidth } from 'helpers/responsiveHelpers'
import VerticalSpace from 'components/layout/VerticalSpace'
import Typography from 'components/core/typography/Typography'
import colors from 'styles/colors'

const SimilarMovieCard: React.FC = () => {
  return (
    <Container>
      <CardImage
        source={{ uri: 'https://image.tmdb.org/t/p/w185//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' }}
        resizeMode={'stretch'}
      />
      <VerticalSpace height={6} />
      <Typography
        text={'Movie Name'}
        color={colors.mercury}
        size={12}
        fontFamily={'Gilroy-Light'}
        marginLeft={perfectWidth(4)}
      />
    </Container>
  )
}

export default SimilarMovieCard

const Container = styled.View`
  margin-right: ${perfectWidth(8)}px;
`
const CardImage = styled.Image`
  width: ${perfectWidth(80)}px;
  height: ${perfectHeight(80)}px;
  border-radius: ${perfectWidth(4)}px;
`
