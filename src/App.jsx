import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeSearch from './RecipeSearch'
import ImageStyle from "./ImageStyle";
import FavoriteRecipes from './FavoriteRecipes'

// Your Spoonacular API key
const API_KEY = "819ed5d062a148c1a9e29bc625e8346d";

function App() {
  const [recipes, setRecipes] = useState([]); 
  const [favorites, setFavorites] = useState([]); 

  async function getRecipe(ingredient) {
    const baseUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${ingredient}`;
    
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setRecipes(data.results); 
    } catch (error) {
      console.error("Failed to fetch recipes:", error);
    }
  }

 
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
      <FavoriteRecipes favorites={favorites} setFavorites={setFavorites}/>
    </>
  );
}

export default App;
