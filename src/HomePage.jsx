import React from 'react';
import RecipeSearch from './RecipeSearch';
import { useOutletContext } from 'react-router-dom';
import ImageStyle from './ImageStyle';

function HomePage() {
  const { recipes, addFavorite, getRecipe, viewMore } = useOutletContext(); 


  return (
    <div>
      <RecipeSearch onSearch={getRecipe} />

      <h2>Recipes</h2>
      <ul>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <li key={recipe.id} className="recipe-card" onClick={() => viewMore(recipe)} style={{cursor: 'pointer'}}>
              <div className="recipe-content">
                <div className="recipe-text">
                  <h3>{recipe.title}</h3>
                  <button onClick={(e) => {
                    e.stopPropagation();
                    addFavorite(recipe)}
                  }>Favorite</button>
                  <button onClick={(e) => {
                    e.stopPropagation();
                    viewMore(recipe)}
                  }>View more</button>
                </div>
                <ImageStyle url={recipe.image} />
              </div>
            </li>
          ))
        ) : (
          <p>No recipes found</p> 
        )}
      </ul>
    </div>
  );
}

export default HomePage;
