import { Fragment } from "react";

import classes from "./Header.module.css";

import mealsImage from "../../assets/meals.jpeg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="table" />
      </div>
    </Fragment>
  );
};

export default Header;
