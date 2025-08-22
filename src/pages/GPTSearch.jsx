import GPTSearchBar from "./GPTSearchBar"
import GPTMovieSuggestion from "./GPTMovieSuggestion"
import { BG_IMAGE_URL } from "../utils/constant"

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BG_IMAGE_URL} alt='bg' />
      </div>
      <div>
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </>
  )
}

export default GPTSearch
