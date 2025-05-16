import { use } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = use(CartContext);
  const userProgressCtx = use(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItem, item) => {
    return totalNumberOfItem + item.quantity;
  }, 0);

  function handleOpenCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Delicious Food App</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleOpenCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
