import styled from 'styled-components'

type WelcomeProps = {
  user?: any
  userData?: any
}

const WelcomeHeader = styled.h1`
  font-size: 1.5em;
`

const WelcomeSubheader = styled.h2`
  font-size: 1.3em;
`

export default function Welcome({ userData }: WelcomeProps) {
  const welcomeMessages = ['Hello', 'Suh', 'Welcome']
  const welcomeMessage =
    welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]

  return (
    <>
      {userData ? (
        <WelcomeHeader>
          {welcomeMessage}, {userData.username}
        </WelcomeHeader>
      ) : (
        <>
          <WelcomeHeader>{welcomeMessage}</WelcomeHeader>
          <WelcomeSubheader>Please Sign In Below</WelcomeSubheader>
        </>
      )}
    </>
  )
}
