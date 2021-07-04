import firebase from 'firebase'
import { auth, Providers } from '../config/firebase'

export default function SignIn() {
  const signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
    new Promise<firebase.auth.UserCredential>((resolve, reject) => {
      auth
        .signInWithPopup(provider)
        .then((result) => resolve(result))
        .catch((error) => reject(error))
    })
  }

  return (
    <>
      <button onClick={() => signInWithSocialMedia(Providers.google)}>Sign in with Google</button>
      <button onClick={() => signInWithSocialMedia(Providers.github)}>Sign in with GitHub</button>
    </>
  )
}
