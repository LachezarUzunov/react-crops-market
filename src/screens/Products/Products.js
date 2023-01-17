import React from "react";
import classes from "./Products.module.css";

const Products = () => {
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
      <div className={classes.products__line}>
        <article>
          <img src={require("../../assets/rice.jpg")} alt="ориз"></img>
          <h2>Ориз</h2>
          <p>
            Оризът е основна храна за над половината от световното население. На
            ориза се падат 20% от използваната хранителна енергия в света, богат
            е на въглехидрати - от 75 до 85% и протеини - от 5 до 10%. Тези два
            компонента са с много висока усвояемост за организма на човека –
            около 96 %, поради което храненето с ориз е много ефективно. Ние от
            Бодлев Стор разполагаме с висококачествени сортове собствено
            производство, както и такива от наши контрагенти от целия свят.
          </p>
        </article>
        <article>
          <img src={require("../../assets/rice.jpg")} alt="ориз"></img>
          <h2>Ориз</h2>
          <p></p>
        </article>
        <article>
          <img src={require("../../assets/rice.jpg")} alt="ориз"></img>
          <h2>Ориз</h2>
          <p></p>
        </article>
      </div>
    </section>
  );
};

export default Products;
