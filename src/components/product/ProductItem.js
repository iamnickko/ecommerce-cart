import classes from "./ProductItem.module.css";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const ProductItem = (props) => {
  const { id, title, price, thumbnail, description, product } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItem({ product, quantity: 1 }));
  };
  return (
    <Card className={classes.card}>
      <article className={classes['product-item-article']}>
        <Link to={`/product/${id}`}>
          <div className={classes.image}>
            <img src={thumbnail} alt={title} />
          </div>
          <div>
            <span>{title}</span>
            <span>${price}</span>
          </div>
          <p>{description}</p>
        </Link>
        <Button className={classes.button} onClick={addToCartHandler}>
          Add To Cart
        </Button>
      </article>
    </Card>
  );
};

export default ProductItem;
