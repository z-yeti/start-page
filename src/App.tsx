import { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { auth, database } from './config/firebase'
import { dutchieLinks, starterLinks } from './lib/links'
import PreAuth from './containers/PreAuth'
import PostAuth from './containers/PostAuth'

interface StyleProps {
  backgroundColor: string
  color: string
}

const GlobalStyle = createGlobalStyle<StyleProps>`
  body{
    background-color: ${(p) => p.backgroundColor || '#333'};
    color: ${(p) => p.color || '#eee'};
    & a {
      color: ${(p) => p.color || '#5ce1e6'};
    }
  }
`

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [user, setUser] = useState<any>()
  const [userData, setUserData] = useState<any>()

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
      <GlobalStyle
        backgroundColor={userData?.settings.colors.background}
        color={userData?.settings.colors.text}
      />
      <div>
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
      </div>
    </>
  )
}
