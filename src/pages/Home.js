import React from "react";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import CustomersSay from "../components/CustomersSay";
import History from "../components/History";

const Home = () => {
  return (
    <main>
      <Hero cta={"Reserve a Table"} />
      <Specials />
      <CustomersSay />
      <History />
    </main>
  );
};

export default Home;
