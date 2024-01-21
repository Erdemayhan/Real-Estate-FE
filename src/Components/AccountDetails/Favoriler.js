import React, { useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    // Add more initial favorites as needed
  ]);

  const handleRemoveFavorite = (itemId) => {
    const updatedFavorites = favorites.filter((item) => item.id !== itemId);
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <ul>
          {favorites.map((item) => (
            <li key={item.id}>
              {item.name}{" "}
              <button onClick={() => handleRemoveFavorite(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
