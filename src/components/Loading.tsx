import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  & svg {
    font-size: 3em;
  }
`

export default function Loading() {
  return (
    <LoadingContainer>
      <FontAwesomeIcon icon={faSpinner} spin />
    </LoadingContainer>
  )
}
