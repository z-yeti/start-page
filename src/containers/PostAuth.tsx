import SignOut from '../components/SignOut'

type AuthProps = {
  user: any
  userData: any
}

export default function PostAuth({ user, userData }: AuthProps) {
  console.log(user)
  console.log(userData)
  return (
    <>
      <h1>Welcome, {userData?.username} </h1>
      <SignOut />
    </>
  )
}
