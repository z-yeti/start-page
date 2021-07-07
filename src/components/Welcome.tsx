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
  if (userData) {
    return <h1>Welcome, {userData.username} </h1>
  } else {
    return (
      <>
        <WelcomeHeader>Welcome</WelcomeHeader>
        <WelcomeSubheader>Please Sign In Below</WelcomeSubheader>
      </>
    )
  }
}
