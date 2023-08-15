import { json, useLoaderData } from "react-router-dom";
import classes from "./ProductList.module.css";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const data = useLoaderData();
  const products = data.products;

  return (
    <section className={classes.list}>
      <div className={classes["grid-container"]}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            thumbnail={product.thumbnail}
            price={product.price}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;

export const loader = async () => {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    throw json({ message: "Failed to fetch product data." }, { status: 500 });
  }
  return response;
};
