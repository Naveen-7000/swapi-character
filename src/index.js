import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import Hero from './components/Hero';
import FavoritePage from './components/FavoritePage';
import { FavoritesProvider } from './context-api/FavoriteContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Unexcpeted error</div>,
  },
  {
    path: '/heros/:heroId',
    element: <Hero />,
  },
  {
    path: '/favorite',
    element: <FavoritePage />
  }
]);
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
      <RouterProvider router={router} />
      </FavoritesProvider>
    </QueryClientProvider>
  </StrictMode>
);
