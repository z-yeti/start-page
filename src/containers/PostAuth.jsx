import { auth } from '../config/firebase'
import SignOut from '../components/SignOut'

export default function PostAuth() {
  return (
    <div>
      <h1>Welcome, {auth.currentUser.displayName} </h1>
      <SignOut />
    </div>
  )
}
