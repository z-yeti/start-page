import styled from 'styled-components';

const InputLabel = styled.label`
  position: relative;
  width: 100%;
  height: 2rem;

  &:not(:last-child) input {
    margin-bottom: 1.2rem;
  }

  & input {
    height: 2rem;
    border: 0;
    border-bottom: 1px solid #333333;
    z-index: 2;
    font-size: 16px;
    background: none;
    &:focus {
      outline: none;
    }
    &:focus + span {
      top: -1.2rem;
      font-size: 0.8rem;
      color: #1abc9c;
    }
    &:focus ~ .bar {
      right: 0;
    }
  }
  & span {
    position: absolute;
    left: 0.2rem;
    top: 0;
    color: #aaaaaa;
    transition: 200ms;
    z-index: 1;
  }
`;

const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background-color: #1abc9c;
  visibility: hidden;
  transition: 250ms;
`;

function Username(props) {
  const { username, setUsername } = props;
  const setUsernameInLocalStorage = (e) => {
    setUsername(e.target.value);
    localStorage.setItem('start-page-username', e.target.value);
  };
  return (
    <InputLabel>
      <input type='text' value={username} onChange={(e) => setUsernameInLocalStorage(e)} />
      <span>Name</span>
      <Bar />
    </InputLabel>
  );
}

export default Username;
