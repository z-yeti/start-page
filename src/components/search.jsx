import React, { useState } from "react";

function Search() {
  const [searchText, setSearchText] = useState('')
  const handleSearch = () => {
    window.location.href = `https://www.google.com/search?q=${searchText}`
  }
  return (
    <div>
      <label htmlFor="searchInput">Search</label>
      <input
        type="text"
        id="searchInput"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="What knowledge do you seek young padawan?"
      />
      {searchText && <button onClick={handleSearch}>Search</button>}
    </div>
  );
}

export default Search;
