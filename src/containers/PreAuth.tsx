import SignIn from '../components/SignIn'
import Welcome from '../components/Welcome'

type PreAuthProps = {
  setIsLoading?: any
}

export default function PreAuth({ setIsLoading }: PreAuthProps) {
  return (
    <>
      <Welcome />
      <SignIn setIsLoading={setIsLoading} />
    </>
  )
}
