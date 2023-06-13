import React, { useState } from "react";

function Search({ listings, setListings, originalListings }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (searchValue) {
      const filteredListings = listings.filter((listing) =>
        listing.description.toLowerCase().includes(searchValue)
      );
      setListings(filteredListings);
    } else {
      setListings([...originalListings]);
    }

    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="search"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
