import { useEffect, useState } from 'react'
import { auth, database } from './config/firebase'
import { dutchieLinks, starterLinks } from './lib/links'
import PreAuth from './containers/PreAuth'
import PostAuth from './containers/PostAuth'

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [user, setUser] = useState<object | null>()
  const [userData, setUserData] = useState<object | null>()

  const handlePostAuth = (authUser: any) => {
    if (authUser) {
      setUser(authUser)
      getUserData(authUser.uid)
    } else {
      setIsLoading(false)
    }
  }

  const getUserData = (userId: any) => {
    database
      .ref()
      .child('users')
      .child(userId)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUserData(snapshot.val())
          setIsLoading(false)
        } else {
          writeUserData(user)
          setIsLoading(false)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const writeUserData = (user: any) => {
    const hasDutchieEmail = user.email.includes('dutchie')

    database.ref('users/' + user.uid).set({
      username: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      isDutchie: hasDutchieEmail ? true : false,
      settings: {
        nickname: '',
        links: hasDutchieEmail
          ? {
              dutchie: dutchieLinks,
              starter: starterLinks,
            }
          : {
              starter: starterLinks,
            },
        colors: {
          background: '#333',
          links: '#ccc',
          text: '#eee',
        },
      },
    })
  }

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      handlePostAuth(authUser)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {isLoading ? (
        <p>loading</p>
      ) : user ? (
        <PostAuth user={user} userData={userData} />
      ) : (
        <PreAuth />
      )}
    </>
  )
}
