import styled from 'styled-components'

const WelcomeHeader = styled.h1`
  font-size: 1.5em;
`

const WelcomeSubheader = styled.h2`
  font-size: 1.3em;
`

type WelcomeProps = {
  userName?: string
}

export default function Welcome({ userName }: WelcomeProps) {
  const welcomeMessages = ['Hello', 'Suh', 'Welcome']
  const welcomeMessage =
    welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]

  return (
    <>
      <WelcomeHeader>
        {welcomeMessage}
        {userName ? `, ${userName}` : ''}
      </WelcomeHeader>
      {!userName && <WelcomeSubheader>Please Sign In Below</WelcomeSubheader>}
    </>
  )
}
