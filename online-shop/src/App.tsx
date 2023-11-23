import "./App.css";
import ErrorPages from "./Pages/ErrorPages";
import HomePage from "./Pages/HomePage";
import RootLayout from "./Pages/RootLayout";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
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
