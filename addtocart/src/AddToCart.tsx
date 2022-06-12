import { jwt, addProductToCart } from "cart/cart";
import { createEffect, createSignal, Show } from "solid-js";

export default ({ id }: { id: number }) => {
  const [loggedIn, setLoggedIn] = createSignal(false);

  createEffect(() => {
    const subscription = jwt.subscribe((token: string) => setLoggedIn(!!token));
    return subscription.unsubscribe;
  });

  return (
    <Show when={loggedIn()}>
      <button
        class="bg-red-900 text-white py-2 px-5 rounded-md text-sm"
        onClick={() => addProductToCart(id)}
      >
        Add to cart
      </button>
    </Show>
  );
};
