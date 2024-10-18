import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import FavoriteRecipes from './FavoriteRecipes';
import HomePage from './HomePage';
import RecipeDetails from './RecipeDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "favorite-recipes",
        Component: FavoriteRecipes, 
      },
      {
        path: "search-recipe",
        Component: HomePage, 
      },
      {
        path: "recipes/:id",
        Component: RecipeDetails,
      }
      
    ],
  },
]);

export default router;
