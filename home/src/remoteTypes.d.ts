declare module "home/Header" {
  const Header: any;
  export default Header;
}

declare module "home/Footer" {
  const Footer: any;
  export default Footer;
}

declare module "home/HomeContent" {
  const HomeContent: any;
  export default HomeContent;
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

  export interface CartItem extends Product {
    quantity: number;
  }

  export interface Cart {
    cartItems: CartItem[];
  }

  export const currency: Intl.NumberFormat;
  export const getProducts: () => Promise<Product[]>;
  export const getProductById: (productId: string) => Promise<Product>;
}

declare module "cart/MiniCart" {
  const MiniCart: any;
  export default MiniCart;
}

declare module "cart/CartContent" {
  const CartContent: any;
  export default CartContent;
}

declare module "cart/cart" {
  export const jwt: any;
  export const cart: any;
  export const login: (username: string, password: string) => Promise<string>;
  export const getCart: () => Promise<Cart>;
  export const addProductToCart: (productId: number) => Promise<Cart>;
  export const clearCart: () => Promise<Cart>;
  export const useLoggedIn: () => boolean;
}

declare module "cart/Login" {
  const Login: any;
  export default Login;
}

declare module "pdp/PdpContent" {
  const PdpContent: any;
  export default PdpContent;
}
