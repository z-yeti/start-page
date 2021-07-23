import { useEffect, useState } from 'react'
import { GlobalStyle } from './styles/global'
import { auth, database } from './config/firebase'
import { dutchieLinks, starterLinks } from './lib/links'
import PreAuth from './containers/PreAuth'
import PostAuth from './containers/PostAuth'
import Loading from './components/Loading'

export default function App() {
  const [isLoadingUser, setIsLoadingUser] = useState(true)
  const [user, setUser] = useState<any>()
  const [userData, setUserData] = useState<any>()

  const handlePostAuth = (authUser: any) => {
    if (authUser) {
      setUser(authUser)
      getUserData(authUser)
    } else {
      setIsLoadingUser(false)
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
          setIsLoadingUser(false)
        } else {
          writeUserData(authUser)
          setIsLoadingUser(false)
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
        {isLoadingUser ? (
          <Loading />
        ) : auth.currentUser ? (
          <PostAuth
            user={user}
            userData={userData}
            setIsLoadingUser={setIsLoadingUser}
          />
        ) : (
          <PreAuth setIsLoadingUser={setIsLoadingUser} />
        )}
      </>
    </>
  )
}
