import React from "react";
import About from "./About";
import Contacts from "./Contacts";
import Header from "./Header";
import Products from "./Products/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <Products />
      <About />
      <Contacts />
    </div>
  );
};

export default Home;
