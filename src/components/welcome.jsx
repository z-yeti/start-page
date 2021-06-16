import styled from "styled-components";

const WelcomeText = styled.p`
  text-align: center;
  font-size: 3rem;
`;

function Welcome() {
  return <WelcomeText>Welcome Yeti</WelcomeText>;
}

export default Welcome;
