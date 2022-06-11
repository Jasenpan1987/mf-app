import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product, getProductById, currency } from "home/Products";

export default function PdpContent() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product>();

  const loadProductById = useCallback(
    async (id?: string) => {
      if (id) {
        const product = await getProductById(id);
        setProduct(product);
      } else {
        setProduct(undefined);
      }
    },
    [setProduct]
  );

  useEffect(() => {
    loadProductById(productId);
  }, [productId]);

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
