import React from "react";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div className="flex text-white h-screen">
      <div className="w-1/2 h-full bg-red-500 flex flex-col justify-center">
        Hello world
      </div>

      <div className="w-1/2 h-full bg-green-500 flex flex-col justify-center ">
        <Outlet />
      </div>
    </div>
  );
}
