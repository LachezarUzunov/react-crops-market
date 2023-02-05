import React from "react";
import classes from "./Contacts.module.css";

const Contacts = () => {
  return (
    <section className={classes.contacts__section}>
      <article className="card">
        <h2>Пишете ни</h2>
        <div>
          <form className={classes.form}>
            <input type="text" placeholder="Вашето име" />
            <input type="email" placeholder="Имейл" />
            <textarea type="text" placeholder="Имейл" />
            <button className={classes.form__btn}>ИЗПРАТИ</button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Contacts;
