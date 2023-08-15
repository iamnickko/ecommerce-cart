import classes from "./About.module.css";

import { Link } from "react-router-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";

const About = () => {
  return (
    <div className={classes.content}>
      <article>
        <h1>About This Project</h1>
        <p>
          The purpose of this project was to practice implementing a few React
          libraries such as React Router and Redux Toolkit. The content is
          fetched from dummyjson.com and is not my own.
        </p>
        <Card className={classes.card}>
          <h3>React Router</h3>
          <p>
            <code>loader</code>s are used to fetch data from the dummy API and
            include <code>if (!response.ok)</code> error handling that are
            caught with an <code>errorElement</code> in the parent route.
          </p>
          <p>
            <code>useSearchParams()</code> is used on the authentication pages
            to toggle between a 'login' and 'create account' version of the same
            form.
          </p>
          <p>
            <code>NavLink</code> components are used in the main navigation and
            utilise the <code>isActive</code> attribute for styling.
          </p>
        </Card>
        <Card className={classes.card}>
          <h3>Redux Toolkit</h3>
          <p>
            <code>configureStore()</code> takes two slices, one for the cart and
            one for the basic authentication feature (mainly as opportunity to
            create multiple slices).
          </p>
          <p>
            The cart behaviour is the capstone of this project - it accumulates
            same <code>id</code> products into one item render and dynamically adjusts
            quantity, subtotal and total values. Quantity can adjusted in the
            cart and will remove products when quantity reaches 0. The component
            will not render when the cart is empty. is not empty
          </p>
          <p>The authentication is basic and used as a chance to implement a second redux slice.</p>
          <Link to="/cart">
            <Button>Check out the cart functionality</Button>
          </Link>
        </Card>
      </article>
    </div>
  );
};

export default About;
