import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import FavoriteRecipes from './FavoriteRecipes';
import HomePage from './HomePage';

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
        path: "home-page",
        Component: HomePage, 
      }
    ],
  },
]);

export default router;
