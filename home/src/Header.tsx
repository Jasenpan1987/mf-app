import React from "react";
import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

export default function Header({ app }: { app: { name: string } }) {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow">Fidget spinner world | {app.name}</div>
        <div className="flex-end relative">
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
}
