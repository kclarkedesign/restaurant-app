import React, { useReducer, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import Hero from "../components/Hero";
import Review from "../components/Review";
import { fetchAPI, submitAPI } from "../utils/api";
import { useNavigate } from "react-router-dom";

const reviews = [
  {
    getImageSrc: () => require("../img/img-person-1.jpg"),
    name: "Logan Jones",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus sit amet nunc.",
    rating: 4.5,
  },
];

// Reducer function to manage availableTimes state
const availableTimesReducer = (state, action) => {
  const selectedDate = new Date(action.payload); // convert date string to Date object
  switch (action.type) {
    case "UPDATE_TIMES":
      return updateTimes(selectedDate); // Get available times based on date
    default:
      return selectedDate;
  }
};

// Function to initialize the availableTimes state
export function initializeTimes() {
  if (fetchAPI) {
    const date = new Date();
    const availableTimesToday = fetchAPI(date);

    return availableTimesToday;
  }
  // example return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

// Function to update available times based on the selected date
export const updateTimes = (selectedDate) => {
  if (fetchAPI) {
    const updatedTimesToday = fetchAPI(selectedDate);

    return updatedTimesToday;
  }
  // example return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const BookingPage = () => {
  // useReducer to manage available times state
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    undefined,
    initializeTimes
  );
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (fetchAPI) {
  //     const initialDate = new Date();
  //     console.log(initialDate);
  //     dispatch({ type: "UPDATE_TIMES", payload: initialDate });
  //   }
  // }, []);

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/reservations/confirmation");
    }
  };

  return (
    <main className="reservations">
      <Hero lead={"Reserve a table"} showBtn={false} />
      <section className="booking section section--after-hero">
        <div className="container container--2-col">
          <BookingForm
            submitForm={submitForm}
            availableTimes={availableTimes}
            dispatch={dispatch}
          />
          <div className="sidebar">
            <p className="sidebar__text p-text">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Review {...reviews[0]} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
