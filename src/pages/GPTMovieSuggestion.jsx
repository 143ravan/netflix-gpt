import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const GPTMovieSuggestion = () => {
  const {movieResults, movieNames} = useSelector((store) => store.gpt)
  if(!movieNames.length) return

  return (
    <>
      <div className="p-4 m-4 bg-gray-900/80">
        {
          movieNames.map((movie, index) => <MovieList key={movie} tittle={movie} movies={movieResults[index]}/>)
        }
      </div>
    </>
  )
}

export default GPTMovieSuggestion
