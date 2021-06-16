import styled from "styled-components";
import { lighten } from "polished";
import userLinkObjects from "../lib/links";

const LinkListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const LinkList = styled.ul`
  border: 1px solid;
  list-style: none;
  width: 100%;
  max-width: 200px;
  min-width: 150px;
  margin: 0.5rem auto;
  border-radius: 3px;
  padding: 0;
`;
const LinkListTitle = styled.p`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  background-color: ${(props) =>
    props.backgroundColor ? lighten(0.05, props.backgroundColor) : "#073642"};
  padding: 0.5rem;
  border-radius: 3px 3px 0 0;
`;
const LinkListItem = styled.li`
  margin: 0.5rem 1rem;
`;
const Link = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Links(props) {
  const { linkColor, backgroundColor } = props;
  return (
    <LinkListContainer>
      {Object.keys(userLinkObjects).map((userLinkObject) => {
        return (
          <LinkList key={userLinkObject}>
            <LinkListTitle backgroundColor={backgroundColor}>
              {userLinkObject}
            </LinkListTitle>
            {userLinkObjects[userLinkObject].map((userLink) => {
              return (
                <LinkListItem key={userLink.name}>
                  <Link href={userLink.url} style={{ color: linkColor }}>
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
