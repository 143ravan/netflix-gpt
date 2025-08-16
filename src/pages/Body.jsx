import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import Login from "./Login"
import Browse from "./Browse"
import { auth } from '../utils/firebase.js'
import { addUser, removeUser } from "../utils/userSlice"

const Body = () => {
  const dispatch = useDispatch()
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    }]
  )

  useEffect(() => {
    onAuthStateChanged (auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({uid, email, displayName, photoURL}))
      } else {
        dispatch(removeUser())
      }
    });
  }, [])

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default Body
