import { Fragment } from "react";

import classes from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpeg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="table" />
      </div>
    </Fragment>
  );
};

export default Header;
