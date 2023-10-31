import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import Hero from './components/Hero';

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
]);
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ColorModeScript />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
