import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Review = ({ getImageSrc, name, rating, text }) => {
  const maxStars = 5.0;
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    if (rating >= i) {
      stars.push(
        <span key={i} className="fa fa-star checked" aria-hidden="true"></span>
      ); // Full star
    } else if (rating >= i - 0.5) {
      stars.push(
        <span
          key={i}
          className="fa fa-star-half-alt checked"
          aria-hidden="true"
        ></span>
      ); // Half star
    } else {
      stars.push(
        <span key={i} className="fa fa-star" aria-hidden="true"></span>
      ); // Empty star
    }
  }

  return (
    <article
      key={name}
      className="section__article"
      aria-labelledby={`review-title-${name}`}
    >
      <div className="section__article-details">
        <div className="section__article-header">
          <div
            className="section__article-image review__image"
            style={{ backgroundImage: `url('${getImageSrc()}')` }}
            alt={`Photo of ${name}`}
          ></div>
          <h2 className="section__article-title" id={`review-title-${name}`}>
            {name}
          </h2>
          <span
            className="section__article-rating"
            aria-label={`Rating: ${rating} out of 5 stars`}
          >
            {parseFloat(rating).toFixed(1)}{" "}
            <span className="star-rating">{stars}</span>
          </span>
        </div>
        <p className="section__article-text p-text">{text}</p>
      </div>
    </article>
  );
};

export default Review;
