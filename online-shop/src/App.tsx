import "./App.css";
import ErrorPages from "./Pages/ErrorPages";
import HomePage from "./Pages/HomePage";
import RootLayout from "./Pages/RootLayout";
import ShoppingCartPage from "./Pages/ShoppingCartPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  return <RouterProvider router={router} />;
}

export default App;
