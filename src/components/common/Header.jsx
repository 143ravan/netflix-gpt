import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NETFLIX_LOGO } from '../../utils/constant.js'
import { auth } from '../../utils/firebase.js'

function Header() {
  const navigate  = useNavigate()
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth).then(()=> {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    })
  }

  return (
    <div className='flex justify-between absolute w-screen bg-gradient-to-b from-black z-10'>
      <div className='px-8 py-2'>
        <img className='w-44' src={NETFLIX_LOGO} alt='logo' />
      </div>
      {
        user &&
        <div className='p-2 flex gap-8'>
          <img className='w-12 h-12' src={user?.photoURL} alt="avatar" />
          <button className='text-amber-50 cursor-pointer' onClick={handleSignOut}>Sign out</button>
        </div>
      }
    </div>
  )
}

export default Header
