import classes from "./ProductDetails.module.css";
import { json, useRouteLoaderData } from "react-router-dom";
import Button from "../UI/Button";
import { cartActions } from "../store/cart";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const data = useRouteLoaderData("product-details");
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const product = {
      product: data,
      quantity: 1,
    };
    dispatch(cartActions.addItem(product));
  };
  
  const haveImage1 = data.images[1] !== undefined;
  const haveImage2 = data.images[2] !== undefined;
  const haveImage3 = data.images[3] !== undefined;
  
  return (
    <section className={classes.content}>
      <aside className={classes["product-details-aside"]}>
        <div className={classes["main-image"]}>
          <img src={data.images[0]} alt={data.title} />
        </div>
        <div className={classes.thumbnails}>
          <div>
            {haveImage1 && <img src={data.images[1]} alt={data.title} />}
          </div>
          <div>
            {haveImage2 && <img src={data.images[2]} alt={data.title} />}
          </div>
          <div>
            {haveImage3 && <img src={data.images[3]} alt={data.title} />}
          </div>
        </div>
      </aside>
      <article className={classes["product-text"]}>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <hr />
        <p>${data.price}</p>
        <Button onClick={addToCartHandler}>Add To Cart</Button>
      </article>
    </section>
  );
};

export default ProductDetails;

export const loader = async ({ request, params }) => {
  const id = params.id;
  const response = await fetch("https://dummyjson.com/products/" + id);

  if (!response.ok) {
    throw json(
      { message: "Failed to fetch product details." },
      { status: 500 }
    );
  } else {
    return response;
  }
};
