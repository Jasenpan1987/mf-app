import { render } from "solid-js/web";
import AddToCart from "./AddToCart";

import "./index.scss";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <AddToCart />
  </div>
);
render(App, document.getElementById("app")!);
