import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ReactComponent as Logo } from "../img/Logo.svg";

const Footer = () => {
  return (
    <footer
      className="footer section bg--secondary-light"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="container footer__container">
        <div className="footer__column">
          <div className="footer__logo">
            <Link to="/" className="footer__link">
              <Logo className="footer__img" alt="Little Lemon Home" />
            </Link>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__column">
            <h2 className="footer__heading" id="footer-heading">
              Little Lemon
            </h2>
            <Navbar navLocation="footer" />
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
              <Link
                to="#"
                className="footer__social-link"
                aria-label="Visit our Facebook page"
              >
                Facebook <span className="icon-facebook"></span>
              </Link>
              <Link
                to="#"
                className="footer__social-link"
                aria-label="Visit our X (Twitter) page"
              >
                X <span className="icon-twitter"></span>
              </Link>
              <Link
                to="#"
                className="footer__social-link"
                aria-label="Visit our Instagram page"
              >
                Instagram <span className="icon-instagram"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
