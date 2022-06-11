declare module "home/Header" {
  const Header: any;
  export default Header;
}

declare module "home/Footer" {
  const Footer: any;
  export default Footer;
}

declare module "home/Products" {
  export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    longDescription: string;
  }
  export const currency: Intl.NumberFormat;
  export const getProducts: () => Promise<Product[]>;
  export const getProductById: (productId: string) => Promise<Product>;
}
