import { auth } from '../config/firebase'

export default function SignOut() {
  const signOut = () => {
    auth.signOut()
    window.location.reload()
  }

  return <button onClick={() => signOut()}>Sign Out</button>
}
