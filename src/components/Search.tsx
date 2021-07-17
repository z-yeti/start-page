import { useState } from 'react'
// import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInputChange = (value: string) => {
    setSearchValue(value)
  }

  const handleSearch = () => {
    searchValue.length > 0 &&
      window.open('https://google.com/search?q=' + searchValue)
  }

  return (
    <div>
      <input
        placeholder='What knowledge do you seek young Padawan'
        type='text'
        onChange={(e) => {
          handleSearchInputChange(e.target.value)
        }}
        onKeyDown={(e) => {
          e.key === 'Enter' && handleSearch()
        }}
      />
      <button type='submit' onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  )
}
