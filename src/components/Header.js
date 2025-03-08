import React from "react";
// import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* <h1 className="logo">Little Lemon</h1> */}
        <a className="header__link" href="#home">
          <img className="header__logo" src="/Logo.svg" alt="" />
        </a>
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <a href="#home">Home</a>
            </li>
            <li className="nav__list-item">
              <a href="#about">About</a>
            </li>
            <li className="nav__list-item">
              <a href="#menu">Menu</a>
            </li>
            <li className="nav__list-item">
              <a href="#reservations">Reservations</a>
            </li>
            <li className="nav__list-item">
              <a href="#order">Order Online</a>
            </li>
            <li className="nav__list-item">
              <a href="#login">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
