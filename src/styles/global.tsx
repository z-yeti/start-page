import { createGlobalStyle } from 'styled-components'

interface StyleProps {
  backgroundColor: string
  color: string
  links: string
}

export const GlobalStyle = createGlobalStyle<StyleProps>`
  body {
    background-color: ${(p) => p.backgroundColor || '#333'};
    color: ${(p) => p.color || '#eee'};
    & a,
    & button {
      color: ${(p) => p.links || '#5ce1e6'};
    }
    & button {
      background-color: rgba(0, 0, 0, 0);
      transition: all .22s ease-in-out;
      &:hover:enabled {
        cursor: pointer;
        color: ${(p) => p.backgroundColor || '#333'};
        background-color: ${(p) => p.links || '#5ce1e6'};
      }
      &:hover:disabled {
        cursor: not-allowed;
      }
    }
  }
`
