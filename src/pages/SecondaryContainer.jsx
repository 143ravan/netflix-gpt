import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <>
    <div>
      <div className="bg-black pl-12">
        <div className="-mt-40 relative z-20 ">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        </div>
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Trending" movies={movies.nowPlayingMovies} />
        <MovieList title="Upcoming" movies={movies.nowPlayingMovies} />
        <MovieList title="Horrer" movies={movies.nowPlayingMovies} />
      </div>
    </div>
    </>
  )
}

export default SecondaryContainer
