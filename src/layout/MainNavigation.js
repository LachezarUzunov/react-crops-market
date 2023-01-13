import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav>
      <div className={`card ${classes.nav__section}`}>
        <div>
          <img
            className={classes.logo}
            src={require("../assets/logo(1).png")}
            alt="logo"
          ></img>
        </div>
        <ul className={classes.nav}>
          <li>
            <Link to="/">Начало</Link>
          </li>
          <li>
            <a href="#продукти">Продукти</a>
          </li>
          <li>
            <a href="#за-нас">За нас</a>
          </li>
          <li>
            <a href="#контакти">Контакти</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
