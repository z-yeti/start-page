function Username(props) {
  const { username, setUsername } = props;
  const setUsernameInLocalStorage = (e) => {
    setUsername(e.target.value);
    localStorage.setItem("start-page-username", e.target.value);
  };
  return (
    <div>
      <label htmlFor="usernameInput">Name: </label>
      <input
        type="text"
        id="usernameInput"
        placeholder="Name"
        value={username}
        onChange={(e) => setUsernameInLocalStorage(e)}
      />
    </div>
  );
}

export default Username;
