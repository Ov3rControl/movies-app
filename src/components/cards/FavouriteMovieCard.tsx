import React from 'react'
import styled from 'styled-components/native'
import { MovieMainInfo } from 'components/movies/MovieMainInfo'
import Row from 'components/layout/Row'
import Typography from 'components/core/typography/Typography'
import colors from 'styles/colors'
import VerticalSpace from 'components/layout/VerticalSpace'
import { perfectWidth } from 'helpers/responsiveHelpers'
import Button from 'components/core/buttons/Button'

const FavouriteMovieCard: React.FC = () => {
  return (
    <Row>
      <MovieMainInfo
        language={'EN'}
        posterPath={'/x9FrNr3KcLKsTVqzitIDFwxq48l.jpg'}
        categories={'Action, Adventure, Drama'}
        voteCount={1400}
        avgVote={9}
        isFavCard
      />
      <Container>
        <VerticalSpace height={12} />
        <Typography text={'Tenet'} color={colors.mercury} marginLeft={12} />
        <VerticalSpace height={18} />
        <Typography
          text={
            'The main character is a secret agent who passes a cruel test of reliability and joins an incredible mission. The fate of the world depends on its implementation, and for success it is necessary to discard all previous ideas about space and time.'
          }
          fontWeight={'300'}
          size={8}
          fontFamily={'Gilroy-Light'}
          color={colors.white}
          marginLeft={12}
          maxWidth={perfectWidth(175)}
        />
        <VerticalSpace height={75} />
        <Button
          onPress={() => ({})}
          width={perfectWidth(150)}
          alignSelf={'flex-start'}
          marginLeft={perfectWidth(17.5)}
        >
          <Typography text={'Watch The Movie'} color={colors.mercury} />
        </Button>
      </Container>
    </Row>
  )
}

export default FavouriteMovieCard

const Container = styled.View`
  width: 100%;
  background-color: ${colors.gunPowder};
`
