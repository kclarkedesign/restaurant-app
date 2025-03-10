import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const specials = [
  {
    title: "Greek Salad",
    price: "$12.99",
    text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    getImageSrc: () => require("../img/img-greek-salad.jpg"),
  },
  {
    title: "Bruchetta",
    price: "$5.99",
    text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    getImageSrc: () => require("../img/img-bruschetta.jpg"),
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../img/img-lemon-dessert.jpg"),
  },
];

const Specials = () => {
  return (
    <section className="specials section section--after-hero" id="menu">
      <div className="container">
        <div className="section__header">
          <div className="section__title ">
            <h2 className="section__title-text display-subtitle ">
              This weeks specials!
            </h2>
          </div>
          <div className="section__action">
            <Link className="btn btn--primary" to="/menu">
              Online Menu
            </Link>
          </div>
        </div>
        <div className="section__articles">
          {specials.map((special, index) => (
            <Card
              key={special.title}
              title={special.title}
              price={special.price}
              text={special.text}
              imageSrc={special.getImageSrc()}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
