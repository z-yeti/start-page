import { useSelector } from 'react-redux';
import { selectWelcome } from './welcomeSlice';

export function Welcome() {
  const welcome = useSelector(selectWelcome);

  return (
    <>
      <h1>{welcome}</h1>
    </>
  );
}
