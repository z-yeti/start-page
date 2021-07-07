type WelcomeProps = {
  user?: any
  userData?: any
}

export default function Welcome({ userData }: WelcomeProps) {
  if (userData) {
    return <h1>Welcome, {userData.username} </h1>
  } else {
    return (
      <>
        <h1>Welcome</h1>
        <h2>Please Sign In Below</h2>
      </>
    )
  }
}
