import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import MainNavigation from "./MainNavigation";
import { NavLink } from "react-router-dom";
import { authActions } from "../store/auth";
import Button from "../UI/Button";

const Header = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  let authContent = (
    <NavLink
      className={({ isActive }) => (isActive ? classes.active : undefined)}
      to="auth/?mode=login"
    >
      Login
    </NavLink>
  );

  if (isLoggedIn) {
    authContent = <Button onClick={logoutHandler}>Logout</Button>;
  }

  return (
    <header className={classes.header}>
        <div>
          <h1>BuyOnline</h1>
        </div>
        <div>
          <MainNavigation />
        </div>
        <div className={classes.info}>
          <div>{authContent}</div>
          <NavLink
            to="cart"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <div className={classes.cart}>
              <span className={classes.badge}>{numberOfCartItems}</span>
              <span>Cart</span>
            </div>
          </NavLink>
        </div>
    </header>
  );
};

export default Header;
