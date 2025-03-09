import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link" href="#home">
          <img className="header__logo" src="/Logo.svg" alt="" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
