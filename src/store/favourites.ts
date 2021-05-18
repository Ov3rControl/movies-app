import create from 'zustand'
import R from 'ramda'
import { Movie } from 'types/Movie'
import { queryClient } from '../../App'

type State = {
  favourites: Movie[] | []
  handleFavouriteAction: (movieId: string) => void
  isMovieFavoured: (movieId: string) => boolean
}

const useFavourites = create<State>((set, get) => ({
  favourites: [],
  handleFavouriteAction: movieId => {
    const { favourites } = get()
    const addedMovie: Movie | undefined = queryClient.getQueryData(['movies', movieId])
    if (addedMovie) {
      const movieInFav = R.find(R.propEq('id', movieId))(favourites)
      if (movieInFav) {
        set({ favourites: R.reject(R.propEq('id', movieId), favourites) })
      } else {
        set({ favourites: R.append(addedMovie, favourites) })
      }
    }
  },
  isMovieFavoured: movieId => {
    const { favourites } = get()
    return R.contains(+movieId, R.pluck('id')(favourites))
  },
}))

export default useFavourites
