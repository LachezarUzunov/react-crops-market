import React, { useState } from "react";
import classes from "./Products.module.css";
import { useTransition, animated } from "react-spring";
import SingleProduct from "./SingleProduct";
import { ourRice, beans, otherRice, wheat, others } from "../../Store/Products";

const Products = () => {
  // const [active, setActive] = useState("Ориз");
  const [active, setActive] = useState("Ориз");

  const slideIn = useTransition(active, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const onCategoryChange = (e) => {
    console.log(e.target.name);
    setActive(e.target.name);
  };

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
          <div className={classes.div__width}>
            <li>
              <button
                onClick={onCategoryChange}
                className={`${classes.single__category} ${
                  active === "Други" ? classes.active__category : null
                }`}
                name="Други"
                key={4}
              >
                Други
              </button>
            </li>
          </div>
        </div>

        <div>
          {active === "Ориз" ? (
            <article className={classes.category__second}>
              <div className={classes.category__info}>
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
              </div>
            </article>
          ) : active === "Варива" ? (
            <article className={classes.category__second}>
              <div className={classes.category__info}>
                <p>
                  Варивата са част от семейството на зърнените храни, известни
                  като бобови растения, и включват храни като нахут, грах, леща,
                  боб и фъстъци. Те са важен хранителен източник в целия свят.
                  Варивата са добър източник на протеини, фибри и основни
                  хранителни вещества, което ги прави здравословно допълнение
                  към вашата диета.
                </p>
              </div>
            </article>
          ) : active === "Зърнени" ? (
            <article className={classes.category__second}>
              <div className={classes.category__info}>
                <p>
                  Зърнените храни са неразделна част от всяка диета, тъй като
                  осигуряват на организма много протеини, въглехидрати и фибри,
                  а също и други основни хранителни вещества. Зърнените закуски
                  са популярен избор сред повечето хора: приготвят се бързо и
                  лесно сутрин, съдържат важни за организма витамини, хранителни
                  вещества и фибри и лесно се комбинират по ваш вкус.
                </p>
              </div>
            </article>
          ) : null}
        </div>

        <div className={classes.single__product__section}>
          {active === "Ориз"
            ? ourRice.map((rice) => <SingleProduct product={rice} />)
            : active === "Варива"
            ? beans.map((bean) => <SingleProduct product={bean} />)
            : active === "Зърнени"
            ? wheat.map((w) => <SingleProduct product={w} />)
            : active === "Други"
            ? others.map((o) => <SingleProduct product={o} />)
            : null}
        </div>
      </div>
    </section>
  );
};

export default Products;
