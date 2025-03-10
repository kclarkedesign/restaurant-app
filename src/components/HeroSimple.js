import React from "react";

const Hero = ({
  title = "Little Lemon",
  subtitle = "Chicago",
  lead = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
  cta = "Reserve a Table",
  showBtn = true,
  ctaURL = "/reservations",
  imageClass = "hero__image home__image",
  bgClass = "bg--primary",
}) => {
  return (
    <section className={`hero hero--text-left ${bgClass}`} id="home">
      <div className="container">
        <div className="hero__container">
          <div className="hero__details">
            <h1 className="hero__title display-title">{title}</h1>
            <p className="hero__subtitle display-subtitle">{subtitle}</p>
            <p className="hero__lead lead-text">{lead}</p>
          </div>
          <div className={imageClass}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
