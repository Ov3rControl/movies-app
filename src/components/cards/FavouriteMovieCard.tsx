import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'
import { MovieMainInfo } from 'components/movies/MovieMainInfo'
import Row from 'components/layout/Row'
import Typography from 'components/core/typography/Typography'
import colors from 'styles/colors'
import VerticalSpace from 'components/layout/VerticalSpace'
import { perfectWidth } from 'helpers/responsiveHelpers'
import Button from 'components/core/buttons/Button'

type FavouriteMovieCardProps = {
  id: string
  title: string
  language: string
  description: string
  posterPath: string
  categories: string
  avgVote: number
  voteCount: number
}

const FavouriteMovieCard: React.FC<FavouriteMovieCardProps> = ({
  id,
  title,
  description,
  language,
  categories,
  posterPath,
  avgVote,
  voteCount,
}) => {
  const navigation = useNavigation()

  const handleCardPress = useCallback(() => {
    navigation.navigate('movieDetails', { movieId: id })
  }, [id, navigation])

  return (
    <Row justifyContent={'space-evenly'}>
      <MovieMainInfo
        language={language.toUpperCase()}
        posterPath={posterPath}
        categories={categories}
        voteCount={voteCount}
        avgVote={avgVote}
      />
      <Container>
        <VerticalSpace height={12} />
        <Typography text={title} color={colors.mercury} marginLeft={12} />
        <VerticalSpace height={18} />
        <Typography
          text={description}
          fontWeight={'300'}
          size={8}
          fontFamily={'Gilroy-Light'}
          color={colors.white}
          marginLeft={12}
          maxWidth={perfectWidth(175)}
        />
        <VerticalSpace height={75} />
        <Button onPress={handleCardPress} width={perfectWidth(150)} alignSelf={'center'}>
          <Typography text={'Watch The Movie'} color={colors.mercury} />
        </Button>
      </Container>
    </Row>
  )
}

export default FavouriteMovieCard

const Container = styled.View`
  background-color: ${colors.gunPowder};
  width: ${perfectWidth(166)}px;
`
