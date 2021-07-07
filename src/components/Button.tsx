import styled from 'styled-components'

type ButtonProps = {
  text?: any
  onClick?: any
  disabled?: boolean
}

const StyledButton = styled.button`
  background: none;
  border-radius: 4px;
  border: 1px solid;
  padding: 0.6em 2.5em;
`

export default function Button({ text, onClick, disabled }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  )
}
