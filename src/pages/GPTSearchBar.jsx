import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lang } from '../utils/languageConstant'
import { GROK_OPEN_AI, HEADERS } from '../utils/constant'
import { addGPTMovieResult } from '../utils/gptSlice'


const GPTSearchBar = () => {
  const seachText = useRef()
  const dispatch = useDispatch()
  const langKey = useSelector((store) => store.config.lang)

const searchMovieTMDB = async(movieName) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&page=1`, HEADERS)
    const json = await data.json()
    console.log(json);
    return json.results
  }

  const handleGPTSearch = async() => {
    const response = await fetch(GROK_OPEN_AI, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_GROK_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant", // free model
        messages: [{ role: "user", content: `Act as movie recommendation system and suggest movies for the input, we need to list out top five movie names, expected format is comma separated movie names in response, only movie name nothing extra with it. the input value is ${seachText.current.value}` }],
      }),
    });

    const data = await response.json();
    const gptMovies = data.choices[0].message.content.split(',')
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie))
    const tmdbResult = await Promise.all(promiseArray)
    dispatch(addGPTMovieResult({movieResults: tmdbResult, movieNames: gptMovies}))
  }

  return (
    <>
      <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black flex" onSubmit={(e)=> e.preventDefault()}>
          <input ref={seachText} type="text" className="p-4 m-4 border-1 border-solid bg-white rounded-lg w-3/4" placeholder={lang[langKey].gptPlaceholder} />
          <button className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg w-1/4" onClick={handleGPTSearch}>{lang[langKey].search}</button>
        </form>
      </div>
    </>
  )
}

export default GPTSearchBar
