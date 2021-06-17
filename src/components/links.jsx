import styled from 'styled-components';
import { lighten } from 'polished';
import userLinkObjects from '../lib/links';

const LinkListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const LinkList = styled.ul`
  position: relative;
  border: 1px solid;
  list-style: none;
  width: 100%;
  max-width: 200px;
  min-width: 150px;
  margin: 0.5rem auto;
  border-radius: 3px;
  padding: 0;
  box-shadow: 3px 3px 10px -5px rgb(0, 0, 0, 0.5);
  max-height: 420px;
  overflow: scroll;
`;
const LinkListTitle = styled.p`
  position: sticky;
  top: 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.25rem;
  background-color: ${(props) => (props.backgroundColor ? lighten(0.05, props.backgroundColor) : '#073642')};
  padding: 0.5rem;
  border-radius: 3px 3px 0 0;
  box-shadow: 0px 2px 5px -3px rgba(0, 0, 0, 0.5);
`;
const LinkListItem = styled.li``;
const Link = styled.a`
  display: block;
  text-decoration: none;
  padding: 0.75rem 1rem;
  color: ${(props) => (props.linkColor ? props.linkColor : '#2aa198')};
  &:hover {
    background-color: ${(props) => (props.backgroundColor ? lighten(0.025, props.backgroundColor) : '#073642')};
  }
`;

function Links(props) {
  const { linkColor, backgroundColor } = props;
  return (
    <LinkListContainer>
      {Object.keys(userLinkObjects).map((userLinkObject) => {
        return (
          <LinkList key={userLinkObject}>
            <LinkListTitle backgroundColor={backgroundColor}>{userLinkObject}</LinkListTitle>
            {userLinkObjects[userLinkObject].map((userLink) => {
              return (
                <LinkListItem key={userLink.name}>
                  <Link href={userLink.url} backgroundColor={backgroundColor} linkColor={linkColor}>
                    {userLink.name}
                  </Link>
                </LinkListItem>
              );
            })}
          </LinkList>
        );
      })}
    </LinkListContainer>
  );
}

export default Links;
