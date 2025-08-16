
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import Header from '../components/common/Header'
import { BG_IMAGE_URL } from '../utils/constant.js'
import {checkValidData} from '../utils/validate.js'
import { auth } from '../utils/firebase.js'
import { addUser } from '../utils/userSlice.js';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [errorMessage, setErrorMessage] = useState(null)
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn)
  }
  const signInUser = () => {
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      const user = userCredential.user;
      navigate('/browse')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage (errorCode + '-' + errorMessage)
    });
  }
  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      const user = userCredential.user;
       updateProfile (user, {
        displayName: name.current.value,
        photoURL: "https://media.licdn.com/dms/image/v2/C5603AQGEBvQwMJIc4Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1624424892643?e=1758153600&v=beta&t=U4b494tZHtQ1oRmQM1D8Z7e30KRmhgSmWdvAs1g4Z3k"
      }).then(() => {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(addUser ({uid, email, displayName, photoURL}))
        navigate('/browse')
      }).catch((error) => {
        setErrorMessage(error.message)
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage (errorCode + '-' + errorMessage)
    });
  }
  const handleButtonClick = () => {
    // validate form data
    const message =  checkValidData(email.current.value, password.current.value)
    if (message) return

    if(isSignIn) {
      signInUser()
    } else {
      signUpUser()
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMAGE_URL} alt='bg' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black w-4/12 my-35 mx-auto right-0 left-0 flex flex-col p-16 rounded-lg opacity-80 text-white">
        <h1 className='text-3xl font-bold py-4'>{isSignIn? 'Sign in': 'Sign up'}</h1>
        {!isSignIn? <input ref={name} className="p-4 m-4 border-2 rounded-md bg-gray-700" type="text" placeholder="Full name"></input>: ''}
        <input ref={email} className="p-4 m-4 border-2 rounded-md bg-gray-700" type="text" placeholder="Email address"></input>
        <input ref={password} className="p-4 m-4 border-2 rounded-md bg-gray-700" type="password" placeholder="Password"></input>
        <button className="p-4 m-4 rounded-md bg-red-700 opacity-100" onClick={handleButtonClick}>{isSignIn? 'Sign in': 'Sign up'}</button>
        <p className='px-4 cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? 'are you new to Netflix ? Sign up now': 'Already registered Sign in'}</p>
      </form>
    </div>
  )
}

export default Login
