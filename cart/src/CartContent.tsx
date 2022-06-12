import React, { useEffect, useState } from "react";
import { jwt, login } from "./cart";
import Login from "./Login";
import MiniCart from "./MiniCart";

export default function CartContent() {
  const [token, setToken] = useState<string>();

  useEffect(() => {
    const subscription = jwt.subscribe((val) => {
      setToken(val ?? "");
    });

    return subscription.unsubscribe;
  }, []);

  return (
    <div>
      JWT: {token}
      <Login />
      <MiniCart />
    </div>
  );
}
