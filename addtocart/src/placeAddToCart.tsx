import { render } from "solid-js/web";
import AddToCart from "./AddToCart";

export default function placeAddToCart(el: any, productId: number) {
  console.log("el:: ", el);
  render(() => <AddToCart id={productId} />, el);
}
