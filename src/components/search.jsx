import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(0, 0, 0, 0);
  border: 1px solid;
  color: ${(props) => (props.linkColor ? props.linkColor : "#2aa198")};
  border-radius: 3px;
  padding: 0.3rem 0.5rem;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  margin: 0.5rem auto;
`;
const SearchLabel = styled.label`
  text-align: center;
  font-size: 1.5rem;
`;
const SearchInput = styled.input`
  margin: 0.5em auto;
  width: 100%;
  color: ${(props) => (props.textColor ? props.textColor : "#93a1a1")};
  background: none;
  border: none;
  border-bottom: 1px solid;
  padding: 0.25rem 0;
`;

function Search(props) {
  const { textColor } = props;
  const [ searchActive, setSearchActive ] = useState(false);
  const [ searchText, setSearchText ] = useState("");
  const handleSearch = () => {
    window.location.href = `https://www.google.com/search?q=${searchText}`;
  };
  return (
    <div>
      {!searchActive ? (
        <SearchButton onClick={() => {setSearchActive(!searchActive)}}>
          <FontAwesomeIcon icon={ faSearch } />
        </SearchButton>
      ) : (
        <div>
          <SearchButton onClick={() => {setSearchActive(!searchActive)}}>
            <FontAwesomeIcon icon={ faTimes } />
          </SearchButton>
          <SearchContainer>
            <SearchLabel htmlFor="searchInput">Search</SearchLabel>
            <SearchInput
              type="text"
              id="searchInput"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="What knowledge do you seek young padawan?"
              textColor={textColor}
              />
            {searchText && <button onClick={handleSearch}>Search</button>}
          </SearchContainer>
        </div>
      )}
    </div>
  );
}

export default Search;
