import React from "react";
import classes from "./SignUp.module.css";

const SignUp = () => {
  return (
    <section className={classes.sign__section}>
      <div className="card">
        <h2>Абонирай се за нашия ежеседмичен бюлетин за екслузивни оферти</h2>
        <form className={classes.sign__form}>
          <input
            className={classes.form__input}
            name="email"
            type="email"
            placeholder="Имейл"
          />
          <button className="btn__primary" type="submit">
            АБОНИРАЙ СЕ
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
