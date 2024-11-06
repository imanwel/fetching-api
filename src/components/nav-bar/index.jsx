import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav({ cart, setCart }) {
  const { pathname } = useLocation();
  // const [cart, setCart] = useState(0);
  return (
    <>
      <nav className="flex items-center justify-between p-6 bg-black h-[100px]">
        <div className="text-[2rem] text-[white] "> My store</div>

        <div className="flex gap-5">
          <Link
            className={`hover:text-[black] hover:bg-white p-3 ${
              pathname === "/" ? "bg-white text-black" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className={`hover:text-[black] hover:bg-white p-3 ${
              pathname === "/about" ? "bg-white text-black" : "text-white"
            }`}
          >
            About
          </Link>
          <Link
            to={"/products"}
            className={`hover:text-[black] hover:bg-white p-3 ${
              pathname === "/products" ? "bg-white text-black" : "text-white"
            }`}
          >
            Products
          </Link>
        </div>

        <div className="text-white flex gap-3">
          <div className="">
            Cart: <span className="font-semibold">{cart}</span>
          </div>
          <div className="cursor-pointer">Login/Register</div>
        </div>
      </nav>
    </>
  );
}
