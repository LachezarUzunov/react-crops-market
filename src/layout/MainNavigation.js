import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav>
      <div>
        <h1>Logo</h1>
      </div>
      <ul className={classes.nav}>
        <li>
          <Link to="/">Начало</Link>
        </li>
        <li>
          <a href="#контакти">Контакти</a>
        </li>
        <li>
          <a href="#за-нас">За нас</a>
        </li>
        <li>
          <a href="#продукти">Продукти</a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
