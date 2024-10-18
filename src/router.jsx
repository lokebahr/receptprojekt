import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import FavoriteRecipes from './FavoriteRecipes';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "favorite-recipes",
        Component: FavoriteRecipes, 
      }
    ],
  },
]);

export default router;
