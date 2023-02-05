import React from "react";
import classes from "./SingleProduct.module.css";

const SingleProduct = ({ product }) => {
  return (
    <div className={classes.product}>
      <img
        className={classes.product__image}
        src={product.img}
        alt="product"
      ></img>
      <h2>{product.type}</h2>
      <p className={classes.product__info}>{product.info}</p>
      <div></div>
      <h3 className={classes.product__package}>
        Пакетаж: {product.package} кг.
      </h3>
    </div>
  );
};

export default SingleProduct;
