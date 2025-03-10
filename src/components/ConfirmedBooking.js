import React from "react";
// import "./ConfirmedBooking.css";

const ConfirmedBooking = () => {
  return (
    <section className="section">
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
                Your booking has been confirmed!
              </h2>
            </div>
          </div>
          <h3 className="display-subtitle">Booking Details</h3>
          <p className="p-text">TKTK</p>
        </div>
      </div>
    </section>
  );
};

export default ConfirmedBooking;
