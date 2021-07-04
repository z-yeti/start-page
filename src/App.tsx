import { useEffect, useState } from 'react'
import { auth } from './config/firebase'
import PreAuth from './containers/PreAuth'
import PostAuth from './containers/PostAuth'

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isUser, setIsUser] = useState<boolean>(false)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsUser(true)
      }
      setIsLoading(false)
    })
  }, [])

  return (
    <>
    {isLoading ? <p>loading</p> : (
      isUser ? (
        <PostAuth/>
      ) : (
        <PreAuth />
      )
    )}
    </>
  )
}
