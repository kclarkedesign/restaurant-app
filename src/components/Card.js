import React from "react";

const Card = ({ imageSrc, title, price, text }) => {
  return (
    <>
      <article
        className="section__article"
        aria-labelledby={`card-title-${title}`}
      >
        <div
          className="section__article-image specials__image"
          style={{ backgroundImage: `url('${imageSrc}')` }}
          alt={`Image of ${title}`}
        ></div>
        <div className="section__article-details">
          <div className="section__article-header">
            <h2 className="section__article-title" id={`card-title-${title}`}>
              {title}
            </h2>
            <span className="section__article-price">{price}</span>
          </div>
          <p className="section__article-text p-text">{text}</p>
          <div className="section__article-footer">
            Order a deliver <span className="icon-delivery"></span>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
