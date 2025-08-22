import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../utils/firebase.js'
import { addUser, removeUser } from '../../utils/userSlice.js'
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../../utils/constant.js'
import { toggleGPTSearchView } from '../../utils/gptSlice.js'
import { changeLanguage } from '../../utils/configSlice.js'

function Header() {
  const dispatch = useDispatch()
  const navigate  = useNavigate()
  const user = useSelector((store) => store.user)
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch)

  const handleSignOut = () => {
    signOut(auth).then(()=> {
      // navigate('/')
    }).catch((error) => {
      navigate('/error')
    })
  }

  useEffect (() => {
    const unsubscribe = onAuthStateChanged (auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser ({uid, email, displayName, photoURL}))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });

    return () => unsubscribe()
  }, [])

  const handleGPTSearchToggle = () => {
    dispatch(toggleGPTSearchView())
  }
  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value))
  }

  return (
    <div className='flex flex-col md:flex-row md:justify-between absolute w-screen bg-gradient-to-b from-black z-10'>
      <div className='px-8 py-2 mx-auto md:mx-0'>
        <img className='w-44' src={NETFLIX_LOGO} alt='logo' />
      </div>
      {
        user &&
        <div className='p-2 flex gap-8'>
          {
            showGPTSearch &&
            <select className='bg-gray-900 p-2 m-2 text-white' onChange={handleLanguageChange}>
              {
                SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
              }
            </select>
          }
          <button className='px-2 bg-purple-800 rounded-md cursor-pointer' onClick={handleGPTSearchToggle}>{
            showGPTSearch ? 'Homepage' : 'GPT search'}</button>
          <img className='w-12 h-12' src={user.photoURL} alt="avatar" />
          <button className='text-amber-50 cursor-pointer' onClick={handleSignOut}>Sign out</button>
        </div>
      }
    </div>
  )
}

export default Header
