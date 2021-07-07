import { useEffect } from 'react'
import SignOut from '../components/SignOut'
import Welcome from '../components/Welcome'

type AuthProps = {
  user: any
  userData: any
  setIsLoading: any
}

export default function PostAuth({ user, userData, setIsLoading }: AuthProps) {
  useEffect(() => {
    if (user && userData) setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Welcome userData={userData} />
      <SignOut />
    </>
  )
}
