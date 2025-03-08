import React from "react";

const Main = () => {
  return (
    <main>
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
      <section className="specials section section--after-hero" id="menu">
        <div className="container">
          <div className="section__header">
            <div className="section__title ">
              <h2 className="specials__title-text display-subtitle ">
                This weeks specials!
              </h2>
            </div>
            <div className="section__action">
              <a className="btn btn--primary" href="#menu">
                Online Menu
              </a>
            </div>
          </div>
          <div className="section__articles">
            <article className="section__article">
              <div className="section__article-image specials__image"></div>
              <div className="section__article-details">
                <div className="section__article-header">
                  <h2 className="section__article-title">Greek Salad</h2>
                  <span className="section__article-price">$12.99</span>
                </div>
                <p className="section__article-text p-text">
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <div className="section__article-footer">Order a deliver </div>
              </div>
            </article>
            <article className="section__article">
              <div className="section__article-image specials__image"></div>
              <div className="section__article-details">
                <div className="section__article-header">
                  <h2 className="section__article-title">Greek Salad</h2>
                  <span className="section__article-price">$12.99</span>
                </div>
                <p className="section__article-text p-text">
                  Check out our daily specials, we offer a variety of dishes
                  that change daily.
                </p>
                <div className="section__article-footer">
                  Order a deliver <span className="icon-delivery"></span>
                </div>
              </div>
            </article>
            <article className="section__article">
              <div className="section__article-image specials__image"></div>
              <div className="section__article-details">
                <div className="section__article-header">
                  <h2 className="section__article-title">Greek Salad</h2>
                  <span className="section__article-price">$12.99</span>
                </div>
                <p className="section__article-text p-text">
                  Check out our daily specials, we offer a variety of dishes
                  that change daily.
                </p>
                <div className="section__article-footer">Order a deliver </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
