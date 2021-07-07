import styled from 'styled-components'
import { auth, Providers } from '../config/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import Button from './Button'

type SignInProps = {
  setIsLoading?: any
}

const SignInContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export default function SignIn({ setIsLoading }: SignInProps) {
  const handleSignInClick = (provider: any) => {
    setIsLoading(true)
    auth.signInWithPopup(provider).catch(function (error) {
      setIsLoading(false)
      console.error(error)
    })
  }

  return (
    <SignInContainer>
      <Button
        onClick={() => handleSignInClick(Providers.google)}
        text={<FontAwesomeIcon icon={faGoogle} />}
      />
      <Button
        onClick={() => handleSignInClick(Providers.github)}
        text={<FontAwesomeIcon icon={faGithub} />}
      />
    </SignInContainer>
  )
}
