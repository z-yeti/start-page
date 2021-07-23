import { useEffect } from 'react'
import Links from '../components/Links'
import Search from '../components/Search'
import SignOut from '../components/SignOut'
import Welcome from '../components/Welcome'

type AuthProps = {
  user: any
  userData: any
  setIsLoadingUser: any
}

export default function PostAuth({
  user,
  userData,
  setIsLoadingUser,
}: AuthProps) {
  useEffect(() => {
    if (user && userData) setIsLoadingUser(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Welcome userName={userData.username} />
      <Search />
      <Links userLinks={userData.settings.links} />
      <SignOut />
    </>
  )
}
