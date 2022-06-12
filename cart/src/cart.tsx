import React, { useEffect, useState } from "react";
import { Cart } from "home/Products";

import { BehaviorSubject } from "rxjs";

const API_ROOT = "http://localhost:8080";

export const jwt = new BehaviorSubject<any>(null);

export const login = async (username: string, password: string) => {
  const response = await fetch(`${API_ROOT}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: { access_token: string } = await response.json();
  jwt.next(data.access_token);

  getCart();
  return data.access_token;
};

export const cart = new BehaviorSubject<Cart | null>(null);
export const getCart = async () => {
  const response = await fetch(`${API_ROOT}/cart`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.value}`,
    },
  });
  const cartData: Cart = await response.json();
  cart.next(cartData);
  return cartData;
};

export const addProductToCart = async (productId: number) => {
  await fetch(`${API_ROOT}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.value}`,
    },
    body: JSON.stringify({ productId }),
  });

  return await getCart();
};

export const clearCart = async () => {
  await fetch(`${API_ROOT}/cart`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.value}`,
    },
  });
  return await getCart();
};

export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);

  useEffect(() => {
    setLoggedIn(!!jwt.value);
    const subscription = jwt.subscribe((token) => setLoggedIn(!!token));

    return subscription.unsubscribe;
  }, []);

  return loggedIn;
};
