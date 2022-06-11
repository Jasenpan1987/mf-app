import React, { useCallback, useEffect, useState } from "react";
import { Product, getProductById, currency } from "home/Products";

export default function PdpContent() {
  const productId = "1";
  const [product, setProduct] = useState<Product>();

  const loadProductById = useCallback(
    async (id: string) => {
      const product = await getProductById(id);
      setProduct(product);
    },
    [setProduct]
  );

  useEffect(() => {
    loadProductById(productId);
  }, []);

  if (!product) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>
        {/* <div ref={addToCart}></div> */}
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
}
