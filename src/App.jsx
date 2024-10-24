import React, { useState } from 'react';
import RecipeSearch from './RecipeSearch';
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom';
import ImageStyle from './ImageStyle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from './Toast';
import './App.css';
import ViewMore from './ViewMore';
import RecipeDetails from './RecipeDetails';
import { useNavigate } from 'react-router-dom';


function App() {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [information, setInformation] = useState([]);
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  
  
  const getRecipe = async (ingredient) => {
    const API_KEY = "819ed5d062a148c1a9e29bc625e8346d";
    const baseUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${ingredient}`;
    console.log(ingredient);
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setRecipes(data.results);
      console.log(data.results);
    } catch (error) {
      console.error("Failed to fetch recipes:", error);
    }
  };

  
  const addToCart = (info) => {
    const newCartItems = info.extendedIngredients.map(ingredient => ({
      name: ingredient.name,
      amount: ingredient.measures.metric.amount,
      unit: ingredient.measures.metric.unitShort,
      id: ingredient.id  
    }));
  
    setCart((prevCart) => {
      
      const updatedCart = prevCart.map(cartItem => {
        const existingItem = newCartItems.find(newItem => newItem.id === cartItem.id);
        if (existingItem) {
          
          
          return {
            ...cartItem,
            amount: cartItem.amount + existingItem.amount
          };
        }
        return cartItem;
      });
  
      notify(info, "was added to cart")
      const newItems = newCartItems.filter(newItem => !prevCart.some(cartItem => cartItem.id === newItem.id));
  
     
      return [...updatedCart, ...newItems];
    });
  };
  
  
  

  const notify = (recipe, message) => toast(`${recipe.title} ${message}`);

  const addFavorite = (recipe) => {
    if (!favorites.some((fav) => fav.id === recipe.id)) {
      setFavorites([...favorites, recipe]);
      console.log(`${recipe.title} was added to favorites`);
      notify(recipe, "was added to Favorites");
    }
  };

  const viewMore = (recipe) => {
    navigate(`/recipes/${recipe.id}`);
    
    
  }

  return (
    <div>
    
      <NavBar />

      
      <Outlet context={{ favorites, 
        setFavorites, 
        recipes, 
        addFavorite, 
        getRecipe, 
        viewMore, 
        information,
        setInformation,
        setCart,
        cart,
        addToCart}} />

      
      
      <Toast/>
    </div>
  );
}

export default App;

