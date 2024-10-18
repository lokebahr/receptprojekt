import { NavLink} from 'react-router-dom';
import React from 'react';

function NavBar() {
  return (
    <nav>
      {/* Star icon for navigating to Favorite Recipes */}
      <NavLink to="/favorite-recipes">⭐ Favorites</NavLink>
      <NavLink to ="/">🏠 Home</NavLink>
      
    </nav>
  );
}
//
export default NavBar;
