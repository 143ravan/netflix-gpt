
import { useState } from 'react'
import Header from '../components/common/Header'
import { BG_IMAGE_URL } from '../utils/constant.js'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMAGE_URL} alt='bg' />
      </div>
      <form className="absolute bg-black w-4/12 my-35 mx-auto right-0 left-0 flex flex-col p-16 rounded-lg opacity-80 text-white">
        <h1 className='text-3xl font-bold py-4'>{isSignIn? 'Sign in': 'Sign up'}</h1>
        {!isSignIn? <input className="p-4 m-4 border-2 rounded-md bg-gray-700" type="text" placeholder="Full name"></input>: ''}
        <input className="p-4 m-4 border-2 rounded-md bg-gray-700" type="text" placeholder="Email address"></input>
        <input className="p-4 m-4 border-2 rounded-md bg-gray-700" type="password" placeholder="Password"></input>
        <button className="p-4 m-4 rounded-md bg-red-700 opacity-100">{isSignIn? 'Sign in': 'Sign up'}</button>
        <p className='px-4 cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? 'are you new to Netflix ? Sign up now': 'Already registered Sign in'}</p>
      </form>
    </div>
  )
}

export default Login
