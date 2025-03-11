import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ReactComponent as Logo } from "../img/Logo.svg";

const Header = () => {
  return (
    <header className="header" role="banner" aria-label="Website header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <Logo className="header__logo" alt="Little Lemon Home" />
        </Link>
        <Navbar navLocation={"header"} />
      </div>
    </header>
  );
};

export default Header;
