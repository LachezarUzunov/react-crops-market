import React, { useState } from "react";
import classes from "./Products.module.css";
import { useTransition, animated } from "react-spring";

const Products = () => {
  // const [active, setActive] = useState("Ориз");
  const [active, setActive] = useState([
    { type: "Ориз", key: 1 },
    { type: "Варива", key: 2 },
    { type: "Зърнени", key: 3 },
  ]);

  const transition = useTransition(active, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const onCategoryChange = (e) => {
    console.log(e.target.name);
    setActive({ type: e.target.name, key: e.target.key });
  };

  const categories = [
    "Ориз",
    "Варива",
    "Житни продукти",
    "Брашна",
    "Зърнени закуски",
    "Захар",
  ];

  return (
    <section className="card">
      <div className={classes.products__heading}>
        <h2>Предлагаме богат асортимент от следните категории храни</h2>
      </div>
      <div className={classes.products__section}>
        <div className={classes.categories}>
          <div className={classes.div__width}>
            <li>
              <button
                onClick={onCategoryChange}
                className={`${classes.single__category} ${
                  active === "Ориз" ? classes.active__category : null
                }`}
                name="Ориз"
                key={1}
              >
                Ориз
              </button>
            </li>
          </div>
          <div className={classes.div__width}>
            <li>
              <button
                onClick={onCategoryChange}
                className={`${classes.single__category} ${
                  active === "Варива" ? classes.active__category : null
                }`}
                name="Варива"
                key={2}
              >
                Варива
              </button>
            </li>
          </div>
          <div className={classes.div__width}>
            <li>
              <button
                onClick={onCategoryChange}
                className={`${classes.single__category} ${
                  active === "Зърнени" ? classes.active__category : null
                }`}
                name="Зърнени"
                key={3}
              >
                Зърнени
              </button>
            </li>
          </div>
        </div>

        {/* <div>
          {active === "Ориз" ? (
            <article className={classes.category__second}>
              <div>
                <p>
                  Оризът е основна храна за над половината от световното
                  население. На ориза се падат 20% от използваната хранителна
                  енергия в света, богат е на въглехидрати - от 75 до 85% и
                  протеини - от 5 до 10%. Тези два компонента са с много висока
                  усвояемост за организма на човека – около 96 %, поради което
                  храненето с ориз е много ефективно. Ние от Бодлев Стор
                  разполагаме с висококачествени сортове собствено производство,
                  както и такива от наши контрагенти от целия свят.
                </p>
                <div className={classes.btns}>
                  <button className="btn__primary">Наше производство</button>
                  <button className="btn__primary">От света</button>
                </div>
              </div>
            </article>
          ) : active === "Варива" ? (
            <article className={classes.category__second}>
              <div>
                <h2>Варива</h2>
                <p>
                  Варивата са част от семейството на зърнените храни, известни
                  като бобови растения, и включват храни като нахут, грах, леща,
                  боб и фъстъци. Те са важен хранителен източник в целия свят.
                  Варивата са добър източник на протеини, фибри и основни
                  хранителни вещества, което ги прави здравословно допълнение
                  към вашата диета.
                </p>
                <button className="btn__primary btn__primary_left">
                  Към продуктите
                </button>
              </div>
              <img src={require("../../assets/beans1.jpg")} alt="ориз"></img>
            </article>
          ) : active === "Зърнени" ? (
            <article className={classes.category__second}>
              <div>
                <p>
                  Оризът е основна храна за над половината от световното
                  население. На ориза се падат 20% от използваната хранителна
                  енергия в света, богат е на въглехидрати - от 75 до 85% и
                  протеини - от 5 до 10%. Тези два компонента са с много висока
                  усвояемост за организма на човека – около 96 %, поради което
                  храненето с ориз е много ефективно. Ние от Бодлев Стор
                  разполагаме с висококачествени сортове собствено производство,
                  както и такива от наши контрагенти от целия свят.
                </p>
                <div className={classes.btns}>
                  <button className="btn__primary">Наше производство</button>
                  <button className="btn__primary">От света</button>
                </div>
              </div>
            </article>
          ) : null}
        </div> */}
      </div>
    </section>
  );
};

export default Products;
