import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../modules/home";
import Products from "../components/store";
import About from "../modules/about";

export default function Router() {
  const [cart, setCart] = useState(0);
  const myRoute = createBrowserRouter([
    {
      path: "/",
      element: <Home cart={cart} setCart={setCart} />,
      children: [
        {
          index: true,
          element: <h1>store</h1>,
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
  ]);
  return <RouterProvider router={myRoute} />;
}
