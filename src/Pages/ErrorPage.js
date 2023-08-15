import { Fragment } from "react";
import Header from "../components/Header";
import classes from "./ErrorPage.module.css";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { status, data } = useRouteError();
  return (
    <Fragment>
      <Header />
      <div className={classes["error-content"]}>
        <h1>Oops, a {status} error occured!</h1>
        <p>{data}</p>
        <Link to="/">Return to shopping</Link>
      </div>
    </Fragment>
  );
};

export default ErrorPage;
