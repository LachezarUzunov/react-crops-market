import React, { useState } from "react";
import classes from "./Products.module.css";

const Products = () => {
  const [active, setActive] = useState("Ориз");

  const onCategoryChange = (e) => {
    console.log(e.target.name);
    setActive(e.target.name);
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
          <li>
            <button
              onClick={onCategoryChange}
              className={`${classes.single__category} ${
                active === "Ориз" ? classes.active__category : null
              }`}
              name="Ориз"
            >
              Ориз
            </button>
          </li>

          <li>
            <button
              onClick={onCategoryChange}
              className={`${classes.single__category} ${
                active === "Варива" ? classes.active__category : null
              }`}
              name="Варива"
            >
              Варива
            </button>
          </li>
          <li>
            <button
              onClick={onCategoryChange}
              className={`${classes.single__category} ${
                active === "Зърнени" ? classes.active__category : null
              }`}
              name="Зърнени"
            >
              Зърнени
            </button>
          </li>
        </div>
        <div>
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
        </div>
      </div>

      {/* <div className={classes.products__line}>
        <article className={classes.category}>
          <img src={require("../../assets/rice2.jpg")} alt="ориз"></img>
          <div>
            <h2>Ориз</h2>
            <p>
              Оризът е основна храна за над половината от световното население.
              На ориза се падат 20% от използваната хранителна енергия в света,
              богат е на въглехидрати - от 75 до 85% и протеини - от 5 до 10%.
              Тези два компонента са с много висока усвояемост за организма на
              човека – около 96 %, поради което храненето с ориз е много
              ефективно. Ние от Бодлев Стор разполагаме с висококачествени
              сортове собствено производство, както и такива от наши контрагенти
              от целия свят.
            </p>
            <div className={classes.btns}>
              <button className="btn__primary">Наше производство</button>
              <button className="btn__primary">От света</button>
            </div>
          </div>
        </article>
        <article className={classes.category__second}>
          <div>
            <h2>Варива</h2>
            <p>
              Варивата са част от семейството на зърнените храни, известни като
              бобови растения, и включват храни като нахут, грах, леща, боб и
              фъстъци. Те са важен хранителен източник в целия свят. Варивата са
              добър източник на протеини, фибри и основни хранителни вещества,
              което ги прави здравословно допълнение към вашата диета.
            </p>
            <button className="btn__primary btn__primary_left">
              Към продуктите
            </button>
          </div>
          <img src={require("../../assets/beans1.jpg")} alt="ориз"></img>
        </article>
        <article className={classes.category}>
          <img src={require("../../assets/rice.jpg")} alt="ориз"></img>
          <div>
            <h2>Други продукти</h2>
            <p>
              Оризът е основна храна за над половината от световното население.
              На ориза се падат 20% от използваната хранителна енергия в света,
              богат е на въглехидрати - от 75 до 85% и протеини - от 5 до 10%.
              Тези два компонента са с много висока усвояемост за организма на
              човека – около 96 %, поради което храненето с ориз е много
              ефективно. Ние от Бодлев Стор разполагаме с висококачествени
              сортове собствено производство, както и такива от наши контрагенти
              от целия свят.
            </p>
            <button className="btn__primary">Към продуктите</button>
          </div>
        </article>
      </div> */}
    </section>
  );
};

export default Products;
