import classes from "./CartPage.module.css";
import Cart from "../components/cart/Cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const cartState = useSelector((state) => state.cart);

  let content = (
    <div className={classes["empty-cart"]}>
      <p>No items are in the cart.</p>
      <Link to="/">Start shopping</Link>
    </div>
  );

  if (cartState.items.length > 0) {
    content = <Cart />;
  }
  return (
      <div className={classes.content}>
        <h1>Cart</h1>
        {content}
      </div>
  );
};

export default CheckoutPage;
