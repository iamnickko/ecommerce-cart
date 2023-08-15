import classes from "./AuthForm.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { Fragment } from "react";
import {
  Form,
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Button from "../UI/Button";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const isLoginMode = searchParams.get("mode") === "login";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
    navigate("/");
  };

  return (
    <Fragment>
      <Form onSubmit={onSubmitHandler} method="POST" className={classes.form}>
        <h1>{isLoginMode ? "Login" : "Create Account"}</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className={classes.actions}>
          <Link to={`?mode=${isLoginMode ? "create" : "login"}`}>
            {isLoginMode ? "Create an account" : "Login"}
          </Link>
          <Button className={classes.button}>{isLoginMode ? "Login" : "Create"}</Button>
        </div>
      </Form>
    </Fragment>
  );
};

export default AuthForm;
