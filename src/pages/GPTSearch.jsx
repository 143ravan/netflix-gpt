import GPTSearchBar from "./GPTSearchBar"
import GPTMovieSuggestion from "./GPTMovieSuggestion"
import { BG_IMAGE_URL } from "../utils/constant"

const GPTSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img src={BG_IMAGE_URL} alt='bg' />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </>
  )
}

export default GPTSearch
