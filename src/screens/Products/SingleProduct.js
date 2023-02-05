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
      <p>{product.package}</p>
    </div>
  );
};

export default SingleProduct;
