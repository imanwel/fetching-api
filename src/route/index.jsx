import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../modules/home";
import Products from "../components/store";
import About from "../modules/about";
import Auth from "../modules/auth";
import Register from "../modules/register";
import Login from "../modules/login";

export default function Router() {
  const [cart, setCart] = useState(0);
  const myRoute = createBrowserRouter([
    {
      path: "/",
      element: <Home cart={cart} setCart={setCart} />,
      children: [
        {
          index: true,
          element: <h1>Home</h1>,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products",
          element: <Products cart={cart} setCart={setCart} />,
        },
      ],
    },

    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          index: true,
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={myRoute} />;
}
