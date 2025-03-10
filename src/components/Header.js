import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header" role="banner" aria-label="Website header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <img
            className="header__logo"
            src="/Logo.svg"
            alt="Little Lemon Home"
          />
        </Link>
        <Navbar navLocation={"header"} />
      </div>
    </header>
  );
};

export default Header;
