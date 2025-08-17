import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { HEADERS, MOVIE_LIST } from "../utils/constant"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
  const getNowPlayingMovie = async () => {
    const data = await fetch(MOVIE_LIST, HEADERS)
    const json = await data.json()
    dispatch(addNowPlayingMovies (json.results))
  }
  useEffect (() => {
    getNowPlayingMovie()
  }, [])
}

export default useNowPlayingMovies
