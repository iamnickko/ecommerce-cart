import { Fragment } from "react";
import ProductList from "../components/product/ProductList";
import HeroImage from "../components/HeroImage";

const HomePage = () => {
  return (
    <Fragment>
      <HeroImage />
      <ProductList />
    </Fragment>
  );
};

export default HomePage;
