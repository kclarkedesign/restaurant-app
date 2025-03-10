import React from "react";
import Review from "./Review";

const reviews = [
  {
    getImageSrc: () => require("../img/img-person-1.jpg"),
    name: "Logan Jones",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus sit amet nunc.",
    rating: 4.5,
  },
  {
    getImageSrc: () => require("../img/img-person-2.jpg"),
    name: "Jared Kash",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus sit amet nunc.",
    rating: 5,
  },
];

const CustomersSay = () => {
  return (
    <section
      className="reviews section bg--secondary-dark"
      id="reviews"
      aria-labelledby="reviews-title"
    >
      <div className="container">
        <div className="section__header">
          <div className="section__title">
            <h2
              className="section__title-text display-subtitle"
              id="reviews-title"
            >
              What Customers Say
            </h2>
          </div>
        </div>
        <div className="section__articles">
          {reviews.map((review) => (
            <Review key={review.name} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;
