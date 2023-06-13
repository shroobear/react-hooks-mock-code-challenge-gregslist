import React, { useState } from "react";

function ListingCard({ id, description, image, location, onDelete }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Item successfully deleted");
          onDelete(id); // Call the onDelete callback with the listing ID
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button
          className={`emoji-button favorite ${isFavorite ? "active" : ""}`}
          onClick={handleFavorite}
        >
          {isFavorite ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
