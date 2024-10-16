import React, { useState } from "react";

function RecipeSearch({ onSearch }) {
  const [ingredient, setIngredient] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(ingredient); // Make sure onSearch is called here
  };

  return (
    <form onSubmit={handleSearch}>
      <input 
        type="text" 
        placeholder="Enter ingredient"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button type="submit">Search Recipes</button>
    </form>
  );
}

export default RecipeSearch;
