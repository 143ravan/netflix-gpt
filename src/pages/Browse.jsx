import Header from "../components/common/Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import GPTSearch from "./GPTSearch"
import { useSelector } from "react-redux"

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch)
  useNowPlayingMovies()
  usePopularMovies()

  return (
    <>
      <Header />
      {
        showGPTSearch ?
          <GPTSearch /> :
          <>
            <MainContainer/>
            <SecondaryContainer />
          </>
      }
    </>
  )
}

export default Browse
