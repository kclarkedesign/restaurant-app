import React from "react";
import { useLocation } from "react-router-dom";

const ConfirmedBooking = () => {
  const location = useLocation();
  const formData = location.state?.formData;
  const dateTime = formData ? new Date(formData.date) : null;
  const formattedDate = dateTime ? dateTime.toLocaleDateString() : "N/A";

  return (
    <section
      className="confirmation section"
      aria-labelledby="confirmation-title"
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
            <div className="section__title">
              <h2
                className="section__title-text display-subtitle"
                id="confirmation-title"
              >
                Your booking has been confirmed!
              </h2>
            </div>
          </div>
          <h3 style={{ marginTop: "2em" }}>Booking Details</h3>
          {formData ? (
            <div className="details" aria-live="polite">
              <p className="p-text">
                <strong>Date:</strong> {formattedDate}
              </p>
              <p className="p-text">
                <strong>Time:</strong> {formData.time}
              </p>
              <p className="p-text">
                <strong>Guests:</strong> {formData.guests}
              </p>
              <p className="p-text">
                <strong>Occasion:</strong> {formData.occasion}
              </p>
            </div>
          ) : (
            <p className="p-text" role="alert">
              No reservation details available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConfirmedBooking;
