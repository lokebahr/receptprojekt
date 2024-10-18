import React from 'react';
import { useOutletContext } from 'react-router-dom';  

function FavoriteRecipes() {
  const { favorites, setFavorites } = useOutletContext();  
  const removeFavorite = (recipe) => {
    const updatedFavorites = favorites.filter(favorite => favorite.id !== recipe.id);
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <li key={favorite.id}>
              {favorite.title}
              <button onClick={() => removeFavorite(favorite)}>Remove Favorite</button>
            </li>
          ))
        ) : (
          <p>No favorite recipes yet.</p>
        )}
      </ul>
    </div>
  );
}

export default FavoriteRecipes;
