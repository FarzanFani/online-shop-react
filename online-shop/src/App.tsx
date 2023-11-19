import "./App.css";
import HomePage from "./Pages/HomePage";
import RootLayout from "./Pages/RootLayout";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import Test from "./Test";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "shopping-cart", element: <ShoppingCartPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
