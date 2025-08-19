import { useSelector } from 'react-redux'
import { lang } from '../utils/languageConstant'

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang)

  return (
    <>
      <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black flex">
          <input type="text" className="p-4 m-4 border-1 border-solid bg-white rounded-lg w-3/4" placeholder={lang[langKey].gptPlaceholder} />
          <button className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg w-1/4">{lang[langKey].search}</button>
        </form>
      </div>
    </>
  )
}

export default GPTSearchBar
