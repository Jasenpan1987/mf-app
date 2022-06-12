import React, { useEffect, useState } from "react";
import { cart } from "cart/cart";

export const useCartCount = () => {
  const [count, setCount] = useState(cart.cartItems.length);

  useEffect(() => {
    const subscription = cart.subscribe(({ cartItems }: any) => {
      setCount(cartItems.length);
    });

    return subscription.unsubscribe;
  }, []);

  return count;
};
