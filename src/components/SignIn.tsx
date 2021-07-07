import { auth, Providers } from '../config/firebase'
import Button from './Button'

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
      <Button
        onClick={() => handleSignInClick(Providers.google)}
        text='Sign in with Google'
      />
      <Button
        onClick={() => handleSignInClick(Providers.github)}
        text='Sign in with GitHub'
      />
    </>
  )
}
