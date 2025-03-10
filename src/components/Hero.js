import React from "react";
import { Link } from "react-router-dom";

const Hero = ({
  title = "Little Lemon",
  subtitle = "Chicago",
  lead = "We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
  cta = "Reserve a Table",
  showBtn = true,
  ctaURL = "/reservations",
  imageClass = "hero__image home__image",
  bgClass = "bg--primary",
}) => {
  const ctaButton = showBtn ? (
    <Link
      className="hero__cta btn btn--primary"
      to={ctaURL}
      aria-label={`Navigate to ${cta}`}
    >
      {cta}
    </Link>
  ) : null;

  return (
    <section
      className={`hero hero--text-left ${bgClass}`}
      id="home"
      aria-labelledby="hero-title"
      aria-describedby="hero-lead"
    >
      <div className="container">
        <div className="hero__container">
          <div className="hero__details">
            <h1 className="hero__title display-title" id="hero-title">
              {title}
            </h1>
            <p className="hero__subtitle display-subtitle">{subtitle}</p>
            <p className="hero__lead lead-text" id="hero-lead">
              {lead}
            </p>
            {ctaButton}
          </div>
          <div className={imageClass}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
