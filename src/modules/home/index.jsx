import React, { useEffect, useState } from "react";
import Nav from "../../components/nav-bar";
import { Outlet } from "react-router-dom";

export default function Home({ cart, setCart }) {
  return (
    <>
      <Nav cart={cart} setCart={setCart} />

      <div className="h-[calc(100vh-100px)]">
        <Outlet />
      </div>
    </>
  );
}
