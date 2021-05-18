import { AxiosRequestConfig } from 'axios'
import { prop } from 'ramda'
import AxiosClient from 'services/axios/AxiosClient'
import { MoviesResponse, SingleMovie } from 'types/Movie'

const API_KEY = '2e2eb880c8c326884f8a6332a732c944'

class MoviesClient extends AxiosClient {
  public constructor() {
    super('https://api.themoviedb.org/3/movie/')
    this._initializeRequestInterceptor()
  }

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this._handleRequest, this._handleError)
  }

  private _handleRequest = (config: AxiosRequestConfig) => {
    return {
      ...config,
      headers: {
        ...prop('headers', config),
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        ...prop('params', config),
        api_key: API_KEY,
      },
    }
  }

  public getMovies = (type: string, page: number): Promise<MoviesResponse> =>
    this.instance.get(`${type}?page=${page}`)

  public getMovieDetails = (movieId: string): Promise<SingleMovie> => this.instance.get(movieId)

  public getSimilarMovies = (movieId: string): Promise<MoviesResponse> =>
    this.instance.get(`${movieId}/similar`)
}

export default MoviesClient
