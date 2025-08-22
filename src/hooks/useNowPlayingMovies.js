import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { HEADERS, PLAYING_MOVIE_LIST } from "../utils/constant"

const useNowPlayingMovies = () => {
  const dispatch = useDispatch()
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)

  const getNowPlayingMovie = async () => {
    const data = await fetch(PLAYING_MOVIE_LIST, HEADERS)
    const json = await data.json()
    dispatch(addNowPlayingMovies (json.results))
  }
  useEffect (() => {
    !nowPlayingMovies && getNowPlayingMovie()
  }, [])
}

export default useNowPlayingMovies
