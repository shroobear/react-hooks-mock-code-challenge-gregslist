import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings, originalListings }) {
  const handleListingDelete = (listingId) => {
    setListings((prevListings) =>
      prevListings.filter((listing) => listing.id !== listingId)
    );
  };

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            id={listing.id}
            description={listing.description}
            image={listing.image}
            location={listing.location}
            onDelete={handleListingDelete}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
