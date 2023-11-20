import "./App.css";
import Product from "./Models/Product";
import ErrorPages from "./Pages/ErrorPages";
import HomePage from "./Pages/HomePage";
import RootLayout from "./Pages/RootLayout";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import { CartContext } from "./Store/ShoppingCardContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext } from "react";
import CartContextProvider from "./Store/ShoppingCardContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPages />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "shopping-cart", element: <ShoppingCartPage /> },
    ],
  },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
