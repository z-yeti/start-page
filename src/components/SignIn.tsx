import { auth, Providers } from '../config/firebase'

export default function SignIn() {
  return (
    <>
      <button onClick={() => auth.signInWithPopup(Providers.google)}>
        Sign in with Google
      </button>
      <button onClick={() => auth.signInWithPopup(Providers.github)}>
        Sign in with GitHub
      </button>
    </>
  )
}
