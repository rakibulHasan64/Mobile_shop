import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Outls from './componet/home/outls';
import AllLaoytHome from './componet/home/AllLaoytHome';
import AllLayout from './componet/about/AllLayout';
import DetlisPage from './componet/DetlisPage';
import FavoriteItem from './componet/home/FavoriteItem';
import CartProvider from './componet/provider/CartProvider';
import ErrorPage from './componet/home/ErrorPage';
import ShopCart from './componet/home/ShpoCart';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Outls />, 
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        index: true,
        loader: () => fetch('/phone.json'),
        element: <AllLaoytHome />,
      },

      {
        path: "/Detlis/:id",
        loader: () => fetch('/phone.json'),
        element: <DetlisPage />

      },


      {
        path: "/Favorite",
        element: <FavoriteItem />

      },

      {
        path: "/shop",
        element:<ShopCart />

      },



      
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
  
    </CartProvider>
      
  </StrictMode>
);
