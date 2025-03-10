import React from "react";
// import "./UnderConstruction.css"; // Assuming you want to style it

const UnderConstruction = () => {
  return (
    <section
      className="section"
      aria-labelledby="hero-title"
      aria-describedby="hero-lead"
    >
      <div className="under-construction">
        <div
          className="container"
          style={{
            textAlign: "center",
            flexDirection: "column",
            minHeight: "50vh",
            justifyContent: "center",
          }}
        >
          <div className="section__header" style={{ justifyContent: "center" }}>
            <div className="section__title ">
              <h2 className="section__title-text display-subtitle ">
                Page Under Construction
              </h2>
            </div>
          </div>
          <p className="p-text">
            We're working hard to bring you this page. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnderConstruction;
