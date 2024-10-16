import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeSearch from './RecipeSearch'
import ImageStyle from "./ImageStyle";


// Your Spoonacular API key
const API_KEY = "819ed5d062a148c1a9e29bc625e8346d";

function App() {
  const [recipes, setRecipes] = useState([]); // State to store search results
  const [favorites, setFavorites] = useState([]); // State to store favorite recipes

  // Function to fetch recipes based on the ingredient
  async function getRecipe(ingredient) {
    const baseUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${ingredient}`;
    
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setRecipes(data.results); // Update the recipe state
    } catch (error) {
      console.error("Failed to fetch recipes:", error);
    }
  }

  // Function to add recipe to favorites
  const addFavorite = (recipe) => {
    if (!favorites.some((fav) => fav.id === recipe.id)) {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <>
      

      {/* Recipe Search Component */}
      <RecipeSearch onSearch={getRecipe} />

      {/* Display Search Results */}
      <div>
        <h2>Recipes</h2>
        <ul>
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <li key={recipe.id}>
                {recipe.title}
                <ImageStyle url ={recipe.image}/>
                
                <button onClick={() => addFavorite(recipe)}>Favorite</button>
              </li>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </ul>
      </div>

      {/* Display Favorites */}
      <div>
        <h2>Favorites</h2>
        <ul>
          {favorites.length > 0 ? (
            favorites.map((favorite) => (
              <li key={favorite.id}>{favorite.title}</li>
            ))
          ) : (
            <p>No favorite recipes yet.</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
