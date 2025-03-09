import React from "react";

const Hero = ({ title, subtitle, lead, cta, ctaURL }) => {
  return (
    <section className="hero hero--text-left bg--primary" id="home">
      <div className="container">
        <div className="hero__container">
          <div className="hero__details">
            <h1 className="hero__title display-title">Little Lemon</h1>
            <p className="hero__subtitle display-subtitle">Chicago</p>
            <p className="hero__lead lead-text">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <a className="hero__cta btn btn--primary" href="#reservation">
              Reserve a Table
            </a>
          </div>
          <div className="hero__image home__image"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
