import { TMDB_IMG_CDN } from "../utils/constant"

const MovieCard = ({posterPath}) => {
  return (
    <>
    <div className="w-50 rounded-sm">
      <img src={TMDB_IMG_CDN + posterPath} alt="NA"></img>
    </div>
    </>
  )
}

export default MovieCard
