import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import Button from "../../UI/Button";
import { Link} from "react-router-dom";

const CartItem = (props) => {
  const { product, title, price, quantity, thumbnail, id } = props;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItem({ product, quantity: 1 }));
  };
  const removeItemHandler = () => {
    dispatch(cartActions.removeItem({ product, quantity: 1 }));
  };

  const subtotal = quantity * price

  return (
    <li className={classes.row}>
      <Link to={`/product/${id}`}>
      <div className={classes.product}>
        <img src={thumbnail} alt={title} />
        <div className={classes["product-text"]}>
          <h3>{title}</h3>
          <span className={classes["product-price"]}>{`${new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(price)} each`}</span>
        </div>
      </div>
      </Link>
      <div className={classes.actions}>
        <span>Qty: {quantity}</span>
        <div className={classes.buttons}>
          <Button onClick={removeItemHandler}>-</Button>
          <Button onClick={addItemHandler}>+</Button>
        </div>
        <span>{`Subtotal: ${new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(subtotal)}`}</span>
      </div>
    </li>
  );
};

export default CartItem;
