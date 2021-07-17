import styled from 'styled-components'
import SignIn from '../components/SignIn'
import Welcome from '../components/Welcome'

type PreAuthProps = {
  setIsLoadingUser?: any
}

const PreAuthContainer = styled.div`
  display: flex;
  height: 100%;
`
const PreAuthFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 10em;
`

export default function PreAuth({ setIsLoadingUser }: PreAuthProps) {
  return (
    <PreAuthContainer>
      <PreAuthFlexBox>
        <Welcome />
        <SignIn setIsLoadingUser={setIsLoadingUser} />
      </PreAuthFlexBox>
    </PreAuthContainer>
  )
}
