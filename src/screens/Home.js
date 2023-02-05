import React from "react";
import About from "./About";
import Contacts from "./Contacts";
import Header from "./Header";
import Products from "./Products/Products";
import SignUp from "./SignUp";

const Home = () => {
  return (
    <div>
      <Header />
      <Products />
      <About />
      <Contacts />
      <SignUp />
    </div>
  );
};

export default Home;
