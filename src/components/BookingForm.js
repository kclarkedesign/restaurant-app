import React from "react";

const BookingForm = ({ submitForm, availableTimes = [], dispatch }) => {
  const todaysDate = new Date().toISOString().split("T")[0];
  const [fields, setFields] = React.useState({
    date: todaysDate,
    time: "",
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
    submitForm(fields); // Pass form data to submitForm function
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        value={fields.date}
        onChange={handleInputChange}
        aria-describedby="date-description"
      />
      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        value={fields.time}
        onChange={handleInputChange}
        aria-label="Select a reservation time"
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
        value={fields.guests}
        onChange={handleInputChange}
        aria-describedby="guests-description"
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={fields.occasion}
        onChange={handleInputChange}
        aria-label="Select an occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        type="submit"
        value="Make Your reservation"
        aria-label="Submit reservation form"
      />
    </form>
  );
};

export default BookingForm;
