import { use } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function Header() {
  const cartCtx = use(CartContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItem, item) => {
    return totalNumberOfItem + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Delicious Food App</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
