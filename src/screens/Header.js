import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import classes from "./Header.module.css";

const Header = () => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });
  // const slideIn = useSpring({
  //   transform: { translate3d: "-100%, 0, 0" },
  //   translate3d: "0, 0, 0",
  // });

  return (
    <section className={classes.bg}>
      <article className={classes.radient__bg}>
        <div className="card">
          <div className={classes.heading__section}>
            <animated.h1 style={fade} className={classes.store__heading}>
              Bodlev Store
            </animated.h1>
            <div className={classes.subheading}>
              <animated.h2 style={fade} className={classes.subheading__text}>
                Вашият доверен партньор при търговията на едро с бобови, зърнени
                култури, варива и ориз.
              </animated.h2>
            </div>
            <animated.a
              style={fade}
              className={classes.button__secondary}
              href="#products"
            >
              Към продуктите ни
            </animated.a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Header;
