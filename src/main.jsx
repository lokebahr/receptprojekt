import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';  // Import RouterProvider
import router from './router';  // Import your router configuration
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  {/* Wrap the app in RouterProvider */}
  </React.StrictMode>
);
