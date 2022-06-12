import React, { useCallback, useEffect, useState } from "react";
import { currency, getProducts, Product } from "./products";
import { addProductToCart, useLoggedIn } from "cart/cart";

export default function HomeContent() {
  const [products, setProducts] = useState<Product[]>([]);
  const loggedIn = useLoggedIn();

  const loadProducts = useCallback(async () => {
    const products = await getProducts();
    setProducts(products);
  }, [setProducts]);

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="flex">
              <div className="flex-grow font-bold text-md">
                {product.name}
                {/* <Link to={`/product/${product.id}`}>
                <a>{product.name}</a>
              </Link> */}
              </div>
              <div className="flex-end">{currency.format(product.price)}</div>
            </div>
            <div className="text-sm mt-4">{product.description}</div>
            {loggedIn && (
              <div className="text-right mt-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                  onClick={() => addProductToCart(product.id)}
                  id={`addtocart_${product.id}`}
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
