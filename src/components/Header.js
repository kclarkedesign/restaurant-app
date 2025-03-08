import React from "react";
// import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* <h1 className="logo">Little Lemon</h1> */}
        <img src="../img/Logo.svg" alt="" />
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#menu">Menu</a>
            </li>
            <li className="nav-item">
              <a href="#reservation">Reservation</a>
            </li>
            <li className="nav-item">
              <a href="#order">Order</a>
            </li>
            <li className="nav-item">
              <a href="#login">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
