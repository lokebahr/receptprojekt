import React from 'react'
//import { useParams, useOutletContext } from 'react-router-dom';

function FavoriteRecipes({favorites, setFavorites}) {
    
    const removeFavorite= (recipe) => {
        const updatedFavorites = favorites.filter(favorite => favorite.id !== recipe.id);
        setFavorites(updatedFavorites);
        console.log(favorites);

    }   
    return (
        
        <div>
        <h2>Favorites</h2>
        <ul>
            {favorites.length > 0 ? (
            favorites.map((favorite) => (
                <li key={favorite.id}>{favorite.title}
                    <button onClick={() => removeFavorite(favorite)}>Ta bort favorit</button>
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