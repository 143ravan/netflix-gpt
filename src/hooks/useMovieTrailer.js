import { useEffect } from "react";
import { HEADERS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch ()
  const getMovieVideo = async() => {
   const data = await  fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, HEADERS)
    const json = await data.json()
    const filteredVideo = json.results.filter((video) => video.type === "Trailer")
    const trailer = filteredVideo.length ? filteredVideo[0] : json.results[0]
    dispatch(addTrailerVideo (trailer))
  }

  useEffect(() => {
    getMovieVideo()
  }, [])

}

export default useMovieTrailer
