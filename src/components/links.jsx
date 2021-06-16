import userLinkObjects from '../lib/links';

function Links() {
  return (
    <div>
      {Object.keys(userLinkObjects).map((userLinkObject) => {
      return (
        <div key={userLinkObject}>
          <h2>{userLinkObject}</h2>
          {userLinkObjects[userLinkObject].map((userLink) => {
            return (
              <li key={userLink.name}>
                <a href={userLink.url}>{userLink.name}</a>
              </li>
            );
          })}
        </div>
      );
    })}
    </div>
  );
}

export default Links;
