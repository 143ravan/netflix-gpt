import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../utils/moviesSlice"
import { HEADERS, POPULAR_MOVIE_LIST } from "../utils/constant"

const usePopularMovies = () => {
  const dispatch = useDispatch()
  const popularMovies = useSelector((store) => store.movies.popularMovies)
  const getPopularMovie = async () => {
    const data = await fetch(POPULAR_MOVIE_LIST, HEADERS)
    const json = await data.json()
    dispatch(addPopularMovies (json.results))
  }
  useEffect (() => {
    !popularMovies && getPopularMovie()
  }, [])
}

export default usePopularMovies
