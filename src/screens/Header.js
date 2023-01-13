import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <section className={classes.bg}>
      <article className={classes.radient__bg}>
        <div className="card">
          <div className={classes.heading__section}>
            <h1 className={classes.store__heading}>Bodlev Store</h1>
            <div className={classes.subheading}>
              <h2 className={classes.subheading__text}>
                Вашият доверен партньор при търговията на едро с бобови, зърнени
                култури, варива и ориз.
              </h2>
            </div>
            <a className={classes.button__secondary} href="#products">
              Към продуктите ни
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Header;
