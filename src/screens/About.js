import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.about__section}>
      <div className="card">
        <div className={classes.about__info}>
          <div className={classes.about__info_bg}>
            <h3 className={classes.about__heading}>Кои сме ние?</h3>
            <h2>Водещи в износа и вноса на ориз и зърнени храни в региона</h2>
            <p>
              Lorem Ipsum е елементарен примерен текст, използван в печатарската
              и типографската индустрия. Lorem Ipsum е индустриален стандарт от
              около 1500 година, когато неизвестен печатар взема няколко
              печатарски букви и ги разбърква, за да напечата с тях книга с
              примерни шрифтове. Този начин не само е оцелял повече от 5 века,
              но е навлязъл и в публикуването на електронни издания като е
              запазен почти без промяна. Популяризиран е през 60те години на
              20ти век със издаването на Letraset листи, съдържащи Lorem Ipsum
              пасажи, популярен е и в наши дни във софтуер за печатни издания
              като Aldus PageMaker, който включва различни версии на Lorem
              Ipsum.
            </p>
          </div>
          <div className={classes.about__image}>
            <img src={require("../assets/truck.png")} alt="truck" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
