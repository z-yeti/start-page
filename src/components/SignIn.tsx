import { auth, Providers } from '../config/firebase'

type SignInProps = {
  setIsLoading?: any
}

export default function SignIn({ setIsLoading }: SignInProps) {
  const handleSignInClick = (provider: any) => {
    setIsLoading(true)
    auth.signInWithPopup(provider).catch(function (error) {
      setIsLoading(false)
      console.error(error)
    })
  }

  return (
    <>
      <button onClick={() => handleSignInClick(Providers.google)}>
        Sign in with Google
      </button>
      <button onClick={() => handleSignInClick(Providers.github)}>
        Sign in with GitHub
      </button>
    </>
  )
}
