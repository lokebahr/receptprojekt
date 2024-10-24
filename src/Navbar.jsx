import { NavLink} from 'react-router-dom';
import React from 'react';

function NavBar() {
  return (
    <nav>
      
      <NavLink to="/"> 🏠Home</NavLink>
      <NavLink to ="/search-recipe"> 🔍Search Recipes</NavLink>
      <NavLink to="/favorite-recipes"> ⭐Favorites</NavLink>
      <NavLink to ="/shopping-cart"> 🛒Shopping Cart</NavLink>
      
      
    </nav>
  );
}
//
export default NavBar;
