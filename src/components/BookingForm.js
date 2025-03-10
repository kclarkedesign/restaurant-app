import React from "react";

const BookingForm = ({ submitForm, availableTimes = [], dispatch }) => {
  const todaysDate = new Date().toISOString().split("T")[0];
  const [fields, setFields] = React.useState({
    date: todaysDate,
    time: availableTimes.length > 0 ? availableTimes[0] : "",
    guests: 1,
    occasion: "Birthday",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [id]: value,
    }));

    // Dispatch an action when the date is selected
    if (id === "date" && dispatch) {
      dispatch({ type: "UPDATE_TIMES", payload: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (
      fields.date == "" ||
      fields.guests < 0 ||
      fields.occasion == "" ||
      fields.time == ""
    ) {
      return false;
    }
    submitForm(fields); // Pass form data to submitForm function
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-labelledby="booking-form-title"
    >
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        value={fields.date}
        min={new Date().toISOString().split("T")[0]}
        onChange={handleInputChange}
        aria-describedby="date-description"
        pattern="((0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4})|[0-9]{4}|(0[1-9]|1[012]).[0-9]{4}"
        required
      />
      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        value={fields.time}
        onChange={handleInputChange}
        aria-label="Select a reservation time"
        required
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        required
        value={fields.guests}
        onChange={handleInputChange}
        aria-describedby="guests-description"
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={fields.occasion}
        onChange={handleInputChange}
        required
        aria-label="Select an occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        className="btn btn--primary"
        type="submit"
        value="Make Your reservation"
        aria-label="Submit reservation form"
      />
    </form>
  );
};

export default BookingForm;
