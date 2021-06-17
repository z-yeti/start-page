import styled from 'styled-components';

const WelcomeText = styled.p`
  text-align: center;
  font-size: 3rem;
`;

function Welcome(props) {
  const { username } = props;
  const welcomes = ['Suh', 'Hello', 'Welcome'];
  const welcomeText = welcomes[Math.floor(Math.random() * welcomes.length)];
  return (
    <WelcomeText>
      {welcomeText} {username}
    </WelcomeText>
  );
}

export default Welcome;
