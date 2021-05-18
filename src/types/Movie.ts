export type Movie = {
  id: number
  vote_average: number
  vote_count: number
  original_language: string
  poster_path: string
  release_date: string
  title: string
}

export type MoviesResponse = {
  page: number
  results: Movie[]
}
