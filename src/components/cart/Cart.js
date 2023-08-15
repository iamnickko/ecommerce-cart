import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartState = useSelector((state) => state.cart);
  console.log(cartState);

  return (
    <div className={classes.cart}>
      <ul>
        {cartState.items.map((item) => (
          <Card key={item.product.id} className={classes.card}>
            <CartItem
              id={item.product.id}
              product={item.product}
              thumbnail={item.product.thumbnail}
              title={item.product.title}
              price={item.product.price}
              quantity={item.quantity}
            />
          </Card>
        ))}
      </ul>
      <div className={classes.actions}>
        <p>
          {`Total: ${new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(cartState.totalAmount)}`}
        </p>
        <Button>Checkout</Button>
        <Link to="/">
          <p>Continue Shopping</p>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
