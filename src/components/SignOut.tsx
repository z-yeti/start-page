import { auth } from '../config/firebase'
import Button from './Button'

export default function SignOut() {
  const signOut = () => {
    auth.signOut()
    window.location.reload()
  }

  return <Button onClick={() => signOut()} text='Sign Out' />
}
