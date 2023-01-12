import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.bg}>
      <div className={classes.radient__bg}>
        <h2>We own this place</h2>
      </div>
    </div>
  );
};

export default Header;
