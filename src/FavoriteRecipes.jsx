import React from 'react';
import { useOutletContext } from 'react-router-dom';  
import ImageStyle from './ImageStyle';

function FavoriteRecipes() {
  const { favorites, setFavorites, viewMore } = useOutletContext();  
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
            <li key={favorite.id} className="recipe-card" >
                <div className="recipe-content">
                    <div className="recipe-text">
                        <h3>{favorite.title}</h3>
                        
                        <button onClick = {() => viewMore(favorite)}>View More</button>
                        <button onClick={() => removeFavorite(favorite)}>Remove Favorite</button>
                </div>
                <ImageStyle url={favorite.image} />
              </div>
              
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
