import React from "react";

const History = () => {
  const historyImg = require("../img/img-restaurant.jpg");
  return (
    <section className="history section">
      <div className="container">
        <div className="history-container">
          <img src={historyImg} alt="History" className="history__image" />
          <div className="history-text">
            <div className="section__header">
              <div className="section__title">
                <h2 className="section__title-text display-subtitle">
                  Our History
                </h2>
              </div>
            </div>
            <p className="p-text">
              Nestled in the heart of Chicago, Little Lemon is more than just a
              restaurant—it's a culinary love letter to Mediterranean flavors.
              Founded by two passionate brothers, Marco and Nico, the restaurant
              blends their grandmother’s time-honored recipes with a modern
              twist. From the moment you step inside, the aroma of fresh basil,
              roasted garlic, and zesty lemons fills the air. Guests are greeted
              with warm smiles and a cozy ambiance, where rustic wooden tables
              meet the soft glow of hanging lanterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
