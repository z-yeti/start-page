// import styled from 'styled-components'

type LinksProps = {
  userLinks: any
}

export default function Links({ userLinks }: LinksProps) {
  const linkCategories = Object.keys(userLinks)

  return (
    <div>
      {linkCategories.map((linkCategory: any) => (
        <div>
          <h1>{linkCategory}</h1>
          {userLinks[linkCategory].map((link: any) => (
            <a href={link.url}>{link.text}</a>
          ))}
        </div>
      ))}
    </div>
  )
}
