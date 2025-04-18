import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Outls from './componet/home/outls';
import AllLaoytHome from './componet/home/AllLaoytHome';
import AllLayout from './componet/about/AllLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outls />, 
    children: [
      {
        path: "",
        index: true,
        element: <AllLaoytHome  />,
      },

      {
        path: "/about",
        element: <AllLayout />

      }
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
