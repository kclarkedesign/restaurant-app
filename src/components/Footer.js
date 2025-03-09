import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Footer = () => {
  return (
    <footer className="footer section bg--secondary-light">
      <div className="container footer__container">
        <div className="footer__column">
          <div className="footer__logo">
            <Link to="/" className="footer__link" href="#home">
              <img className="footer__img" src="/Logo.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__column">
            <h2 className="footer__heading">Little Lemon</h2>
            <Navbar />
          </div>
          <div className="footer__column">
            <h2 className="footer__heading">Contact</h2>
            <div className="footer__contact">
              <p className="footer__contact-text">
                1234 Main Street
                <br />
                Chicago, IL 10001
                <br />
                Phone: 555-555-5555
              </p>
            </div>
          </div>
          <div className="footer__column">
            <h2 className="footer__heading">Social</h2>
            <div className="footer__social">
              <Link href="#" className="footer__social-link">
                Facebook
                <span className="icon-facebook"></span>
              </Link>
              <Link href="#" className="footer__social-link">
                X<span className="icon-twitter"></span>
              </Link>
              <Link href="#" className="footer__social-link">
                Instagram
                <span className="icon-instagram"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
