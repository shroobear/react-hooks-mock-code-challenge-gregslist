import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [originalListings, setOriginalListings] = useState([]);

  // Fetch the original listings data
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listingsData) => {
        setListings(listingsData);
        setOriginalListings(listingsData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="app">
      <Header listings={listings} setListings={setListings} originalListings={originalListings}/>
      <ListingsContainer
        listings={listings}
        setListings={setListings}
        originalListings={originalListings}
      />
    </div>
  );
}

export default App;
