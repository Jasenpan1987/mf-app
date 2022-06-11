const API_ROOT = "http://localhost:8080";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_ROOT}/product`);
  return response.json();
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${API_ROOT}/product/${id}`);
  return response.json();
};

export const currency = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
});
