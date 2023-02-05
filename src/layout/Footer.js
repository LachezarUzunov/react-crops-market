import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <h1 className={classes.footer__heading}>BODLEV STORE</h1>

      <ul className={classes.permalinks}>
        <li>
          <a href="#home">Начало</a>
        </li>
        <li>
          <a href="#about">Продукти</a>
        </li>
        <li>
          <a href="#react">За нас</a>
        </li>
        <li>
          <a href="#wordpress">Контакти</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
