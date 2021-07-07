import { useEffect, useState } from 'react'
import { GlobalStyle } from './styles/global'
import { auth, database } from './config/firebase'
import { dutchieLinks, starterLinks } from './lib/links'
import PreAuth from './containers/PreAuth'
import PostAuth from './containers/PostAuth'

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [user, setUser] = useState<any>()
  const [userData, setUserData] = useState<any>()

  const handlePostAuth = (authUser: any) => {
    if (authUser) {
      setUser(authUser)
      getUserData(authUser)
    } else {
      setIsLoading(false)
    }
  }

  const getUserData = (authUser: any) => {
    database
      .ref()
      .child('users')
      .child(authUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUserData(snapshot.val())
          setIsLoading(false)
        } else {
          writeUserData(authUser)
          setIsLoading(false)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const writeUserData = (authUser: any) => {
    const hasDutchieEmail = authUser.email.includes('dutchie')

    database.ref('users/' + authUser.uid).set({
      username: authUser.displayName,
      email: authUser.email,
      photoUrl: authUser.photoURL,
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
          links: '#5ce1e6',
          text: '#eee',
        },
      },
    })

    getUserData(authUser)
  }

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      handlePostAuth(authUser)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <GlobalStyle
        backgroundColor={userData?.settings.colors.background}
        color={userData?.settings.colors.text}
        links={userData?.settings.colors.links}
      />
      <>
        {isLoading ? (
          <p>loading</p>
        ) : auth.currentUser ? (
          <PostAuth
            user={user}
            userData={userData}
            setIsLoading={setIsLoading}
          />
        ) : (
          <PreAuth setIsLoading={setIsLoading} />
        )}
      </>
    </>
  )
}
